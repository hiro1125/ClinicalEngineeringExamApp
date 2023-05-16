import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { QuizData, RouteButton } from '../../types/type';
import { useNavigation } from '@react-navigation/native';
import { examMenuButton } from '../contents';
import { StackActions } from '@react-navigation/native';
import { useTimer } from '../hooks/useTimer';

type QuizQuestionCardProps = {
  shuffledQuestions: QuizData[];
  index: number;
  timer: number;
  answerButton: (index: number) => void;
};

export const QuizQuestionCard: FC<QuizQuestionCardProps> = ({
  shuffledQuestions,
  index,
  answerButton,
}) => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.dispatch(StackActions.pop(2));
  };

  const byFieldMenuButtons = examMenuButton.filter(
    (button: RouteButton) => button.navigationName === 'ByField'
  );

  const { timer } = useTimer();

  const min = Math.floor(timer / 60);
  const rem = timer % 60;

  return (
    <SafeAreaView>
      <View style={styles.returnContainer}>
        {byFieldMenuButtons.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={styles.byFieldButton}
            onPress={handleNavigation}
          >
            <Text style={styles.playButtonText}>戻る</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.titleQuestion}>
        <Text style={styles.questionNumber}>
          【問題{index + 1} / {shuffledQuestions.length}】
        </Text>
        <Text style={styles.questionText}>
          {shuffledQuestions[index].question}
        </Text>
      </View>
      <Text style={styles.timeRestart}>
        {min === 0 ? `残り時間：${rem}秒` : `残り時間：${min}分${rem}秒`}
      </Text>
      {shuffledQuestions[index].options.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => answerButton(index)}
            style={styles.answerButton}
          >
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default QuizQuestionCard;

const styles = StyleSheet.create({
  returnContainer: {
    alignItems: 'flex-start',
    marginLeft: 10,
  },
  byFieldButton: {
    backgroundColor: '#2d82a8',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  playButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  questionNumber: {
    textAlign: 'center',
    position: 'absolute',
    top: 5,
    margin: 5,
  },
  titleQuestion: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: 360,
    height: 205,
    borderRadius: 15,
    backgroundColor: 'white',
    fontSize: 15,
    textAlign: 'center',
    textTransform: 'capitalize',
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginBottom: 20,
    margin: 10,
  },
  questionText: {
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
  },
  timeRestart: {
    marginLeft: 10,
    marginRight: 10,
    shadowRadius: 6,
    backgroundColor: '#2e44bc',
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center',
  },
  answerButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    margin: 10,
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    textTransform: 'lowercase',
  },
});

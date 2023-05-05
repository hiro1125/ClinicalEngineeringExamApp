import React, { FC, useState } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Props, QuizAlertProps } from '../../types/type';
import { shuffle } from 'lodash';
import { questions } from '../quiz/IntroductionToMedicine';
import { TOTAL_QUESTIONS } from '../contents';
import { ResultScreen } from './ResultScreen';
import { showCorrectAnswerAlert, showIncorrectAnswerAlert } from '../function';

export const QuizScreen: FC<Props> = () => {
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResultScreen, setShowResultScreen] = useState<boolean>(false);
  const shuffledQuestions = shuffle(questions).slice(0, TOTAL_QUESTIONS);

  const answerButton = (optionIndex: number) => {
    const currentQuestion = shuffledQuestions[index];
    if (currentQuestion.answerIndex === optionIndex) {
      showCorrectAnswerAlert({
        score,
        setScore,
        setShowResultScreen,
        shuffledQuestions,
        index,
        setIndex,
      } as QuizAlertProps);
    } else {
      showIncorrectAnswerAlert({
        shuffledQuestions,
        index,
        setIndex,
        setShowResultScreen,
      } as QuizAlertProps);
    }
  };

  return (
    <LinearGradient
      colors={['#a7ddff', '#2d82a8']}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        {showResultScreen ? (
          <ResultScreen score={score} />
        ) : (
          <View>
            <View style={styles.titleQuestion}>
              <Text style={styles.questionNumber}>
                【問題{index + 1} / {shuffledQuestions.length}】
              </Text>
              <Text style={styles.questionText}>
                {shuffledQuestions[index].question}
              </Text>
            </View>
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
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionNumber: {
    textAlign: 'center',
    position: 'absolute',
    top: 5,
    margin: 5,
  },
  questionText: {
    fontSize: 15,
    textAlign: 'center',
    padding: 5,
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
});

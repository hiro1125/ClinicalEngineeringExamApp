import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { FONTSIZE } from '../styles';
import { shuffle } from 'lodash';
import { useRootSelector } from '../redux/store/store';
import { QuizData } from '../../types/type';
import { BUTTON_TEXT } from '../contents';

type Props = {
  score: number;
  setShuffledQuestions: (questions: QuizData[]) => void;
};

const ResultScreen: FC<Props> = ({ score, setShuffledQuestions }) => {
  const navigation = useNavigation();

  const quizData = useRootSelector((state) => state.quiz.quizData);

  const totalQuestionValue = useRootSelector(
    (state) => state.settings.totalQuestion
  );

  const handleNavigation = () => {
    navigation.goBack();
    setShuffledQuestions(shuffle(quizData).slice(0, totalQuestionValue));
  };

  return (
    <LinearGradient
      colors={['#a7ddff', '#2d82a8']}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>クイズ結果</Text>
        <Text style={styles.score}>
          あなたのスコアは{totalQuestionValue}問中{score}問です。
        </Text>
        <TouchableOpacity
          style={styles.byFieldButton}
          onPress={handleNavigation}
        >
          <Text style={styles.playButtonText}>
            スタート画面に{BUTTON_TEXT.RETURN}
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: FONTSIZE.SIZE32PX,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  score: {
    fontSize: FONTSIZE.SIZE19PX,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  byFieldButton: {
    backgroundColor: '#2d82a8',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginTop: 10,
  },
  playButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

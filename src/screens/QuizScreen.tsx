import React, { FC, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Props, RouteButton } from '../../types/type';
import { shuffle } from 'lodash';
import { questions } from '../quiz/IntroductionToMedicine';
import { TOTAL_QUESTIONS, examMenuButton } from '../contents';
import { ResultScreen } from './ResultScreen';
import { showCorrectAnswerAlert, showIncorrectAnswerAlert } from '../function';
import { useNavigation } from '@react-navigation/native';

export const QuizScreen: FC<Props> = () => {
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResultScreen, setShowResultScreen] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(60);

  const [shuffledQuestions, setShuffledQuestions] = useState(
    shuffle(questions).slice(0, TOTAL_QUESTIONS)
  );

  const min = Math.floor(timer / 60);
  const rem = timer % 60;

  const navigation = useNavigation();
  const handleNavigation = (navigationName: string) => {
    navigation.navigate(navigationName as never);
  };
  const byFieldMenuButtons = examMenuButton.filter(
    (button: RouteButton) => button.navigationName === 'ByField'
  );

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

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
      });
    } else {
      showIncorrectAnswerAlert({
        shuffledQuestions,
        index,
        setIndex,
        setShowResultScreen,
      });
    }
  };

  return (
        <TimeOverScreen
          score={score}
          setScore={setScore}
          setTimer={setTimer}
          index={index}
          setIndex={setIndex}
          setShuffledQuestions={setShuffledQuestions}
        />
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
  returnContainer: {
    alignItems: 'flex-end',
    marginRight: 20,
  },
  byFieldButton: {
    backgroundColor: '#2d82a8',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
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
  timerText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resumeButton: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
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
  playButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

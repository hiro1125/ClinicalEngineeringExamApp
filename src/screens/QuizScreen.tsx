import React, { FC, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Props } from '../../types/type';
import { shuffle } from 'lodash';
import { showCorrectAnswerAlert, showIncorrectAnswerAlert } from '../function';
import { useTimer } from '../hooks/useTimer';
import { useRootSelector } from '../redux/store/store';
import ResultScreen from './ResultScreen';
import QuizQuestionCard from './QuizQuestionCard';
import TimeOverScreen from './TimeOverScreen';

const QuizScreen: FC<Props> = ({ navigation }) => {
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResultScreen, setShowResultScreen] = useState<boolean>(false);
  const quizData = useRootSelector((state) => state.quiz.quizData);
  const totalQuestionValue = useRootSelector(
    (state) => state.settings.totalQuestion
  );
  const soundEffectValue = useRootSelector(
    (state) => state.settings.soundEffect
  );

  const [shuffledQuestions, setShuffledQuestions] = useState(
    shuffle(quizData).slice(0, totalQuestionValue)
  );

  const { timer, setTimer } = useTimer();

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
        soundEffectValue,
      });
    } else {
      showIncorrectAnswerAlert({
        shuffledQuestions,
        index,
        setIndex,
        setShowResultScreen,
        soundEffectValue,
      });
    }
  };

  return (
    <View style={styles.container}>
      {showResultScreen ? (
        <ResultScreen
          score={score}
          setShuffledQuestions={setShuffledQuestions}
        />
      ) : timer > 0 ? (
        <QuizQuestionCard
          shuffledQuestions={shuffledQuestions}
          index={index}
          timer={timer}
          answerButton={answerButton}
          navigation={navigation}
        />
      ) : (
        <TimeOverScreen
          score={score}
          setScore={setScore}
          setTimer={setTimer}
          index={index}
          setIndex={setIndex}
          setShuffledQuestions={setShuffledQuestions}
        />
      )}
    </View>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

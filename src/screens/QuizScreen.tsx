import React, { FC, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Props } from '../../types/type';
import { shuffle } from 'lodash';
import { questions } from '../quiz/IntroductionToMedicine';
import { TOTAL_QUESTIONS } from '../contents';
import { ResultScreen } from './ResultScreen';
import { showCorrectAnswerAlert, showIncorrectAnswerAlert } from '../function';
import { TimeOverScreen } from './TimeOverScreen';
import QuizQuestionCard from './QuizQuestionCard';
import { useTimer } from '../hooks';

export const QuizScreen: FC<Props> = () => {
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResultScreen, setShowResultScreen] = useState<boolean>(false);

  const [shuffledQuestions, setShuffledQuestions] = useState(
    shuffle(questions).slice(0, TOTAL_QUESTIONS)
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
    <View style={styles.container}>
      {showResultScreen ? (
        <ResultScreen score={score} />
      ) : timer > 0 ? (
        <QuizQuestionCard
          shuffledQuestions={shuffledQuestions}
          index={index}
          timer={timer}
          answerButton={answerButton}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

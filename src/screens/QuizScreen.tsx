import React, { FC, useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Props } from '../../types/type';
import { shuffle } from 'lodash';
import { questions } from '../quiz/IntroductionToMedicine';
import { TOTAL_QUESTIONS } from '../contents';
import { ResultScreen } from './ResultScreen';
import { showCorrectAnswerAlert, showIncorrectAnswerAlert } from '../function';

export const QuizScreen: FC<Props> = () => {
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResultScreen, setShowResultScreen] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(10);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [shuffledQuestions, setShuffledQuestions] = useState(
    shuffle(questions).slice(0, TOTAL_QUESTIONS)
  );


  const navigation = useNavigation();
  const handleNavigation = (navigationName: string) => {
    navigation.navigate(navigationName as never);
  };
  const byFieldMenuButtons = examMenuButton.filter(
    (button: RouteButton) => button.navigationName === 'ByField'
  );

  useEffect(() => {
    if (!isRunning && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, isRunning]);

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
    <LinearGradient
      colors={['#a7ddff', '#2d82a8']}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        {showResultScreen ? (
          <ResultScreen score={score} />
        ) : timer > 0 ? (
          <View>
            <View style={styles.returnContainer}>
              {byFieldMenuButtons.map((button, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.byFieldButton}
                  onPress={() => handleNavigation(button.navigationName)}
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
            <Text style={styles.timerText}>{timer}</Text>
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
        ) : (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>
              正解数: {score}/{TOTAL_QUESTIONS}
            </Text>
            <TouchableOpacity
              onPress={() => {
                setTimer(10);
                setIndex(index);
              }}
              style={styles.resumeButton}
            >
              <Text style={styles.playButtonText}>続きからプレイする</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setIndex(0);
                setScore(0);
                setTimer(10);
                setShuffledQuestions(
                  shuffle(questions).slice(0, TOTAL_QUESTIONS)
                );
              }}
              style={styles.restartButton}
            >
              <Text style={styles.playButtonText}>最初からプレイする</Text>
            </TouchableOpacity>
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
  restartButton: {
    backgroundColor: '#c0392b',
    padding: 15,
    borderRadius: 10,
  },
  playButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

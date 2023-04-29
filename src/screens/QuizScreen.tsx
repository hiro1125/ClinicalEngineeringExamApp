import React, { FC, useState } from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Props } from '../../types/type';
import { shuffle } from 'lodash';
import { questions } from '../quiz/IntroductionToMedicine';
import { TOTAL_QUESTIONS } from '../contents';
import { ResultScreen } from './ResultScreen';

export const QuizScreen: FC<Props> = ({ navigation }) => {
  const [index, setIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResultScreen, setShowResultScreen] = useState<boolean>(false);
  const shuffledQuestions = shuffle(questions).slice(0, TOTAL_QUESTIONS);

  const showCorrectAnswerAlert = () => {
    setScore(score + 1);
    Alert.alert('正解', 'おめでとうございます！', [
      {
        text: 'OK',
        onPress: () => {
          if (index < shuffledQuestions.length - 1) {
            setIndex(index + 1);
          } else {
            setShowResultScreen(true);
          }
        },
      },
    ]);
  };

  const showIncorrectAnswerAlert = () => {
    const currentQuestion = shuffledQuestions[index];
    const correctAnswer = currentQuestion.options[currentQuestion.answerIndex];
    const message = `残念！正解は${correctAnswer}でした。`;
    Alert.alert('不正解', message, [
      {
        text: 'OK',
        onPress: () => {
          if (index < shuffledQuestions.length - 1) {
            setIndex(index + 1);
          } else {
            setShowResultScreen(true);
          }
        },
      },
    ]);
  };

  const answerButton = (optionIndex: number) => {
    const currentQuestion = shuffledQuestions[index];
    if (currentQuestion.answerIndex === optionIndex) {
      showCorrectAnswerAlert();
    } else {
      showIncorrectAnswerAlert();
    }
  };

  const isFinished = index === shuffledQuestions.length;

  if (showResultScreen) {
    return <ResultScreen score={score} />;
  }

  return (
    <LinearGradient
      colors={['#a7ddff', '#2d82a8']}
      style={styles.linearGradient}
    >
      <Button title='戻る' onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        {isFinished ? (
          <Text>回答終了です。</Text>
        ) : (
          <View>
            <Text style={styles.questionNumber}>
              問題{index + 1} / {shuffledQuestions.length}
            </Text>
            <Text style={styles.questionText}>
              {shuffledQuestions[index].question}
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
    marginBottom: 20,
    textAlign: 'center',
  },
  questionText: {
    fontSize: 15,
    marginBottom: 20,
    textAlign: 'center',
  },
  answerButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#000000',
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000000',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
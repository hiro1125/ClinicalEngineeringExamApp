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

export const QuizScreen: FC<Props> = ({ navigation }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const shuffleQuestions = shuffle(questions).slice(0, 10);

  const correctAnswer = () => {
    Alert.alert('正解', 'おめでとうございます！', [
      {
        text: 'OK',
        onPress: () => {
          if (currentQuestionIndex < shuffleQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
          } else {
          }
        },
      },
    ]);
  };

  const incorrectAnswer = () => {
    const currentQuestion = shuffleQuestions[currentQuestionIndex];
    Alert.alert(
      '不正解',
      `残念！正解は${
        currentQuestion.options[currentQuestion.answerIndex]
      }でした。`,
      [
        {
          text: 'OK',
          onPress: () => {
            if (currentQuestionIndex < shuffleQuestions.length - 1) {
              setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
            }
          },
        },
      ]
    );
  };

  const answerButton = (optionIndex: number) => {
    const currentQuestion = shuffleQuestions[currentQuestionIndex];
    if (currentQuestion.answerIndex === optionIndex) {
      correctAnswer();
    } else {
      incorrectAnswer();
    }
  };

  return (
    <LinearGradient
      colors={['#a7ddff', '#2d82a8']}
      style={styles.linearGradient}
    >
      <Button title='戻る' onPress={() => navigation.goBack()} />
      <View style={styles.container}>
        {currentQuestionIndex === shuffleQuestions.length ? (
          <Text>回答終了です。</Text>
        ) : (
          <View>
            <Text style={styles.questionNumber}>
              問題{currentQuestionIndex + 1} / {shuffleQuestions.length}
            </Text>
            <Text style={styles.questionText}>
              {shuffleQuestions[currentQuestionIndex].question}
            </Text>
            {shuffleQuestions[currentQuestionIndex].options.map(
              (item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => answerButton(index)}
                    style={styles.answerButton}
                  >
                    <Text style={styles.buttonText}>{item}</Text>
                  </TouchableOpacity>
                );
              }
            )}
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
    borderRadius: 4,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#000000',
    textAlign: 'center',
  },
});

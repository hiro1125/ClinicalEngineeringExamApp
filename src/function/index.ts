import { QuizAlertProps } from '../../types/type';
import { Alert } from 'react-native';
import { AVPlaybackSource, Audio } from 'expo-av';

const correctSound = require('../../assets/sounds/correct.mp3');
const inCorrectSound = require('../../assets/sounds/incorrect.mp3');

const playSound = async (sound: AVPlaybackSource) => {
  try {
    const soundObject = new Audio.Sound();
    await soundObject.loadAsync(sound);
    await soundObject.playAsync();
  } catch (error) {
    console.log(error);
  }
};

export const showCorrectAnswerAlert = async ({
  score,
  setScore,
  setShowResultScreen,
  shuffledQuestions,
  index,
  setIndex,
}: QuizAlertProps) => {
  await playSound(correctSound);
  Alert.alert('正解', 'おめでとうございます！', [
    {
      text: 'OK',
      onPress: () => {
        if (index < shuffledQuestions.length - 1) {
          setIndex(index + 1);
          setScore(score + 1);
        } else {
          setShowResultScreen(true);
        }
      },
    },
  ]);
};

export const showIncorrectAnswerAlert = async ({
  shuffledQuestions,
  index,
  setIndex,
  setShowResultScreen,
}: QuizAlertProps) => {
  const currentQuestion = shuffledQuestions[index];
  const correctAnswer = currentQuestion.options[currentQuestion.answerIndex];
  const message = `残念！正解は${correctAnswer}でした。`;
  await playSound(inCorrectSound);
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
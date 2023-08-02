import {
  OnSettingPress,
  QuizAlertCorrectProps,
  QuizAlertIncorrectProps,
} from '../../types/type';
import { Alert } from 'react-native';
import { AVPlaybackSource, Audio } from 'expo-av';
import { BUTTON_TEXT, LABEL } from '../contents';
import {
  setSoundEffect,
  setTimeLimit,
  setTotalQuestion,
} from '../redux/slices/settingsSlice';
import {
  questionValueStorage,
  timerValueStorage,
  soundValueStorage,
} from '../storage';

const correctSound = require('../../assets/sounds/correct.mp3');
const inCorrectSound = require('../../assets/sounds/incorrect.mp3');

const playSound = async (sound: AVPlaybackSource) => {
  try {
    const soundObject = new Audio.Sound();
    await soundObject.loadAsync(sound);
    await soundObject.playAsync();
  } catch (error) {
    throw error;
  }
};

export const showCorrectAnswerAlert = async ({
  score,
  setScore,
  setShowResultScreen,
  shuffledQuestions,
  index,
  setIndex,
  soundEffectValue,
}: QuizAlertCorrectProps) => {
  if (soundEffectValue === 1 || soundEffectValue === 3) {
    await playSound(correctSound);
  }
  Alert.alert('正解', 'おめでとうございます！', [
    {
      text: BUTTON_TEXT.DECISION,
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
  soundEffectValue,
}: QuizAlertIncorrectProps) => {
  const currentQuestion = shuffledQuestions[index];
  const correctAnswer = currentQuestion.options[currentQuestion.answerIndex];
  const message = `残念！正解は${correctAnswer}でした。`;
  if (soundEffectValue === 2 || soundEffectValue === 3) {
    await playSound(inCorrectSound);
  }
  Alert.alert('不正解', message, [
    {
      text: BUTTON_TEXT.DECISION,
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

export const onSettingPress = async ({
  dispatch,
  label,
  item,
}: OnSettingPress) => {
  if (label === LABEL.NUMBER_OF_QUESTIONS) {
    await questionValueStorage.save({
      key: 'totalQuestionValue',
      data: {
        id: item.id,
      },
    });
    dispatch(setTotalQuestion(item.id));
  } else if (label === LABEL.QUESTION_TIME_LIMIT) {
    await timerValueStorage.save({
      key: 'timerValue',
      data: {
        id: item.id,
      },
    });
    dispatch(setTimeLimit(item.id));
  } else if (label === LABEL.SOUND_EFFECTS) {
    await soundValueStorage.save({
      key: 'soundValue',
      data: {
        id: item.id,
      },
    });
    dispatch(setSoundEffect(item.id));
  }
};

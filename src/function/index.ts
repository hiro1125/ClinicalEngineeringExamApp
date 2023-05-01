import { QuizAlertProps } from '../../types/type';
import { Alert } from 'react-native';

export const showCorrectAnswerAlert = ({
  score,
  setScore,
  setShowResultScreen,
  shuffledQuestions,
  index,
}: QuizAlertProps) => {
  Alert.alert('正解', 'おめでとうございます！', [
    {
      text: 'OK',
      onPress: () => {
        if (index < shuffledQuestions.length - 1) {
          setScore(score + 1);
        } else {
          setShowResultScreen(true);
        }
      },
    },
  ]);
};

export const showIncorrectAnswerAlert = ({
  shuffledQuestions,
  index,
  setIndex,
  setShowResultScreen,
}: QuizAlertProps) => {
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

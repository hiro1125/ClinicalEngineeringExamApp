import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BUTTON_TEXT } from '../contents';
import { shuffle } from 'lodash';
import { QuizData } from '../../types/type';
import { useNavigation } from '@react-navigation/native';
import { useRootSelector } from '../redux/store/store';
import { COMMON_BUTTON_STYLE, FONTSIZE, SIZE } from '../styles';

type GameRestartScreenProps = {
  score: number;
  setScore: (score: number) => void;
  setTimer: (timer: number) => void;
  index: number;
  setIndex: (index: number) => void;
  setShuffledQuestions: (questions: QuizData[]) => void;
};

const TimeOverScreen: FC<GameRestartScreenProps> = ({
  score,
  setTimer,
  index,
  setIndex,
  setScore,
  setShuffledQuestions,
}) => {
  const quizData = useRootSelector((state) => state.quiz.quizData);

  const totalQuestionValue = useRootSelector(
    (state) => state.settings.totalQuestion
  );

  const timeLimitValue = useRootSelector((state) => state.settings.timeLimit);

  const handleResumeButtonPress = () => {
    setTimer(timeLimitValue);
    setIndex(index);
  };

  const handleRestartButtonPress = () => {
    setIndex(0);
    setScore(0);
    setTimer(timeLimitValue);
    setShuffledQuestions(shuffle(quizData).slice(0, totalQuestionValue));
  };

  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.goBack();
    setShuffledQuestions(shuffle(quizData).slice(0, totalQuestionValue));
  };

  return (
    <View style={styles.resultContainer}>
      <Text style={styles.resultText}>
        正解数: {score}/{totalQuestionValue}
      </Text>
      <TouchableOpacity
        onPress={handleResumeButtonPress}
        style={styles.resumeButton}
      >
        <Text style={styles.playButtonText}>続きからプレイする</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleRestartButtonPress}
        style={styles.restartButton}
      >
        <Text style={styles.playButtonText}>最初からプレイする</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.byFieldButton} onPress={handleNavigation}>
        <Text style={styles.playButtonText}>
          スタート画面に{BUTTON_TEXT.RETURN}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimeOverScreen;

const styles = StyleSheet.create({
  resultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    fontSize: FONTSIZE.SIZE24PX,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resumeButton: {
    ...COMMON_BUTTON_STYLE,
    backgroundColor: '#27ae60',
  },
  restartButton: {
    ...COMMON_BUTTON_STYLE,
    backgroundColor: '##c0392b',
  },
  byFieldButton: {
    ...COMMON_BUTTON_STYLE,
    backgroundColor: '#2d82a8',
  },
  playButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

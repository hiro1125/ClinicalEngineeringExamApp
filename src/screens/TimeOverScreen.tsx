import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { examMenuButton } from '../contents';
import { shuffle } from 'lodash';
import { QuizData, RouteButton } from '../../types/type';
import { useNavigation } from '@react-navigation/native';
import { useRootDispatch, useRootSelector } from '../redux/store/store';
import { setQuizDate } from '../redux/slices/quizSlice';
import { FONTSIZE } from '../styles';

type GameRestartScreenProps = {
  score: number;
  setScore: (score: number) => void;
  setTimer: (timer: number) => void;
  index: number;
  setIndex: (index: number) => void;
  setShuffledQuestions: (questions: QuizData[]) => void;
};

export const TimeOverScreen: FC<GameRestartScreenProps> = ({
  score,
  setTimer,
  index,
  setIndex,
  setScore,
  setShuffledQuestions,
}) => {
  const dispatch = useRootDispatch();
  const quizData = useRootSelector((state) => state.quiz.quizData);
  const totalQuestionValue = useRootSelector(
    (state) => state.settings.totalQuestion
  );

  const handleResumeButtonPress = () => {
    setTimer(10);
    setIndex(index);
  };

  const handleRestartButtonPress = () => {
    setIndex(0);
    setScore(0);
    setTimer(10);
    setShuffledQuestions(shuffle(quizData).slice(0, totalQuestionValue));
  };

  const navigation = useNavigation();
  const handleNavigation = (navigationName: string) => {
    navigation.navigate(navigationName as never);
  };
  const byFieldMenuButtons = examMenuButton.filter(
    (button: RouteButton) => button.navigationName === 'ByField'
  );

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
      {byFieldMenuButtons.map((button, index) => (
        <TouchableOpacity
          key={index}
          style={styles.byFieldButton}
          onPress={() => {
            handleNavigation(button.navigationName);
            dispatch(setQuizDate([]));
          }}
        >
          <Text style={styles.playButtonText}>{button.title}に戻る</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

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
  byFieldButton: {
    backgroundColor: '#2d82a8',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginTop: 10,
  },
  playButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

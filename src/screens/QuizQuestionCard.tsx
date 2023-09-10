import React, { FC } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Props, QuizData } from '../../types/type';
import { BUTTON_TEXT } from '../contents';
import { useTimer } from '../hooks/useTimer';
import { FONTSIZE, SIZE } from '../styles';

type QuizQuestionCardProps = {
  shuffledQuestions: QuizData[];
  index: number;
  timer: number;
  answerButton: (index: number) => void;
};

const QuizQuestionCard: FC<QuizQuestionCardProps & Props> = ({
  shuffledQuestions,
  index,
  answerButton,
  navigation,
}) => {
  const handleNavigation = () => {
    Alert.alert('確認', '本当に戻りますか？', [
      {
        text: 'キャンセル',
      },
      {
        text: BUTTON_TEXT.RETURN,
        onPress: () => {
          navigation.pop(2);
        },
      },
    ]);
  };

  const { timer } = useTimer();

  const min = Math.floor(timer / 60);
  const rem = timer % 60;

  return (
    <SafeAreaView>
      <View style={styles.returnContainer}>
        <TouchableOpacity
          key={index}
          style={styles.byFieldButton}
          onPress={handleNavigation}
        >
          <Text style={styles.playButtonText}>{BUTTON_TEXT.RETURN}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.titleQuestion}>
        <Text style={styles.questionNumber}>
          【問題{index + 1} / {shuffledQuestions.length}】
        </Text>
        <Text style={styles.questionText}>
          {shuffledQuestions[index].question}
        </Text>
      </View>
      <Text style={styles.timeRestart}>
        {min === 0 ? `残り時間：${rem}秒` : `残り時間：${min}分${rem}秒`}
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
    </SafeAreaView>
  );
};

export default QuizQuestionCard;

const styles = StyleSheet.create({
  returnContainer: {
    alignItems: 'flex-start',
    marginTop: SIZE.BASIC_HIGHT * 2,
    marginLeft: SIZE.BASIC_WIDTH * 2,
  },
  byFieldButton: {
    backgroundColor: '#2d82a8',
    paddingVertical: SIZE.BASIC_WIDTH * 2,
    paddingHorizontal: SIZE.BASIC_HIGHT * 1,
    borderRadius: 10,
  },
  playButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  questionNumber: {
    textAlign: 'center',
    position: 'absolute',
    top: SIZE.BASIC_HIGHT * 0.2,
    fontSize: FONTSIZE.SIZE15PX,
    marginTop: SIZE.BASIC_HIGHT * 0.2,
    marginBottom: SIZE.BASIC_HIGHT * 0.2,
  },
  titleQuestion: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    width: SIZE.BASIC_WIDTH * 94,
    height: SIZE.BASIC_HIGHT * 38,
    borderRadius: 15,
    backgroundColor: 'white',
    fontSize: FONTSIZE.SIZE14PX,
    textAlign: 'center',
    textTransform: 'capitalize',
    shadowColor: '#aaa',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginTop: SIZE.BASIC_HIGHT * 0.5,
    marginBottom: SIZE.BASIC_HIGHT * 1,
    marginRight: SIZE.BASIC_WIDTH * 2,
    marginLeft: SIZE.BASIC_WIDTH * 2,
  },
  questionText: {
    fontSize: FONTSIZE.SIZE16PX,
    textAlign: 'center',
    padding: 5,
  },
  timeRestart: {
    shadowRadius: 6,
    backgroundColor: '#2e44bc',
    color: '#ffffff',
    fontSize: FONTSIZE.SIZE20PX,
    textAlign: 'center',
  },
  answerButton: {
    paddingHorizontal: SIZE.BASIC_HIGHT * 1.5,
    paddingVertical: SIZE.BASIC_WIDTH * 2,
    borderRadius: 30,
    backgroundColor: 'white',
    margin: SIZE.BASIC_HIGHT * 1,
    elevation: 5,
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: FONTSIZE.SIZE15PX,
    textAlign: 'center',
    textTransform: 'lowercase',
  },
});

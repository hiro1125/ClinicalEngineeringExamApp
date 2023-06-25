import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import Checkbox from 'expo-checkbox';
import { CHECKBOX_DATA } from '../contents';
import { SIZE } from '../styles';
import { Props } from '../../types/type';
import Icon from 'react-native-vector-icons/FontAwesome';
import { setTotalQuestion } from '../redux/slices/settingsSlice';
import { useRootDispatch, useRootSelector } from '../redux/store/store';
import { questionValueStorage } from '../storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TotalQuestionValueScreen = ({ navigation }: Props) => {
  const dispatch = useRootDispatch();
  const [checkboxes, setCheckboxes] = useState(CHECKBOX_DATA);
  const [checked, setChecked] = useState<number | null>();
  const totalQuestionValue = useRootSelector(
    (state) => state.totalQuestion.totalQuestion
  );

  /** チェックが画面を開いた時にチェックが保持されるロジック */
  useEffect(() => {
    (async () => {
      try {
        const allKey = await AsyncStorage.getAllKeys();
        const isTotalQuestionKey = allKey.find(
          (item) => item === 'totalQuestionValue'
        );
        if (isTotalQuestionKey) {
          const questionValue = await questionValueStorage.load({
            key: 'totalQuestionValue',
          });
          const newData = CHECKBOX_DATA.map((item) => {
            if (questionValue.id === item.id) {
              setChecked(item.id);
              return { id: item.id, value: item.value, isSelected: true };
            } else {
              return item;
            }
          });
          setCheckboxes(newData);
          const checkedValue = CHECKBOX_DATA.find(
            (item) => item.id === questionValue.id
          )?.value;
          dispatch(setTotalQuestion(checkedValue));
        } else {
          const newData = CHECKBOX_DATA.map((item) => {
            if (item.value === totalQuestionValue) {
              setChecked(item.id);
              return { id: item.id, value: item.value, isSelected: true };
            } else {
              return item;
            }
          });
          setCheckboxes(newData);
        }
      } catch (error) {
        throw error;
      }
    })();
  }, []);

  const onPress = async (value: number, id: number) => {
    dispatch(setTotalQuestion(value));
    setChecked(id);
    // ストレージに保存
    await questionValueStorage.save({
      key: 'totalQuestionValue',
      data: {
        id: id,
      },
    });
  };

  const handleGoBack = () => {
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text h1 style={styles.titleText}>
          設定画面
        </Text>
      </View>
      <View style={styles.subTitle}>
        <Text h4 style={styles.subTitleText}>
          問題数の設定
        </Text>
      </View>
      <View style={styles.checkboxContainer}>
        {checkboxes.map((option, index) => (
          <TouchableOpacity
            style={styles.section}
            key={index}
            onPress={() => onPress(option.value, option.id)}
          >
            <Checkbox
              style={styles.checkbox}
              value={option.id === checked}
              onValueChange={() => onPress(option.value, option.id)}
            />
            <Text style={styles.optionText}>{option.value}問</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.timesCircle} onPress={handleGoBack}>
        <Icon name='times-circle' size={40} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: SIZE.BASIC_HIGHT * 5,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle: {
    marginTop: SIZE.BASIC_HIGHT * 3,
    marginBottom: SIZE.BASIC_HIGHT * 4,
  },
  subTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    width: SIZE.BASIC_WIDTH * 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SIZE.BASIC_HIGHT * 3,
  },
  checkbox: {
    marginRight: SIZE.BASIC_WIDTH * 4,
  },
  optionText: {
    fontSize: 16,
  },
  timesCircle: {
    bottom: 0,
    alignSelf: 'center',
  },
});

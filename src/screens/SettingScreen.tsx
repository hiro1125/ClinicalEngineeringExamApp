import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import Checkbox from 'expo-checkbox';
import { checkboxData } from '../contents';
import { SIZE } from '../styles';
import { Props } from '../../types/type';
import Icon from 'react-native-vector-icons/FontAwesome';
import { setTotalQuestion } from '../redux/slices/totalQuestionSlice';
import { useRootDispatch } from '../redux/store/store';

export const SettingScreen = ({ navigation }: Props) => {
  const dispatch = useRootDispatch();
  const [checkboxes, setCheckboxes] = useState(checkboxData);

  const handleCheckboxChange = (id: number) => {
    setCheckboxes((prevData) => {
      const updatedCheckboxes = prevData.map((item) => {
        if (item.id === id) {
          dispatch(setTotalQuestion(item.value));
          return { ...item, isSelected: !item.isSelected };
        }
        return { ...item, isSelected: false };
      });

      return updatedCheckboxes;
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
          <View style={styles.section} key={index}>
            <Checkbox
              style={styles.checkbox}
              value={option.isSelected}
              onValueChange={() => handleCheckboxChange(option.id)}
            />
            <Text style={styles.optionText}>{option.value}問</Text>
          </View>
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

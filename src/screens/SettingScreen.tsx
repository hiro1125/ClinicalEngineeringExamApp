import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-elements';
import Checkbox from 'expo-checkbox';
import { checkboxData } from '../contents';
import { SIZE } from '../styles';

export const SettingScreen = () => {
  const [checkboxes, setCheckboxes] = useState(checkboxData);

  const handleCheckboxChange = (id: number) => {
    setCheckboxes((prevData) => {
      const updatedCheckboxes = prevData.map((item) => {
        if (item.id === id) {
          return { ...item, isSelected: !item.isSelected };
        }
        return { ...item, isSelected: false };
      });

      return updatedCheckboxes;
    });
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
    marginTop: SIZE.BASIC_HIGHT * 2,
    marginBottom: SIZE.BASIC_HIGHT * 1,
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
    marginBottom: SIZE.BASIC_HIGHT,
  },
  checkbox: {
    marginRight: SIZE.BASIC_WIDTH,
  },
  optionText: {
    fontSize: 16,
  },
});

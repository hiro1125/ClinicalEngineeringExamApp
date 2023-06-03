import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TOTAL_QUESTIONS, examMenuButton } from '../contents';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { RouteButton } from '../../types/type';
import { FONTSIZE, SIZE } from '../styles';

type Props = {
  score: number;
};

export const ResultScreen: FC<Props> = ({ score }) => {
  const navigation = useNavigation();

  const handleNavigation = (navigationName: string) => {
    navigation.navigate(navigationName as never);
  };

  const byFieldMenuButtons = examMenuButton.filter(
    (button: RouteButton) => button.navigationName === 'ByField'
  );

  return (
    <LinearGradient
      colors={['#a7ddff', '#2d82a8']}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>クイズ結果</Text>
        <Text style={styles.score}>
          あなたのスコアは{TOTAL_QUESTIONS}問中{score}問です。
        </Text>
        {byFieldMenuButtons.map((button, index) => (
          <Button
            key={index}
            title={button.title}
            onPress={() => handleNavigation(button.navigationName)}
          />
        ))}
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
    padding: 20,
  },
  title: {
    fontSize: FONTSIZE.SIZE32PX,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  score: {
    fontSize: FONTSIZE.SIZE19PX,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  button: {
    backgroundColor: '#2d82a8',
    borderRadius: 8,
    paddingHorizontal: 32,
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TOTAL_QUESTIONS } from '../contents';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';

type Props = {
  score: number;
};

export const ResultScreen: FC<Props> = ({ score }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>クイズ結果</Text>
      <Text style={styles.score}>
        あなたのスコアは {score}/{TOTAL_QUESTIONS} です。
      </Text>
      <Button title='再挑戦' onPress={handleGoBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  score: {
    fontSize: 18,
    marginBottom: 10,
  },
});

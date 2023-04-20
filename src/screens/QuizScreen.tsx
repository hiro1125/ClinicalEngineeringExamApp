import React from 'react';
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const QuizScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <View>
      <Button title='戻る' onPress={handlePress} />
      <Text></Text>
      <View>
        <Text>問題文</Text>
        <Text>選択肢1</Text>
        <Text>選択肢2</Text>
        <Text>選択肢3</Text>
        <Text>選択肢4</Text>
      </View>
    </View>
  );
};

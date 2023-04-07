import { View, StyleSheet, Platform } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList, ScreenProps } from '../../types/type';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const AppScreen = ({title,buttons}:ScreenProps & Props) => {
  return (
    <LinearGradient colors={['#a7ddff', '#2d82a8']} style={styles.linearGradient}>
      <View style={styles.container}>
        <Text h3 style={styles.text}>{title}</Text>
        {buttons.map((button,key) => (
            <Button
            key={key}
            title={button.title}
            onPress={button.onPress}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
          />
        ))}
      </View>
    </LinearGradient>
  );
};

/** Home画面 */
export const HomeScreen = ({navigation}:Props) => {
  const buttons = [
    {
      title: 'スタート',
      onPress: () => navigation.navigate('ExamMenu')
    }
  ];
  return (
    <AppScreen title="臨床工学技士国家試験対策" buttons={buttons} navigation={navigation} />
  );
};

/** ExamMenu画面 */
export const ExamMenuScreen = ({navigation}:Props) => {
  const buttons = [
    {
      title: '分野別',
      onPress: () => navigation.navigate('Exam1')
    },
    {
      title: '90問試験',
      onPress: () => navigation.navigate('Exam2')
    },
    {
      title: '戻る',
      onPress: () => navigation.goBack()
    },
  ];
  return (
    <AppScreen title="試験選択画面" buttons={buttons} navigation={navigation} />
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
  },
  text: {
    marginBottom: 100,
    fontWeight: 'bold',
  },
  button: {
    width: Platform.OS === 'ios' ? '100%' : '80%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  buttonTitle: {
    width: Platform.OS === 'ios' ? '50%' : '100%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

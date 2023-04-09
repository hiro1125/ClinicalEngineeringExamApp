import { View, StyleSheet, Platform } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';
import {
  byFieldButton,
  examMenuButton,
  ninetyQuestionTestButton,
  startButton,
} from '../contents';
import { RootStackParamList, ScreenProps } from '../../types/type';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

const AppScreen = ({ title, buttons, navigation }: ScreenProps & Props) => {
  return (
    <LinearGradient
      colors={['#a7ddff', '#2d82a8']}
      style={styles.linearGradient}
    >
      <View style={styles.container}>
        <Text h3 style={styles.text}>
          {title}
        </Text>
        {buttons.map((button, key) => (
          <Button
            key={key}
            title={button.title}
            onPress={() => navigation.navigate(button.navigationName)}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
          />
        ))}
      </View>
    </LinearGradient>
  );
};

/** Home画面 */
export const HomeScreen = ({ navigation }: Props) => {
  return (
    <AppScreen
      title='臨床工学技士国家試験対策'
      buttons={startButton}
      navigation={navigation}
    />
  );
};

/** ExamMenu画面 */
export const ExamMenuScreen = ({ navigation }: Props) => {
  return (
    <AppScreen
      title='試験選択'
      buttons={examMenuButton}
      navigation={navigation}
    />
  );
};

/** ByField画面 */
export const ByFieldScreen = ({ navigation }: Props) => {
  return (
    <AppScreen title='分野別' buttons={byFieldButton} navigation={navigation} />
  );
};

/** NinetyQuestionTest画面 */
export const NinetyQuestionTestScreen = ({ navigation }: Props) => {
  return (
    <AppScreen
      title='90問試験'
      buttons={ninetyQuestionTestButton}
      navigation={navigation}
    />
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
    marginTop: 35,
    marginBottom: 40,
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
    width: Platform.OS === 'ios' ? '60%' : '100%',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
});

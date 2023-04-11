import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Props, RootStackParamList } from '../../types/type';
import {
  byFieldButton,
  examMenuButton,
  ninetyQuestionTestButton,
  startButton,
} from '../contents';
import AppScreen from '../screens/AppScreen';
import { StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ExamMenu'
        component={ExamMenuScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='ByField'
        component={ByFieldScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='NinetyQuestionTest'
        component={NinetyQuestionTestScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

/** Home画面 */
export const HomeScreen = ({ navigation }: Props) => {
  return (
    <AppScreen
      title='臨床工学技士国家試験対策'
      buttons={startButton}
      navigation={navigation}
      style={styles.homeScreen}
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
      style={styles.examination}
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
      style={styles.examination}
    />
  );
};

const styles = StyleSheet.create({
  homeScreen: {
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 500,
    marginTop: 0,
    marginBottom: 0,
    paddingTop: 50,
  },
  examination: {
    lineHeight: 300,
  },
});

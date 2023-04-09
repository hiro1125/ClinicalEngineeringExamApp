import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Props, RootStackParamList } from '../../types/type';
import {
  byFieldButton,
  examMenuButton,
  ninetyQuestionTestButton,
  startButton,
} from '../contents';
import AppScreen from '../screens/AppScreen';

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

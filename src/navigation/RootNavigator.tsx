import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/type';
import {
  ByFieldScreen,
  ExamMenuScreen,
  HomeScreen,
  NinetyQuestionTestScreen,
} from '../screens/AppScreen';

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

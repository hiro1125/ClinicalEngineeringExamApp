import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/type';
import { ExamMenuScreen, HomeScreen } from '../screens/AppScreen';


const Stack = createNativeStackNavigator<RootStackParamList>();


export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ExamMenu" component={ExamMenuScreen}  options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};


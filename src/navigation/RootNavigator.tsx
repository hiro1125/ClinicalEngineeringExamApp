import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Props, RootStackParamList } from '../../types/type';
import {
  CHECKBOX_DATA,
  byFieldButton,
  examMenuButton,
  questionTestButton,
  startButton,
} from '../contents';
import AppScreen from '../screens/AppScreen';
import { StyleSheet } from 'react-native';
import { QuizScreen } from '../screens/QuizScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { color } from '../styles';
import { TotalQuestionValueScreen } from '../screens/TotalQuestionValueScreen';
import { useEffect } from 'react';
import { questionValueStorage } from '../storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRootDispatch } from '../redux/store/store';
import { setTotalQuestion } from '../redux/slices/settingsSlice';
import SettingScreen from '../screens/SettingScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
      }}
    >
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
        options={{ headerShown: false, presentation: 'fullScreenModal' }}
      />
      <Stack.Screen
        name='IntroductionToMedicine'
        component={IntroductionToMedicineScreen}
        options={{ headerShown: false, presentation: 'fullScreenModal' }}
      />
      <Stack.Screen
        name='ClinicalMedicineOverview'
        component={ClinicalMedicineOverviewScreen}
        options={{ headerShown: false, presentation: 'fullScreenModal' }}
      />
      <Stack.Screen
        name='BiomedicalMeasurementInstrumentation'
        component={BiomedicalMeasurementInstrumentationScreen}
        options={{ headerShown: false, presentation: 'fullScreenModal' }}
      />
      <Stack.Screen
        name='MedicalTherapeuticEquipment'
        component={MedicalTherapeuticEquipmentScreen}
        options={{ headerShown: false, presentation: 'fullScreenModal' }}
      />
      <Stack.Screen
        name='MedDevSafety'
        component={MedDevSafetyScreen}
        options={{ headerShown: false, presentation: 'fullScreenModal' }}
      />
      <Stack.Screen
        name='MedicalElectricalAndElectronicEngineering'
        component={MedicalElectricalAndElectronicEngineeringScreen}
        options={{ headerShown: false, presentation: 'fullScreenModal' }}
      />
      <Stack.Screen
        name='BiologicalFunctionSubstitutionEquipment'
        component={BiologicalFunctionSubstitutionEquipmentScreen}
        options={{ headerShown: false, presentation: 'fullScreenModal' }}
      />
      <Stack.Screen
        name='MedicalMechanicalEngineering'
        component={MedicalMechanicalEngineeringScreen}
        options={{ headerShown: false, presentation: 'fullScreenModal' }}
      />
      <Stack.Screen
        name='BiologicalMaterialScienceAndEngineering'
        component={BiologicalMaterialScienceAndEngineeringScreen}
        options={{ headerShown: false, presentation: 'fullScreenModal' }}
      />
      <Stack.Screen
        name='QuestionTest'
        component={QuestionTestScreen}
        options={{ headerShown: false, presentation: 'fullScreenModal' }}
      />
      <Stack.Screen
        name='settingScreen'
        component={SettingScreen}
        options={{ headerShown: false, presentation: 'fullScreenModal' }}
      />
    </Stack.Navigator>
  );
};

/** Home画面 */
export const HomeScreen = ({ navigation }: Props) => {
  const dispatch = useRootDispatch();
  useEffect(() => {
    (async () => {
      try {
        const allKey = await AsyncStorage.getAllKeys();
        const isTotalQuestionKey = allKey.find(
          (item) => item === 'totalQuestionValue'
        );
        if (isTotalQuestionKey) {
          const questionValue = await questionValueStorage.load({
            key: 'totalQuestionValue',
          });
          const newData = CHECKBOX_DATA.map((item) => {
            if (questionValue.id === item.id) {
              return { id: item.id, value: item.value, isSelected: true };
            } else {
              return item;
            }
          });
          const checkedValue = CHECKBOX_DATA.find(
            (item) => item.id === questionValue.id
          )?.value;
          dispatch(setTotalQuestion(checkedValue));
        }
      } catch (error) {
        throw error;
      }
    })();
  }, []);
  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <AppScreen
        title='臨床工学技士国家試験対策'
        buttonData={startButton}
        navigation={navigation}
        textStyle={styles.homeScreenText}
      />
    </LinearGradient>
  );
};

/** ExamMenu画面 */
export const ExamMenuScreen = ({ navigation }: Props) => {
  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <AppScreen
        title='試験選択'
        buttonData={examMenuButton}
        navigation={navigation}
        textStyle={styles.examination}
      />
    </LinearGradient>
  );
};

/** ByField画面 */
export const ByFieldScreen = ({ navigation }: Props) => {
  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <AppScreen
        title='分野別'
        buttonData={byFieldButton}
        navigation={navigation}
      />
    </LinearGradient>
  );
};

/** NinetyQuestionTest画面 */
export const NinetyQuestionTestScreen = ({ navigation }: Props) => {
  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <AppScreen
        title='90問試験'
        buttonData={questionTestButton}
        navigation={navigation}
        textStyle={styles.examination}
      />
    </LinearGradient>
  );
};

/** IntroductionToMedicine画面 */
export const IntroductionToMedicineScreen = ({ navigation }: Props) => {
  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <AppScreen
        title='医学概論'
        buttonData={questionTestButton}
        navigation={navigation}
        textStyle={styles.examination}
      />
    </LinearGradient>
  );
};

/** ClinicalMedicineOverview画面 */
export const ClinicalMedicineOverviewScreen = ({ navigation }: Props) => {
  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <AppScreen
        title='臨床医学総論'
        buttonData={questionTestButton}
        navigation={navigation}
        textStyle={styles.examination}
      />
    </LinearGradient>
  );
};

/** BiomedicalMeasurementInstrumentation画面 */
export const BiomedicalMeasurementInstrumentationScreen = ({
  navigation,
}: Props) => {
  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <AppScreen
        title='生体計測装置学'
        buttonData={questionTestButton}
        navigation={navigation}
        textStyle={styles.examination}
      />
    </LinearGradient>
  );
};

/** MedicalTherapeuticEquipment画面 */
export const MedicalTherapeuticEquipmentScreen = ({ navigation }: Props) => {
  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <AppScreen
        title='医用治療機器学'
        buttonData={questionTestButton}
        navigation={navigation}
        textStyle={styles.examination}
      />
    </LinearGradient>
  );
};

/** MedDevSafety画面 */
export const MedDevSafetyScreen = ({ navigation }: Props) => {
  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <AppScreen
        title='医用機器安全管理学'
        buttonData={questionTestButton}
        navigation={navigation}
        textStyle={styles.examination}
      />
    </LinearGradient>
  );
};

/** MedicalElectricalAndElectronicEngineering画面 */
export const MedicalElectricalAndElectronicEngineeringScreen = ({
  navigation,
}: Props) => {
  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <AppScreen
        title='医用電気電子工学'
        buttonData={questionTestButton}
        navigation={navigation}
        textStyle={styles.examination}
      />
    </LinearGradient>
  );
};

/** BiologicalFunctionSubstitutionEquipment画面 */
export const BiologicalFunctionSubstitutionEquipmentScreen = ({
  navigation,
}: Props) => {
  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <AppScreen
        title='生体機能代行装置学'
        buttonData={questionTestButton}
        navigation={navigation}
        textStyle={styles.examination}
      />
    </LinearGradient>
  );
};

/** MedicalMechanicalEngineering画面 */
export const MedicalMechanicalEngineeringScreen = ({ navigation }: Props) => {
  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <AppScreen
        title='医用機械工学'
        buttonData={questionTestButton}
        navigation={navigation}
        textStyle={styles.examination}
      />
    </LinearGradient>
  );
};

/** BiologicalMaterialScienceAndEngineering画面 */
export const BiologicalMaterialScienceAndEngineeringScreen = ({
  navigation,
}: Props) => {
  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <AppScreen
        title='生体物性材料工学'
        buttonData={questionTestButton}
        navigation={navigation}
        textStyle={styles.examination}
      />
    </LinearGradient>
  );
};

/** クイズ画面 */
export const QuestionTestScreen = ({ navigation }: Props) => {
  return (
    <LinearGradient colors={color} style={styles.linearGradient}>
      <QuizScreen navigation={navigation} />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  homeScreenText: {
    lineHeight: 500,
    marginBottom: 0,
  },
  examination: {
    lineHeight: 300,
  },
});

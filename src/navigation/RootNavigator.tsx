import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Props, RootStackParamList } from '../../types/type';
import {
  BUTTON_TITLE,
  byFieldButton,
  examMenuButton,
  questionTestButton,
  startButton,
} from '../contents';
import AppScreen from '../screens/AppScreen';
import { StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { color } from '../styles';
import { useEffect } from 'react';
import {
  questionValueStorage,
  soundValueStorage,
  timerValueStorage,
} from '../storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRootDispatch } from '../redux/store/store';
import {
  setSoundEffect,
  setTimeLimit,
  setTotalQuestion,
} from '../redux/slices/settingsSlice';
import SettingScreen from '../screens/SettingScreen';
import SettingDetailScreen from '../screens/SettingDetailScreen';
import QuizScreen from '../screens/QuizScreen';

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
        name='SettingScreen'
        component={SettingScreen}
        options={{ headerShown: false, presentation: 'fullScreenModal' }}
      />
      <Stack.Screen
        name='SettingDetailScreen'
        component={SettingDetailScreen}
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
        const totalQuestionStorageKey = allKey.find(
          (item) => item === 'totalQuestionValue'
        );
        const timerStorageKey = allKey.find((item) => item === 'timerValue');
        const soundStorageKey = allKey.find((item) => item === 'soundValue');
        if (totalQuestionStorageKey) {
          const questionValue = await questionValueStorage.load({
            key: 'totalQuestionValue',
          });
          dispatch(setTotalQuestion(questionValue.id));
        }
        if (timerStorageKey) {
          const timerValue = await timerValueStorage.load({
            key: 'timerValue',
          });
          dispatch(setTimeLimit(timerValue.id));
        }
        if (soundStorageKey) {
          const soundValue = await soundValueStorage.load({
            key: 'soundValue',
          });
          dispatch(setSoundEffect(soundValue.id));
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
        title={BUTTON_TITLE.BY_FIELD}
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
        title={BUTTON_TITLE.RANDOM_TEST}
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
        title={BUTTON_TITLE.INTRODUCTION_TO_MEDICINE}
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
        title={BUTTON_TITLE.CLINICAL_MEDICINE_OVERVIEW}
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
        title={BUTTON_TITLE.BIOMEDICAL_MEASUREMENT_INSTRUMENTATION}
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
        title={BUTTON_TITLE.MEDICAL_THERAPEUTIC_EQUIPMENT}
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
        title={BUTTON_TITLE.MED_DEV_SAFETY}
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
        title={BUTTON_TITLE.MEDICAL_ELECTRICAL_AND_ELECTRONIC_ENGINEERING}
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
        title={BUTTON_TITLE.BIOLOGICAL_FUNCTION_SUBSTITUTION_EQUIPMENT}
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
        title={BUTTON_TITLE.MEDICAL_MECHANICAL_ENGINEERING}
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
        title={BUTTON_TITLE.BIOLOGICAL_MATERIAL_SCIENCE_AND_ENGINEERING}
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

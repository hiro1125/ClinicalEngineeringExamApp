import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { Props, RootStackParamList } from '../../types/type';
import {
  BUTTON_TITLE,
  byFieldButton,
  examMenuButton,
  questionTestButton,
  startButton,
} from '../contents';
import AppScreen from '../screens/AppScreen';
import { Platform, StyleSheet } from 'react-native';

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

const options: NativeStackNavigationOptions =
  Platform.OS === 'ios'
    ? {
        headerShown: false,
        presentation: 'fullScreenModal',
      }
    : {
        headerShown: false,
        animation: 'slide_from_right',
      };

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
        name='RandomTest'
        component={RandomTestScreen}
        options={options}
      />
      <Stack.Screen
        name='IntroductionToMedicine'
        component={IntroductionToMedicineScreen}
        options={options}
      />
      <Stack.Screen
        name='ClinicalMedicineOverview'
        component={ClinicalMedicineOverviewScreen}
        options={options}
      />
      <Stack.Screen
        name='BiomedicalMeasurementInstrumentation'
        component={BiomedicalMeasurementInstrumentationScreen}
        options={options}
      />
      <Stack.Screen
        name='MedicalTherapeuticEquipment'
        component={MedicalTherapeuticEquipmentScreen}
        options={options}
      />
      <Stack.Screen
        name='MedDevSafety'
        component={MedDevSafetyScreen}
        options={options}
      />
      <Stack.Screen
        name='MedicalElectricalAndElectronicEngineering'
        component={MedicalElectricalAndElectronicEngineeringScreen}
        options={options}
      />
      <Stack.Screen
        name='BiologicalFunctionSubstitutionEquipment'
        component={BiologicalFunctionSubstitutionEquipmentScreen}
        options={options}
      />
      <Stack.Screen
        name='MedicalMechanicalEngineering'
        component={MedicalMechanicalEngineeringScreen}
        options={options}
      />
      <Stack.Screen
        name='BiologicalMaterialScienceAndEngineering'
        component={BiologicalMaterialScienceAndEngineeringScreen}
        options={options}
      />
      <Stack.Screen
        name='QuestionTest'
        component={QuestionTestScreen}
        options={options}
      />
      <Stack.Screen
        name='SettingScreen'
        component={SettingScreen}
        options={options}
      />
      <Stack.Screen
        name='SettingDetailScreen'
        component={SettingDetailScreen}
        options={options}
      />
    </Stack.Navigator>
  );
};

/** TOP画面 */
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

/** 試験選択画面 */
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

/** 分野別選択画面 */
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

/** ランダムテストのスタート画面 */
export const RandomTestScreen = ({ navigation }: Props) => {
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

/** 医学概論のスタート画面 */
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

/** 臨床医学総論のスタート画面 */
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

/** 生体計測装置学のスタート画面 */
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

/** 医用治療機器学のスタート画面 */
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

/** 医用機器安全管理学のスタート画面 */
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

/** 医用電気電子工学のスタート画面 */
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

/** 生体機能代行装置学のスタート画面 */
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

/** 医用機械工学のスタート画面 */
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

/** 生体物性材料工学のスタート画面 */
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

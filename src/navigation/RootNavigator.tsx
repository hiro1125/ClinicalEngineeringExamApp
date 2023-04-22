import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Props, RootStackParamList } from '../../types/type';
import {
  byFieldButton,
  examMenuButton,
  introductionToMedicineTestButton,
  questionTestButton,
  startButton,
} from '../contents';
import AppScreen from '../screens/AppScreen';
import { StyleSheet } from 'react-native';
import { QuizScreen } from '../screens/QuizScreen';

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
        name='IntroductionToMedicineTest'
        component={QuestionTestScreen}
        options={{ headerShown: false, presentation: 'fullScreenModal' }}
      />
    </Stack.Navigator>
  );
};

/** Home画面 */
export const HomeScreen = ({ navigation }: Props) => {
  return (
    <AppScreen
      title='臨床工学技士国家試験対策'
      buttonData={startButton}
      navigation={navigation}
      textStyle={styles.homeScreenText}
    />
  );
};

/** ExamMenu画面 */
export const ExamMenuScreen = ({ navigation }: Props) => {
  return (
    <AppScreen
      title='試験選択'
      buttonData={examMenuButton}
      navigation={navigation}
      textStyle={styles.examination}
    />
  );
};

/** ByField画面 */
export const ByFieldScreen = ({ navigation }: Props) => {
  return (
    <AppScreen
      title='分野別'
      buttonData={byFieldButton}
      navigation={navigation}
    />
  );
};

/** NinetyQuestionTest画面 */
export const NinetyQuestionTestScreen = ({ navigation }: Props) => {
  return (
    <AppScreen
      title='90問試験'
      buttonData={questionTestButton}
      navigation={navigation}
      textStyle={styles.examination}
    />
  );
};

/** IntroductionToMedicine画面 */
export const IntroductionToMedicineScreen = ({ navigation }: Props) => {
  return (
    <AppScreen
      title='医学概論'
      buttonData={introductionToMedicineTestButton}
      navigation={navigation}
      textStyle={styles.examination}
    />
  );
};

/** ClinicalMedicineOverview画面 */
export const ClinicalMedicineOverviewScreen = ({ navigation }: Props) => {
  return (
    <AppScreen
      title='臨床医学総論'
      buttonData={questionTestButton}
      navigation={navigation}
      textStyle={styles.examination}
    />
  );
};

/** BiomedicalMeasurementInstrumentation画面 */
export const BiomedicalMeasurementInstrumentationScreen = ({
  navigation,
}: Props) => {
  return (
    <AppScreen
      title='生体計測装置学'
      buttonData={questionTestButton}
      navigation={navigation}
      textStyle={styles.examination}
    />
  );
};

/** MedicalTherapeuticEquipment画面 */
export const MedicalTherapeuticEquipmentScreen = ({ navigation }: Props) => {
  return (
    <AppScreen
      title='医用治療機器学'
      buttonData={questionTestButton}
      navigation={navigation}
      textStyle={styles.examination}
    />
  );
};

/** MedDevSafety画面 */
export const MedDevSafetyScreen = ({ navigation }: Props) => {
  return (
    <AppScreen
      title='医用機器安全管理学'
      buttonData={questionTestButton}
      navigation={navigation}
      textStyle={styles.examination}
    />
  );
};

/** MedicalElectricalAndElectronicEngineering画面 */
export const MedicalElectricalAndElectronicEngineeringScreen = ({
  navigation,
}: Props) => {
  return (
    <AppScreen
      title='医用電気電子工学'
      buttonData={questionTestButton}
      navigation={navigation}
      textStyle={styles.examination}
    />
  );
};

/** BiologicalFunctionSubstitutionEquipment画面 */
export const BiologicalFunctionSubstitutionEquipmentScreen = ({
  navigation,
}: Props) => {
  return (
    <AppScreen
      title='生体機能代行装置学'
      buttonData={questionTestButton}
      navigation={navigation}
      textStyle={styles.examination}
    />
  );
};

/** MedicalMechanicalEngineering画面 */
export const MedicalMechanicalEngineeringScreen = ({ navigation }: Props) => {
  return (
    <AppScreen
      title='医用機械工学'
      buttonData={questionTestButton}
      navigation={navigation}
      textStyle={styles.examination}
    />
  );
};

/** BiologicalMaterialScienceAndEngineering画面 */
export const BiologicalMaterialScienceAndEngineeringScreen = ({
  navigation,
}: Props) => {
  return (
    <AppScreen
      title='生体物性材料工学'
      buttonData={questionTestButton}
      navigation={navigation}
      textStyle={styles.examination}
    />
  );
};

/** クイズ画面 */
export const QuestionTestScreen = ({ navigation }: Props) => {
  return <QuizScreen navigation={navigation} />;
};

const styles = StyleSheet.create({
  homeScreenText: {
    lineHeight: 500,
    marginBottom: 0,
  },
  examination: {
    lineHeight: 300,
  },
});

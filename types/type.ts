import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TextStyle, ViewStyle } from 'react-native';

/** アプリケーションのルーティング */
export type RootStackParamList = {
  Home: undefined;
  ExamMenu: undefined;
  ByField: undefined;
  QuestionTest: undefined;
  IntroductionToMedicine: undefined;
  ClinicalMedicineOverview: undefined;
  BiomedicalMeasurementInstrumentation: undefined;
  MedicalTherapeuticEquipment: undefined;
  MedDevSafety: undefined;
  MedicalElectricalAndElectronicEngineering: undefined;
  BiologicalFunctionSubstitutionEquipment: undefined;
  MedicalMechanicalEngineering: undefined;
  BiologicalMaterialScienceAndEngineering: undefined;
  NinetyQuestionTest: undefined;
  IntroductionToMedicineTest: undefined;
};

export type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export type RouteButton = {
  title: string;
  navigationName:
    | 'Home'
    | 'ExamMenu'
    | 'ByField'
    | 'NinetyQuestionTest'
    | 'QuestionTest'
    | 'IntroductionToMedicine'
    | 'ClinicalMedicineOverview'
    | 'BiomedicalMeasurementInstrumentation'
    | 'MedicalTherapeuticEquipment'
    | 'MedDevSafety'
    | 'MedicalElectricalAndElectronicEngineering'
    | 'BiologicalFunctionSubstitutionEquipment'
    | 'MedicalMechanicalEngineering'
    | 'BiologicalMaterialScienceAndEngineering'
    | 'IntroductionToMedicineTest';
};

export type ScreenProps = {
  title: string;
  buttonData: RouteButton[];
  textStyle?: ViewStyle | TextStyle;
};

export type QuizData = {
  question: string;
  options: string[];
  answerIndex: number;
  tags: string[];
};

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
  Result: undefined;
  SettingScreen: undefined;
  SettingDetailScreen: { data: any };
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
    | 'IntroductionToMedicineTest'
    | 'Result';
  quizData?: QuizData[];
  isStartQuizScreen?: boolean;
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

export type QuizAlertCorrectProps = {
  score: number;
  setScore: (score: number) => void;
  setShowResultScreen: (show: boolean) => void;
  shuffledQuestions: QuizData[];
  index: number;
  setIndex: (index: number) => void;
};

export type QuizAlertIncorrectProps = {
  setShowResultScreen: (show: boolean) => void;
  shuffledQuestions: QuizData[];
  index: number;
  setIndex: (index: number) => void;
};

export type SettingItemProps = {
  id: number;
  text: string;
};

export type SettingItem = {
  label: string;
  data: SettingItemProps[];
};

export type SettingData = {
  item: SettingItem[];
};

export type OnSettingPress = {
  dispatch: Dispatch;
  label: string;
  item: ListData;
};

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
  NinetyQuestionTest?: undefined;
};

export type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export type Button = {
  title: string;
  navigationName:
    | 'Home'
    | 'ExamMenu'
    | 'ByField'
    | 'QuestionTest'
    | 'IntroductionToMedicine'
    | 'ClinicalMedicineOverview'
    | 'BiomedicalMeasurementInstrumentation'
    | 'MedicalTherapeuticEquipment'
    | 'MedDevSafety'
    | 'MedicalElectricalAndElectronicEngineering'
    | 'BiologicalFunctionSubstitutionEquipment'
    | 'MedicalMechanicalEngineering'
    | 'BiologicalMaterialScienceAndEngineering';
}[];

export type ScreenProps = {
  title: string;
  buttons: Button;
  textStyle?: ViewStyle | TextStyle;
};

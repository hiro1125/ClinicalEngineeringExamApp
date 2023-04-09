/** アプリケーションのルーティング */
export type RootStackParamList = {
  Home: undefined;
  ExamMenu: undefined;
  ByField: undefined;
  NinetyQuestionTest: undefined;
  IntroductionToMedicine: undefined;
  ClinicalMedicineOverview: undefined;
  BiomedicalMeasurementInstrumentation: undefined;
  MedicalTherapeuticEquipment: undefined;
  MedDevSafety: undefined;
  MedicalElectricalAndElectronicEngineering: undefined;
  BiologicalFunctionSubstitutionEquipment: undefined;
  MedicalMechanicalEngineering: undefined;
  BiologicalMaterialScienceAndEngineering: undefined;
};

type Button = {
  title: string;
  navigationName: string;
};

export type ScreenProps = {
  title: string;
  buttons: Button[];
};

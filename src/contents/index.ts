import { RouteButton, SettingData } from '../../types/type';
import { biomedicalMeasurementInstrumentationData } from '../quiz/biomedicalMeasurementInstrumentation';
import { clinicalMedicineOverviewData } from '../quiz/clinicalMedicineOverview';
import { introductionToMedicineData } from '../quiz/introductionToMedicine';
import { medicalTherapeuticEquipment } from '../quiz/medicalTherapeuticEquipment';

export const RETURN_BUTTON_TEXT = '戻る';
export const START_BUTTON_TEXT = 'スタート';
export const DECISION_BUTTON_TEXT = 'OK';
/** 問題数のリスト */
export const CHECKBOX_DATA = [
  { id: 1, value: 5, isSelected: false },
  { id: 2, value: 10, isSelected: false },
  { id: 3, value: 20, isSelected: false },
  { id: 4, value: 30, isSelected: false },
  { id: 5, value: 40, isSelected: false },
  { id: 6, value: 50, isSelected: false },
  { id: 7, value: 60, isSelected: false },
  { id: 8, value: 70, isSelected: false },
  { id: 9, value: 80, isSelected: false },
  { id: 10, value: 90, isSelected: false },
  { id: 11, value: 100, isSelected: false },
];

export const settingData: SettingData[] = [
  {
    item: [
      {
        label: '問題数の設定',
        data: [
          { text: '5' },
          { text: '10' },
          { text: '20' },
          { text: '30' },
          { text: '40' },
          { text: '50' },
          { text: '60' },
          { text: '70' },
          { text: '80' },
          { text: '90' },
          { text: '100' },
        ],
      },
      {
        label: '問題時間の設定',
        data: [
          { text: '150' },
          { text: '300' },
          { text: '600' },
          { text: '900' },
          { text: '1200' },
          { text: '1500' },
          { text: '1800' },
          { text: '2100' },
          { text: '2700' },
          { text: '3000' },
        ],
      },
    ],
  },
];

// /** Home画面 */
export const startButton: RouteButton[] = [
  {
    title: START_BUTTON_TEXT,
    navigationName: 'ExamMenu',
  },
];

/** QuestionTest画面 */
export const questionTestButton: RouteButton[] = [
  {
    title: START_BUTTON_TEXT,
    navigationName: 'QuestionTest',
  },
  {
    title: RETURN_BUTTON_TEXT,
    navigationName: 'ExamMenu',
  },
];

// /** ExamMenu画面 */
export const examMenuButton: RouteButton[] = [
  {
    title: '分野別',
    navigationName: 'ByField',
  },
  {
    title: '90問試験',
    navigationName: 'NinetyQuestionTest',
    quizData: [],
  },
  {
    title: RETURN_BUTTON_TEXT,
    navigationName: 'Home',
  },
];

// /** ByField画面 */
export const byFieldButton: RouteButton[] = [
  {
    title: '医学概論',
    navigationName: 'IntroductionToMedicine',
    quizData: introductionToMedicineData,
  },
  {
    title: '臨床医学総論',
    navigationName: 'ClinicalMedicineOverview',
    quizData: clinicalMedicineOverviewData,
  },
  {
    title: '生体計測装置学',
    navigationName: 'BiomedicalMeasurementInstrumentation',
    quizData: biomedicalMeasurementInstrumentationData,
  },
  {
    title: '医用治療機器学',
    navigationName: 'MedicalTherapeuticEquipment',
    quizData: medicalTherapeuticEquipment,
  },
  {
    title: '医用機器安全管理学',
    navigationName: 'MedDevSafety',
    quizData: [],
  },
  {
    title: '医用電気電子工学',
    navigationName: 'MedicalElectricalAndElectronicEngineering',
    quizData: [],
  },
  {
    title: '生体機能代行装置学',
    navigationName: 'BiologicalFunctionSubstitutionEquipment',
    quizData: [],
  },
  {
    title: '医用機械工学',
    navigationName: 'MedicalMechanicalEngineering',
    quizData: [],
  },
  {
    title: '生体物性材料工学',
    navigationName: 'BiologicalMaterialScienceAndEngineering',
    quizData: [],
  },
  {
    title: RETURN_BUTTON_TEXT,
    navigationName: 'ExamMenu',
  },
];

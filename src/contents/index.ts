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
          { text: '5問' },
          { text: '10問' },
          { text: '20問' },
          { text: '30問' },
          { text: '40問' },
          { text: '50問' },
          { text: '60問' },
          { text: '70問' },
          { text: '80問' },
          { text: '90問' },
          { text: '100問' },
        ],
      },
      {
        label: '問題時間の設定',
        data: [
          { text: '150秒 (2分30秒)' },
          { text: '300秒 (5分00秒)' },
          { text: '600秒 (10分00秒)' },
          { text: '900秒 (15分00秒)' },
          { text: '1200秒 (20分00秒)' },
          { text: '1500秒 (25分00秒)' },
          { text: '1800秒 (30分00秒)' },
          { text: '2100秒 (35分00秒)' },
          { text: '2700秒 (45分00秒)' },
          { text: '3000秒 (50分00秒)' },
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

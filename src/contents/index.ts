import { RouteButton } from '../../types/type';
import { clinicalMedicineOverview } from '../quiz/clinicalMedicineOverview';
import { introductionToMedicine } from '../quiz/introductionToMedicine';

export const RETURN_BUTTON_TEXT = '戻る';
export const START_BUTTON_TEXT = 'スタート';
export const DECISION_BUTTON_TEXT = 'OK';
export const TOTAL_QUESTIONS = 10;

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

export const introductionToMedicineTestButton: RouteButton[] = [
  {
    title: START_BUTTON_TEXT,
    navigationName: 'IntroductionToMedicineTest',
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
    quizData: introductionToMedicine,
  },
  {
    title: '臨床医学総論',
    navigationName: 'ClinicalMedicineOverview',
    quizData: clinicalMedicineOverview,
  },
  {
    title: '生体計測装置学',
    navigationName: 'BiomedicalMeasurementInstrumentation',
    quizData: [],
  },
  {
    title: '医用治療機器学',
    navigationName: 'MedicalTherapeuticEquipment',
    quizData: [],
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

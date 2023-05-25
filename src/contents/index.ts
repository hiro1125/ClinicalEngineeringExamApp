import { RouteButton } from '../../types/type';
import { biomedicalMeasurementInstrumentationData } from '../quiz/biomedicalMeasurementInstrumentation';
import { clinicalMedicineOverviewData } from '../quiz/clinicalMedicineOverview';
import { introductionToMedicineData } from '../quiz/introductionToMedicine';

export const RETURN_BUTTON_TEXT = '戻る';
export const START_BUTTON_TEXT = 'スタート';
export const DECISION_BUTTON_TEXT = 'OK';
export const TOTAL_QUESTIONS = 10;

export const TAGS_TEXT = {
  biomedicalMeasurementInstrumentation: '生体計測装置学',
};

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
    isStartQuizScreen: true,
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
    isStartQuizScreen: true,
  },
  {
    title: '臨床医学総論',
    navigationName: 'ClinicalMedicineOverview',
    quizData: clinicalMedicineOverviewData,
    isStartQuizScreen: true,
  },
  {
    title: '生体計測装置学',
    navigationName: 'BiomedicalMeasurementInstrumentation',
    quizData: biomedicalMeasurementInstrumentationData,
    isStartQuizScreen: true,
  },
  {
    title: '医用治療機器学',
    navigationName: 'MedicalTherapeuticEquipment',
    quizData: [],
    isStartQuizScreen: true,
  },
  {
    title: '医用機器安全管理学',
    navigationName: 'MedDevSafety',
    quizData: [],
    isStartQuizScreen: true,
  },
  {
    title: '医用電気電子工学',
    navigationName: 'MedicalElectricalAndElectronicEngineering',
    quizData: [],
    isStartQuizScreen: true,
  },
  {
    title: '生体機能代行装置学',
    navigationName: 'BiologicalFunctionSubstitutionEquipment',
    quizData: [],
    isStartQuizScreen: true,
  },
  {
    title: '医用機械工学',
    navigationName: 'MedicalMechanicalEngineering',
    quizData: [],
    isStartQuizScreen: true,
  },
  {
    title: '生体物性材料工学',
    navigationName: 'BiologicalMaterialScienceAndEngineering',
    quizData: [],
    isStartQuizScreen: true,
  },
  {
    title: RETURN_BUTTON_TEXT,
    navigationName: 'ExamMenu',
  },
];

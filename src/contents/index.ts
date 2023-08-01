import { RouteButton, SettingData } from '../../types/type';
import { biologicalFunctionSubstitutionEquipment } from '../quiz/biologicalFunctionSubstitutionEquipment';
import { biologicalMaterialScienceAndEngineering } from '../quiz/biologicalMaterialScienceAndEngineering';
import { biomedicalMeasurementInstrumentationData } from '../quiz/biomedicalMeasurementInstrumentation';
import { clinicalMedicineOverviewData } from '../quiz/clinicalMedicineOverview';
import { introductionToMedicineData } from '../quiz/introductionToMedicine';
import { medDevSafety } from '../quiz/medDevSafety';
import { medicalElectricalAndElectronicEngineering } from '../quiz/medicalElectricalAndElectronicEngineering';
import { medicalMechanicalEngineering } from '../quiz/medicalMechanicalEngineering';
import { medicalTherapeuticEquipment } from '../quiz/medicalTherapeuticEquipment';
import { randomTest } from '../quiz/randomTest';

export const RETURN_BUTTON_TEXT = '戻る';
export const START_BUTTON_TEXT = 'スタート';
export const DECISION_BUTTON_TEXT = 'OK';

/** 設定項目 */
export const LABEL = {
  NUMBER_OF_QUESTIONS: '問題数の設定',
  QUESTION_TIME_LIMIT: '問題時間の設定',
  SOUND_EFFECTS: '効果音の設定',
};

export const settingData: SettingData[] = [
  {
    item: [
      {
        label: LABEL.NUMBER_OF_QUESTIONS,
        data: [
          { id: 5, text: '5問' },
          { id: 10, text: '10問' },
          { id: 20, text: '20問' },
          { id: 30, text: '30問' },
          { id: 40, text: '40問' },
          { id: 50, text: '50問' },
          { id: 60, text: '60問' },
          { id: 70, text: '70問' },
          { id: 80, text: '80問' },
          { id: 90, text: '90問' },
          { id: 100, text: '100問' },
        ],
      },
      {
        label: LABEL.QUESTION_TIME_LIMIT,
        data: [
          { id: 150, text: '150秒 (2分30秒)' },
          { id: 300, text: '300秒 (5分00秒)' },
          { id: 600, text: '600秒 (10分00秒)' },
          { id: 900, text: '900秒 (15分00秒)' },
          { id: 1200, text: '1200秒 (20分00秒)' },
          { id: 1500, text: '1500秒 (25分00秒)' },
          { id: 1800, text: '1800秒 (30分00秒)' },
          { id: 2100, text: '2100秒 (35分00秒)' },
          { id: 2700, text: '2700秒 (45分00秒)' },
          { id: 3000, text: '3000秒 (50分00秒)' },
        ],
      },
      {
        label: LABEL.SOUND_EFFECTS,
        data: [
          { id: 1, text: '正解の効果音のみ' },
          { id: 2, text: '不正解の効果音のみ' },
          { id: 3, text: '両方効果音を出す' },
          { id: 4, text: '両方効果音なし' },
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
    quizData: randomTest,
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
    quizData: medDevSafety,
  },
  {
    title: '医用電気電子工学',
    navigationName: 'MedicalElectricalAndElectronicEngineering',
    quizData: medicalElectricalAndElectronicEngineering,
  },
  {
    title: '生体機能代行装置学',
    navigationName: 'BiologicalFunctionSubstitutionEquipment',
    quizData: biologicalFunctionSubstitutionEquipment,
  },
  {
    title: '医用機械工学',
    navigationName: 'MedicalMechanicalEngineering',
    quizData: medicalMechanicalEngineering,
  },
  {
    title: '生体物性材料工学',
    navigationName: 'BiologicalMaterialScienceAndEngineering',
    quizData: biologicalMaterialScienceAndEngineering,
  },
  {
    title: RETURN_BUTTON_TEXT,
    navigationName: 'ExamMenu',
  },
];

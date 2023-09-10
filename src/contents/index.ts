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

/** 各ボタンで使用するテキスト */
export const BUTTON_TEXT = {
  RETURN: '戻る',
  START: 'スタート',
  DECISION: 'OK',
};

/** 各ボタンと画面表示で使用するタイトル */
export const BUTTON_TITLE = {
  BY_FIELD: '分野別',
  RANDOM_TEST: 'ランダムテスト',
  INTRODUCTION_TO_MEDICINE: '医学概論',
  CLINICAL_MEDICINE_OVERVIEW: '臨床医学総論',
  BIOMEDICAL_MEASUREMENT_INSTRUMENTATION: '生体計測装置学',
  MEDICAL_THERAPEUTIC_EQUIPMENT: '医用治療機器学',
  MED_DEV_SAFETY: '医用機器安全管理学',
  MEDICAL_ELECTRICAL_AND_ELECTRONIC_ENGINEERING: '医用電気電子工学',
  BIOLOGICAL_FUNCTION_SUBSTITUTION_EQUIPMENT: '生体機能代行装置学',
  MEDICAL_MECHANICAL_ENGINEERING: '医用機械工学',
  BIOLOGICAL_MATERIAL_SCIENCE_AND_ENGINEERING: '生体物性材料工学',
};

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

/** Home画面 */
export const startButton: RouteButton[] = [
  {
    title: BUTTON_TEXT.START,
    navigationName: 'ExamMenu',
  },
];

/** QuestionTest画面 */
export const questionTestButton: RouteButton[] = [
  {
    title: BUTTON_TEXT.START,
    navigationName: 'QuestionTest',
  },
  {
    title: BUTTON_TEXT.RETURN,
    navigationName: 'ExamMenu',
  },
];

/** ExamMenu画面 */
export const examMenuButton: RouteButton[] = [
  {
    title: BUTTON_TITLE.BY_FIELD,
    navigationName: 'ByField',
  },
  {
    title: BUTTON_TITLE.RANDOM_TEST,
    navigationName: 'RandomTest',
    quizData: randomTest,
  },
  {
    title: BUTTON_TEXT.RETURN,
    navigationName: 'Home',
  },
];

/** ByField画面 */
export const byFieldButton: RouteButton[] = [
  {
    title: BUTTON_TITLE.INTRODUCTION_TO_MEDICINE,
    navigationName: 'IntroductionToMedicine',
    quizData: introductionToMedicineData,
  },
  {
    title: BUTTON_TITLE.CLINICAL_MEDICINE_OVERVIEW,
    navigationName: 'ClinicalMedicineOverview',
    quizData: clinicalMedicineOverviewData,
  },
  {
    title: BUTTON_TITLE.BIOMEDICAL_MEASUREMENT_INSTRUMENTATION,
    navigationName: 'BiomedicalMeasurementInstrumentation',
    quizData: biomedicalMeasurementInstrumentationData,
  },
  {
    title: BUTTON_TITLE.MEDICAL_THERAPEUTIC_EQUIPMENT,
    navigationName: 'MedicalTherapeuticEquipment',
    quizData: medicalTherapeuticEquipment,
  },
  {
    title: BUTTON_TITLE.MED_DEV_SAFETY,
    navigationName: 'MedDevSafety',
    quizData: medDevSafety,
  },
  {
    title: BUTTON_TITLE.MEDICAL_ELECTRICAL_AND_ELECTRONIC_ENGINEERING,
    navigationName: 'MedicalElectricalAndElectronicEngineering',
    quizData: medicalElectricalAndElectronicEngineering,
  },
  {
    title: BUTTON_TITLE.BIOLOGICAL_FUNCTION_SUBSTITUTION_EQUIPMENT,
    navigationName: 'BiologicalFunctionSubstitutionEquipment',
    quizData: biologicalFunctionSubstitutionEquipment,
  },
  {
    title: BUTTON_TITLE.MEDICAL_MECHANICAL_ENGINEERING,
    navigationName: 'MedicalMechanicalEngineering',
    quizData: medicalMechanicalEngineering,
  },
  {
    title: BUTTON_TITLE.BIOLOGICAL_MATERIAL_SCIENCE_AND_ENGINEERING,
    navigationName: 'BiologicalMaterialScienceAndEngineering',
    quizData: biologicalMaterialScienceAndEngineering,
  },
  {
    title: BUTTON_TEXT.RETURN,
    navigationName: 'ExamMenu',
  },
];

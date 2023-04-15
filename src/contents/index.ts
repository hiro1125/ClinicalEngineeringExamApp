import { RouteButton } from '../../types/type';

// /** Home画面 */
export const startButton: RouteButton[] = [
  {
    title: 'スタート',
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
    title: '戻る',
    navigationName: 'Home',
  },
];

// /** ByField画面 */
export const byFieldButton: RouteButton[] = [
  {
    title: '医学概論',
    navigationName: 'IntroductionToMedicine',
  },
  {
    title: '臨床医学総論',
    navigationName: 'ClinicalMedicineOverview',
  },
  {
    title: '生体計測装置学',
    navigationName: 'BiomedicalMeasurementInstrumentation',
  },
  {
    title: '医用治療機器学',
    navigationName: 'MedicalTherapeuticEquipment',
  },
  {
    title: '医用機器安全管理学',
    navigationName: 'MedDevSafety',
  },
  {
    title: '医用電気電子工学',
    navigationName: 'MedicalElectricalAndElectronicEngineering',
  },
  {
    title: '生体機能代行装置学',
    navigationName: 'BiologicalFunctionSubstitutionEquipment',
  },
  {
    title: '医用機械工学',
    navigationName: 'MedicalMechanicalEngineering',
  },
  {
    title: '生体物性材料工学',
    navigationName: 'BiologicalMaterialScienceAndEngineering',
  },
  {
    title: '戻る',
    navigationName: 'ExamMenu',
  },
];

/** QuestionTest画面 */
export const questionTestButton: RouteButton[] = [
  {
    title: 'スタート',
    navigationName: 'QuestionTest',
  },
  {
    title: 'RETURN_BUTTON',
    navigationName: 'ExamMenu',
  },
];

export const RETURN_BUTTON = '戻る';

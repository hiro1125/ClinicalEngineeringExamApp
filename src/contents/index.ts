import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../types/type';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

/** Home画面 */
export const startButton = [
  {
    title: 'スタート',
    onPress: () => navigation.navigate('ExamMenu'),
  },
];

/** ExamMenu画面 */
export const examMenuButton = [
  {
    title: '分野別',
    onPress: () => navigation.navigate('ByField'),
  },
  {
    title: '90問試験',
    onPress: () => navigation.navigate('NinetyQuestionTest'),
  },
  {
    title: '戻る',
    onPress: () => navigation.goBack(),
  },
];

/** ByField画面 */
export const byFieldButton = [
  {
    title: '医学概論',
    onPress: () => navigation.navigate('IntroductionToMedicine'),
  },
  {
    title: '臨床医学総論',
    onPress: () => navigation.navigate('ClinicalMedicineOverview'),
  },
  {
    title: '生体計測装置学',
    onPress: () => navigation.navigate('BiomedicalMeasurementInstrumentation'),
  },
  {
    title: '医用治療機器学',
    onPress: () => navigation.navigate('MedicalTherapeuticEquipment'),
  },
  {
    title: '医用機器安全管理学',
    onPress: () => navigation.navigate('MedDevSafety'),
  },
  {
    title: '医用電気電子工学',
    onPress: () =>
      navigation.navigate('MedicalElectricalAndElectronicEngineering'),
  },
  {
    title: '生体機能代行装置学',
    onPress: () =>
      navigation.navigate('BiologicalFunctionSubstitutionEquipment'),
  },
  {
    title: '医用機械工学',
    onPress: () => navigation.navigate('MedicalMechanicalEngineering'),
  },
  {
    title: '生体物性材料工学',
    onPress: () =>
      navigation.navigate('BiologicalMaterialScienceAndEngineering'),
  },
  {
    title: '戻る',
    onPress: () => navigation.goBack(),
  },
];

/** NinetyQuestionTest画面 */
export const ninetyQuestionTestButton = [
  {
    title: 'スタート',
    onPress: () => navigation.navigate('NinetyQuestionTest'),
  },
  {
    title: '戻る',
    onPress: () => navigation.goBack(),
  },
];

import { QuizData } from '../../types/type';
import { biologicalFunctionSubstitutionEquipment } from './biologicalFunctionSubstitutionEquipment';
import { biologicalMaterialScienceAndEngineering } from './biologicalMaterialScienceAndEngineering';
import { biomedicalMeasurementInstrumentationData } from './biomedicalMeasurementInstrumentation';
import { clinicalMedicineOverviewData } from './clinicalMedicineOverview';
import { introductionToMedicineData } from './introductionToMedicine';
import { medDevSafety } from './medDevSafety';
import { medicalElectricalAndElectronicEngineering } from './medicalElectricalAndElectronicEngineering';
import { medicalMechanicalEngineering } from './medicalMechanicalEngineering';
import { medicalTherapeuticEquipment } from './medicalTherapeuticEquipment';

export const randomTest: QuizData[] = [
  ...introductionToMedicineData,
  ...clinicalMedicineOverviewData,
  ...biomedicalMeasurementInstrumentationData,
  ...medicalTherapeuticEquipment,
  ...medDevSafety,
  ...medicalElectricalAndElectronicEngineering,
  ...biologicalFunctionSubstitutionEquipment,
  ...medicalMechanicalEngineering,
  ...biologicalMaterialScienceAndEngineering,
];

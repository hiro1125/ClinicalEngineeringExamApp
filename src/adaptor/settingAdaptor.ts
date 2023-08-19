import { SettingItem, SettingItemProps } from '../../types/type';
import { LABEL } from '../contents';
import { useRootSelector } from '../redux/store/store';

export const settingAdaptor = (data: SettingItem) => {
  const totalQuestionValue = useRootSelector(
    (state) => state.settings.totalQuestion
  );
  const timeLimitValue = useRootSelector((state) => state.settings.timeLimit);

  const soundEffectValue = useRootSelector(
    (state) => state.settings.soundEffect
  );

  const compilationData = data.data.map((item: SettingItemProps) => {
    if (data.label === LABEL.NUMBER_OF_QUESTIONS) {
      return {
        id: item.id,
        text: item.text,
        check: item.id === totalQuestionValue,
      };
    } else if (data.label === LABEL.QUESTION_TIME_LIMIT) {
      return {
        id: item.id,
        text: item.text,
        check: item.id === timeLimitValue,
      };
    } else {
      return {
        id: item.id,
        text: item.text,
        check: item.id === soundEffectValue,
      };
    }
  });

  const newCompilationData = {
    label: data.label,
    data: compilationData,
  };

  return newCompilationData;
};

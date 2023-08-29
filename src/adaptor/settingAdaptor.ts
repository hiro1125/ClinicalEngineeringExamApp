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
    const getCheckValue =
      (data.label === LABEL.NUMBER_OF_QUESTIONS &&
        item.id === totalQuestionValue) ||
      (data.label === LABEL.QUESTION_TIME_LIMIT &&
        item.id === timeLimitValue) ||
      item.id === soundEffectValue;

    return {
      id: item.id,
      text: item.text,
      check: getCheckValue,
    };
  });

  const newCompilationData = {
    label: data.label,
    data: compilationData,
  };

  return newCompilationData;
};

import { SettingItem, SettingItemProps } from '../../types/type';
import { useRootSelector } from '../redux/store/store';

export const settingAdaptor = (data: SettingItem) => {
  const totalQuestionValue = useRootSelector(
    (state) => state.settings.totalQuestion
  );
  const timeLimitValue = useRootSelector((state) => state.settings.timeLimit);

  const compilationData = data.data.map((item: SettingItemProps) => {
    if (data.label === '問題数の設定') {
      return {
        id: item.id,
        text: item.text,
        check: item.id === totalQuestionValue,
      };
    } else if (data.label === '問題時間の設定') {
      return {
        id: item.id,
        text: item.text,
        check: item.id === timeLimitValue,
      };
    }
  });

  const newCompilationData = {
    label: data.label,
    data: compilationData,
  };

  return newCompilationData;
};

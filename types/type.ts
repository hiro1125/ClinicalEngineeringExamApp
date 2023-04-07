/** アプリケーションのルーティング */
export type RootStackParamList = {
  Home: undefined;
  ExamMenu: undefined;
  Exam1: undefined;
  Exam2: undefined;
  Exam3: undefined;
};

/** Screen画面のProps */
export type ScreenProps = {
  title: string;
  buttons: {
    title: string;
    onPress: () => void;
  }[];
};
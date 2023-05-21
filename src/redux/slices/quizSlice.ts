import { createSlice } from '@reduxjs/toolkit';
import { QuizData } from '../../../types/type';

type QuizInitialState = {
  quizData: QuizData[];
};

const quizInitialState: QuizInitialState = {
  quizData: [],
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: quizInitialState,
  reducers: {
    setQuizDate: (state, { payload }) => {
      state.quizData = payload;
    },
  },
});

export const { setQuizDate } = quizSlice.actions;

import { combineReducers } from '@reduxjs/toolkit';
import { quizSlice } from './slices/quizSlice';
import { totalQuestionSlice } from './slices/totalQuestionSlice';

export const rootReducer = combineReducers({
  /** クイズ系のデータ */
  quiz: quizSlice.reducer,
  /** ユーザのデータ */
  totalQuestion: totalQuestionSlice.reducer,
});

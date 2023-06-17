import { combineReducers } from '@reduxjs/toolkit';
import { quizSlice } from './slices/quizSlice';
import { settingsSlice } from './slices/settingsSlice';

export const rootReducer = combineReducers({
  /** クイズ系のデータ */
  quiz: quizSlice.reducer,
  /** ユーザのデータ */
  totalQuestion: totalQuestionSlice.reducer,
  totalQuestion: settingsSlice.reducer,
});

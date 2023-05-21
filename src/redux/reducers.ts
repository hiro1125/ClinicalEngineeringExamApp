import { combineReducers } from '@reduxjs/toolkit';
import { quizSlice } from './slices/quizSlice';

export const rootReducer = combineReducers({
  /** クイズ系のデータ */
  quiz: quizSlice.reducer,
});

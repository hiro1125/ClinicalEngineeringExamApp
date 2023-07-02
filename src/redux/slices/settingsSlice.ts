import { createSlice } from '@reduxjs/toolkit';

type userState = {
  totalQuestion: number;
  timeLimit: number;
};

const settingsInitialState: userState = {
  totalQuestion: 10,
  timeLimit: 300,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: settingsInitialState,
  reducers: {
    /** クイズを答えるための問題数 */
    setTotalQuestion: (state, { payload }) => {
      state.totalQuestion = payload;
    },
    /** クイズを答えるための時間 */
    setTimeLimit: (state, { payload }) => {
      state.timeLimit = payload;
    },
  },
});

export const { setTotalQuestion, setTimeLimit } = settingsSlice.actions;

import { createSlice } from '@reduxjs/toolkit';

type userState = {
  totalQuestion: number;
  timeLimit: number;
  soundEffect: number;
};

const settingsInitialState: userState = {
  totalQuestion: 10,
  timeLimit: 300,
  soundEffect: 4,
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
    /** 効果音表示非表示 */
    setSoundEffect: (state, { payload }) => {
      state.soundEffect = payload;
    },
  },
});

export const { setTotalQuestion, setTimeLimit, setSoundEffect } =
  settingsSlice.actions;

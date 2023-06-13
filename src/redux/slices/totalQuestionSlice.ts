import { createSlice } from '@reduxjs/toolkit';

type userState = {
  totalQuestion: number;
};

const totalQuestionInitialState: userState = {
  totalQuestion: 10,
};

export const totalQuestionSlice = createSlice({
  name: 'totalQuestion',
  initialState: totalQuestionInitialState,
  reducers: {
    setTotalQuestion: (state, { payload }) => {
      state.totalQuestion = payload;
    },
  },
});

export const { setTotalQuestion } = totalQuestionSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StarState {
  starList: Array<string>;
  starCount: number;
}

const initialState = { starCount: 0, starList: [] } as StarState;

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    starInc(state) {
      state.starCount++;
    },
    starDec(state) {
      if (state.starCount != 0) state.starCount--;
    },
    starIncByAmount(state, action: PayloadAction<number>) {
      state.starCount += action.payload;
    },
  },
});

export const { starInc, starDec, starIncByAmount } = counterSlice.actions;
export default counterSlice.reducer;

import {
  createSlice,
} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  navigation: 0,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setNavigation(state, action: PayloadAction<number>) {
      state.navigation = action.payload;
    },
  },
});

const globalReducer = globalSlice.reducer;

export const { setNavigation } = globalSlice.actions;

export default globalReducer;
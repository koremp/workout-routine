import {
  createSlice,
} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  navigation: 'Home',
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setNavigation(state, action: PayloadAction<string>) {
      state.navigation = action.payload;
    },
  },
});

const globalReducer = globalSlice.reducer;

export const { setNavigation } = globalSlice.actions;

export default globalReducer;
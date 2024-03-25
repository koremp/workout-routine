import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { initialAccountState } from './Interfaces';

const signIn = createAsyncThunk(
  'account/sign-in',
  async (id, password) => {
    const response = await fetch(``);
    return response.json();
  },
);

export { signIn };

const accountSlice = createSlice({
  name: 'account',
  initialState: initialAccountState,
  reducers: {
    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    signOut(state) {
      state.accessToken = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.accessToken = action.payload;
    });
  },
});

const accountReducer = accountSlice.reducer;

export const { setId, setPassword, setAccessToken, signOut } = accountSlice.actions;

export default accountReducer;
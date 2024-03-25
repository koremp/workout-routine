import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './reducers/account';
import globalReducer from './reducers/global';

export const makeStore = () => configureStore({
  reducer: {
    account: accountReducer,
    global: globalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
import { setNavigation } from './global';

import globalReducer from './global';

describe("Account Reducer", () => {
  const initialState = {
    navigation: '',
  };

  describe("setNavigation", () => {
    it('sets navigation.', () => {
      const navigation = 'new-navigation-text';
      const state = globalReducer(initialState, setNavigation(navigation));

      expect(state.navigation).toBe(navigation);
    });
  });
});
import { setNavigation } from "./global";

import globalReducer from "./global";

describe("Account Reducer", () => {
  const initialState = {
    navigation: 0,
  };

  describe("setNavigation", () => {
    it("sets navigation.", () => {
      const navigation = 1;
      const state = globalReducer(initialState, setNavigation(navigation));

      expect(state.navigation).toBe(navigation);
    });
  });
});
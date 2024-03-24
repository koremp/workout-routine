import { setId, setPassword, setAccessToken, signOut, signIn } from './account';

import accountReducer from './account';

import { initialAccountState, InitialAccountState } from './Interfaces';

describe("Account Reducer", () => {
  describe('setId', () => {
    it('sets id.', () => {
      const id = 'id-example';
      const state = accountReducer(initialAccountState, setId(id));

      expect(state.id).toBe(id);
    });
  });

  describe('setPassword', () => {
    it('sets password.', () => {
      const password = 'password-example';
      const state = accountReducer(initialAccountState, setPassword(password));

      expect(state.password).toBe(password);
    });

  });
});

describe('setAccessToken', () => {
  it('sets access token..', () => {
    const accessToken = 'access token';
    const state = accountReducer(initialAccountState, setAccessToken(accessToken));

    expect(state.accessToken).toBe(accessToken);
  });
});

describe('signOut', () => {
  it('sets access token to empty string', () => {
    const initialState = initialAccountState;
    initialState.accessToken = 'accessToken';

    const state = accountReducer(initialAccountState, signOut());
    expect(state.accessToken).toBe('');
  });
});

describe('signIn', () => {
  it('', () => {
    // todo
  });
});
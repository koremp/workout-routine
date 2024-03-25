interface InitialAccountState {
  id: string
  password: string
  accessToken: string
}

const initialAccountState: InitialAccountState = {
  id: '',
  password: '',
  accessToken: '',
} satisfies InitialAccountState as InitialAccountState;

export type {
  InitialAccountState,
};

export {
  initialAccountState,
};
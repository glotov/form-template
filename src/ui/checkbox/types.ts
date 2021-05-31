export type TPropsCheckbox = {
  model: string;
  id: string;
  isRequired: boolean;
};

export type TParams = {
  id: string;
  value: boolean;
  model: string;
};

export type TDispatch = {
  app: {
    setField: (params: TParams) => void;
  }
}

export type TState = {
  app: {
    form: {
      [model: string]: {
        [id: string]: string;
      }
    }
  }
}
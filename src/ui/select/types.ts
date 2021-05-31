export type TDefault = {
  id: string;
  model: string;
};

export type TState = {
  app: {
    form: {
      [index: string]: {
        [key: string]: string;
      };
    }
  }
};

export type TSetField = TDefault & {
  value: string;
};

export type TOptions = {
  name: string;
  value: string;
};

export type TSelect = TDefault & {
  options: [{
    name: string;
    value: string;
  }]
};

export type TDispatch = {
  app: {
    setField: (props: TSetField) => void;
  }
};
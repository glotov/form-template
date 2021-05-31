type TDefault = {
  id: string;
  model: string;
};

type TSetField = TDefault & {
  value: string;
};

export type TInputProps = TDefault & {
  placeholder?: string;
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

export type TSetInputData = {
  id: string;
  value: string;
};

export type TDispatch = {
  app: {
    setField: (props: TSetField) => void
  }
};


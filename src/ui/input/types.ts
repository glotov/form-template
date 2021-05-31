type TDefault = {
  id: string;
  model: string;
};

type TSetField = TDefault & {
  value: string;
};

export type TInputProps = TDefault & {
  placeholder?: string;
  isRequired?: string;
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

export type TDispatch = {
  app: {
    setField: (props: TSetField) => void
  }
};

export type TDelayEvent = {  
  id: string;
  value: string;
};

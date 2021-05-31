export type TPropsRadio = {
  model: string;
  id: string;
  value: string;
  title?: string; 
};

export type TDispatch = {
  app: {
    setField: (data: TPropsRadio) => void;
  }
};

export type TState = {
  app: {
    form: {
      [model: string]: {
        [id: string]: string;
      }
    }
  }
};
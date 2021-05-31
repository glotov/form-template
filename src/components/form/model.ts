type TPayload = {
  model: string;
  id: string;
  value: string;
};

type TState = {
  app: TStateApp
};

type TStateApp = {
  form: {
    [model: string]: {
      [id: string]: string;
    };
  }
};

const app = {
  state: {
    form: {},
  },
  reducers: {
    setField(state: TStateApp, payload: TPayload) {
      return {
        ...state,
        form: {
          ...state.form,
          [payload.model]: {
            ...state.form[payload.model],
            [payload.id]: payload.value,
          },
        },
      };
    },
  },
  effects: () => ({
    submit(payload: string, state: TState) {
      const data = state.app.form[payload];
      let isValid = true;
      Object.keys(data).forEach((el: any) => {
        if(!data[el]) isValid = false;
      })
      
      isValid && alert(JSON.stringify(state.app.form[payload]));
    }
  }),
};

export default app;

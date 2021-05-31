import { init } from '@rematch/core';

import app from 'components/form/model';

export const store = init({
  models: {
    app,
  },
});

export default store;


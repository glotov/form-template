import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { store } from './store';

import './theme.css';

import Form from 'components/form';

import form from './example-config1';
import form2 from './example-config2';


const App = () => (
  <Form config={form2} />
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('app'));

export default app;
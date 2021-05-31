import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { TDispatch, TSelect, TState, TOptions } from './types';

const Select = ({ model, id, options } : TSelect) => {
  const dispatch = useDispatch<TDispatch>();
  
  const change = (e: React.BaseSyntheticEvent) => dispatch.app.setField({
    id,
    value: e.target.value,
    model,
  });
  const value = useSelector<TState, string>(
    (state) => (state.app.form && state.app.form[model]
      ? state.app.form[model][id]
      : ''),
  );
  return (
    <select onChange={change} value={value}>
      {
        options.map((el: TOptions, key: number) => (
          <option key={key} value={el.value}>{el.name}</option>
        ))
      }
    </select>
  )
};

export default Select;
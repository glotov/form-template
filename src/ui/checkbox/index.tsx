import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { TPropsCheckbox, TDispatch, TState } from './types';

const Checkbox = ({ model, id } : TPropsCheckbox) => {
  const dispatch = useDispatch<TDispatch>();
  
  const change = (e: React.BaseSyntheticEvent) => dispatch.app.setField({
    id,
    value: e.target.checked,
    model,
  });
  const value = useSelector(
    (state: TState) => (state.app.form && state.app.form[model]
      ? state.app.form[model][id]
      : ''),
  );
  return <input onChange={change} value={value} type="checkbox"/>;
}

export default Checkbox;
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { TPropsRadio, TDispatch, TState } from './types';

const Radio = ({ model, id, value, title } : TPropsRadio) => {
  const dispatch = useDispatch<TDispatch>();
  
  const change = (e: React.BaseSyntheticEvent) => dispatch.app.setField({
    id,
    value: e.target.value,
    model,
  });
  const val = useSelector(
    (state: TState) => (state.app.form && state.app.form[model]
      ? state.app.form[model][id]
      : ''),
  );
  return <label>{title || null}<input checked={val === value} onChange={change} value={value} type="radio" /></label>;
};

export default Radio;
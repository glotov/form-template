import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { TInputProps, TState, TDispatch, TDelayEvent } from './types';

import debounce from 'utils/debounce';

const { useEffect, useState, useRef } = React;

const Input: React.FC<TInputProps> = ({ id, placeholder, model, isRequired }) => {
  const dispatch = useDispatch<TDispatch>();
  const value = useSelector<TState, string>(
    (state) => (state.app.form && state.app.form[model]
      ? state.app.form[model][id]
      : ''),
  );
  const setInput = (data: TDelayEvent) => {
    dispatch.app.setField({
      id: data.id,
      value: data.value,
      model,
    });
  };
  const delayEvent: (params: TDelayEvent) => void = useRef(debounce(setInput, 300)).current;
  const [stateVal, setStateVal] = useState(value);
  const [error, setError] = useState(false);

  const change = (e: React.BaseSyntheticEvent) => {
    const query = { id, value: e.target.value };
    delayEvent(query);

    setStateVal(e.target.value);
    isRequired && !e.target.value ? setError(true) : error && setError(false) 
  };

  useEffect(() => {
    dispatch.app.setField({ id, value: value || '', model });
    setStateVal(value);
  }, [dispatch, value]);

  return (
    <div>
      <input onChange={change} value={stateVal} placeholder={placeholder} id={id} />;
      {error && <div>поле должно быть заполненно</div>}    
    </div>
  )
};

export default Input;

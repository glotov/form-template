import * as React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { TInputProps, TState, TDispatch, TSetInputData } from './types';

import debounce from 'utils/debounce';

const { useEffect, useState, useRef } = React;

const TextArea: React.FC<TInputProps> = ({ id, placeholder, model }) => {
  const dispatch = useDispatch<TDispatch>();
  const value = useSelector<TState, string>(
    (state) => (state.app.form && state.app.form[model]
      ? state.app.form[model][id]
      : ''),
  );
  const setInput = (data: TSetInputData) => {
    dispatch.app.setField({
      id: data.id,
      value: data.value,
      model,
    });
  };
  const delayEvent: (param: TSetInputData) => void = useRef(debounce(setInput, 300)).current;
  const [stateVal, setStateVal] = useState(value);

  const change = (e: React.BaseSyntheticEvent) => {
    const query = { id, value: e.target.value };
    delayEvent(query);

    setStateVal(e.target.value);
  };

  useEffect(() => {
    dispatch.app.setField({ id, value: value || '', model });
    setStateVal(value);
  }, [dispatch, value]);

  return <textarea onChange={change} value={stateVal} placeholder={placeholder} id={id} />;
};

export default TextArea;

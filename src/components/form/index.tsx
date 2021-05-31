import * as React from 'react';
import { useDispatch } from 'react-redux';
import UI from 'ui';

type TElCongig = {
  name: string;
  component: string;
  props: {
    id: string;
    model: string;
    placeholder?: string;
    options?: Array<{ name: string, value: string }>;
    value?: string;
  }
};

const Form = ({ config } : { config: Array<TElCongig>}) => {
  const dispatch = useDispatch();

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch.app.submit(config[0].props.model);
  }
  return (
    <form onSubmit={submit}>
      {config.map((el: TElCongig, key: number) => {
        const Component: any = UI[el.component] ? UI[el.component] : null;
        
        return (
          Component ?
            <div key={key}>
              {el.name && <h4>{el.name}</h4>}
              <Component {...el.props}/>
            </div>
          : null
        )
      })}
      <button type="submit">Ok</button>
    </form>
  )
};

export default Form;
import Input from './input';
import Select from './select';
import TextArea from './textarea';
import Checkbox from './checkbox';
import Radio from './radio';

type TUI = {
  Input:React.ReactNode,
  Select:React.ReactNode,
  TextArea:React.ReactNode,
  Checkbox:React.ReactNode,
  Radio:React.ReactNode,
  [component: string]: React.ReactNode
}

const UI: TUI = {
  Input,
  Select,
  TextArea,
  Checkbox,
  Radio
};

export default UI;

const form = [
  {
    name: 'Номер телефона',
    component: 'Input',
    props: {
      id: 'phone',
      model: 'adress',
      placeholder: 'Номер телефона',
      isRequired: true
    },
  },
  {
    name: 'Город',
    component: 'Select',
    props: {
      id: 'city',
      model: 'adress',
      options: [{ 
        name: 'Москва', 
        value: 'Москва'
      }, 
      { 
        name: 'Воронеж', 
        value: 'Воронеж'
      }, 
      {
        name: 'Калининград', 
        value: 'Калининград'
      }]
    },
  },
  {
    name: 'Полный адрес',
    component: 'TextArea',
    props: {
      model: 'adress',
      id: 'fullAddr',
      placeholder: 'Полный адрес',
      isRequired: true
    },
  },
  {
    name: 'Проживаете за границей',
    component: 'Checkbox',
    props: {
      model: 'adress',
      id: 'imposter',
    },
  },
  {
    name: 'Время сна',
    component: 'Radio',
    props: {
      model: 'adress',
      id: 'time',
      value: '6:00',
      title: '6:00'
    },
  },
  {
    name: '',
    component: 'Radio',
    props: {
      model: 'adress',
      id: 'time',
      title: '12:00',
      value: '12:00',
    },
  },
  {
    name: '',
    component: 'Radio',
    props: {
      model: 'adress',
      id: 'time',
      title: '18:00',
      value: '18:00',
    },
  },
];

export default form;
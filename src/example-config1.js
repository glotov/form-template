const form = [
  {
    name: 'Имя',
    component: 'Input',
    props: {
      id: 'name',
      model: 'profile',
      placeholder: 'Имя',
      isRequired: true
    },
  },
  {
    name: 'Фамилия',
    component: 'Input',
    props: {
      id: 'sername',
      model: 'profile',
      placeholder: 'Фамилия',
      isRequired: true
    },
  },
  {
    name: 'Отчество',
    component: 'Input',
    props: {
      id: 'fatherName',
      model: 'profile',
      placeholder: 'Отчество',
      isRequired: true
    },
  },
  {
    name: 'Телосложение',
    component: 'Select',
    props: {
      id: 'body',
      model: 'profile',
      options: [{ 
        name: 'полное', 
        value: 'max'
      }, 
      { 
        name: 'нормальное', 
        value: 'medium'
      }, 
      {
        name: 'худое', 
        value: 'low'
      }]
    },
  },
  {
    name: 'Примечание',
    component: 'TextArea',
    props: {
      model: 'profile',
      id: 'note',
      placeholder: 'Примечание',
      isRequired: true
    },
  },
  {
    name: 'Семейное положение',
    component: 'Checkbox',
    props: {
      model: 'profile',
      id: 'mary',
    },
  },
  {
    name: 'Пол',
    component: 'Radio',
    props: {
      model: 'profile',
      id: 'gender',
      value: 'male',
      title: 'Мужской'
    },
  },
  {
    name: '',
    component: 'Radio',
    props: {
      model: 'profile',
      id: 'gender',
      title: 'Женский',
      value: 'female',
    },
  },
];

export default form;
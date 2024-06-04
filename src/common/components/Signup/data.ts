import { InputField } from 'common/interfaces';

export const inputFields: InputField[] = [
  {
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'Enter your email',
    required: true,
  },
  {
    id: 'userName',
    label: 'Username',
    type: 'text',
    placeholder: 'Choose a preferred userName',
    required: true,
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Choose a strong password',
    required: true,
  },
];

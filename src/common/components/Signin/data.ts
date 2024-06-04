import { InputField } from 'common/interfaces';

export const inputFields: InputField[] = [
  {
    id: 'emailOrUsername',
    label: 'Email or Username',
    type: 'text',
    placeholder: 'Enter your email or userName',
    required: true,
  },
  {
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
    required: true,
  },
];

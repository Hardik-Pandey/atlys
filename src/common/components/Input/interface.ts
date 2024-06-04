import React, { CSSProperties } from 'react';

export interface InputProps {
  type?:
    | 'text'
    | 'number'
    | 'password'
    | 'email'
    | 'url'
    | 'tel'
    | 'search'
    | 'date';
  id?: string;
  name?: string;
  value?: string | number;
  defaultValue?: string | number;
  placeholder?: string;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  min?: number;
  max?: number;
  step?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  ariaLabel?: string;
  ariaDescribedby?: string;
  ariaInvalid?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

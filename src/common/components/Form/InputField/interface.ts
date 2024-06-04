export interface InputFieldProps {
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  label: string;
  type?:
    | 'text'
    | 'number'
    | 'password'
    | 'email'
    | 'url'
    | 'tel'
    | 'search'
    | 'date';
  value: string;
  placeholder?: string;
  required?: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

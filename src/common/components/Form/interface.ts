import { InputField } from 'common/interfaces';

export interface FormProps {
  className?: string;
  style?: React.CSSProperties;
  inputFields: InputField[];
  onSubmit: (formData: { [key: string]: any }) => void;
  ctaText?: string;
}

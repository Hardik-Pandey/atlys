import { InputField } from 'common/interfaces';

interface Secondary {
  text: string;
  onSecondaryLinkClick: () => void;
  cta: string;
}

export interface AuthFormWrapperProps {
  className?: string;
  style?: React.CSSProperties;
  heading?: string;
  subHeading?: string;
  inputFields: InputField[];
  onSubmit: (formData: { [key: string]: any }) => void;
  secondary?: Secondary;
  formCtaText?: string;
}

import { cn } from 'common/utils/cn';

import { InputProps } from './interface';

const Input: React.FC<InputProps> = ({
  type = 'text',
  id,
  name,
  value,
  defaultValue,
  placeholder,
  className = '',
  style,
  disabled = false,
  readOnly = false,
  required = false,
  min,
  max,
  step,
  maxLength,
  minLength,
  pattern,
  ariaLabel,
  ariaDescribedby,
  ariaInvalid,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,
  onKeyPress,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className={cn(
        'text-base text-[var(--gray2)] bg-transparent border-1.5 border-[var(--gray3)] rounded focus:outline-none',
        className
      )}
      style={style}
      disabled={disabled}
      readOnly={readOnly}
      required={required}
      min={min}
      max={max}
      step={step}
      maxLength={maxLength}
      minLength={minLength}
      pattern={pattern}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedby}
      aria-invalid={ariaInvalid}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onKeyPress={onKeyPress}
    />
  );
};

export default Input;

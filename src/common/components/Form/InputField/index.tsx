import React, { useState } from 'react';

import { cn } from 'common/utils/cn';
import Image from 'common/components/Image';
import Input from 'common/components/Input';
import eye from 'common/assets/eye.svg';

import { InputFieldProps } from './interface';

const InputField: React.FC<InputFieldProps> = ({
  className,
  style,
  id,
  label,
  type,
  value,
  placeholder,
  required,
  handleChange,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <div className={cn('flex flex-col mb-4 relative', className)} style={style}>
      <label
        htmlFor={id}
        className="w-fit mb-2.5 text-sm text-[var(--gray1)] font-medium"
      >
        {label}
      </label>
      <Input
        type={type === 'password' && showPassword ? 'text' : type}
        id={id}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={handleChange}
        className="p-3"
      />
      {type === 'password' && (
        <Image
          src={eye}
          lazy={false}
          alt="eye"
          ariaLabel="eye"
          className="w-5 h-5 absolute bottom-3 right-2.5 cursor-pointer"
          onClick={togglePasswordVisibility}
        />
      )}
    </div>
  );
};

export default InputField;

import React, { useState } from 'react';

import InputField from './InputField';
import { FormProps } from './interface';
import Button from '../Button';

const Form: React.FC<FormProps> = ({
  className,
  style,
  inputFields,
  onSubmit,
  ctaText = 'Submit',
}) => {
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={className} style={style}>
      {(inputFields || []).map(({ id, label, type, placeholder, required }) => (
        <InputField
          key={id}
          id={id}
          label={label}
          type={type}
          value={formData[id] || ''}
          placeholder={placeholder}
          required={required}
          handleChange={handleChange}
        />
      ))}
      <Button fullWidth type="submit" className="mt-1">
        {ctaText}
      </Button>
    </form>
  );
};

export default Form;

import React from 'react';

import { cn } from 'common/utils/cn';
import Form from 'common/components/Form';

import { AuthFormWrapperProps } from './interface';

const AuthFormWrapper: React.FC<AuthFormWrapperProps> = ({
  className,
  style,
  heading,
  subHeading,
  inputFields,
  onSubmit,
  secondary,
  secondary: { text, onSecondaryLinkClick, cta } = {},
  formCtaText,
}) => {
  return (
    <div
      className={cn(
        'gradientBorder w-[463px] px-6 py-10 bg-[var(--secondaryDark)] rounded-lg',
        className
      )}
      style={style}
    >
      {heading ? (
        <h1 className="uppercase text-sm font-medium tracking-[0.03em] text-[#6B6C70] w-[fit-content] mx-[auto]">
          {heading}
        </h1>
      ) : null}
      {subHeading ? (
        <h2 className="w-[fit-content] mx-[auto] mt-2 mb-[45px] text-lg font-semibold text-white">
          {subHeading}
        </h2>
      ) : null}
      <Form
        inputFields={inputFields}
        onSubmit={onSubmit}
        ctaText={formCtaText}
      />
      {secondary ? (
        <p className="text-sm font-medium text-[var(--gray2)] mt-3">
          {text}&nbsp;
          <span onClick={onSecondaryLinkClick} className="text-[var(--gray1)]">
            {cta}
          </span>
        </p>
      ) : null}
    </div>
  );
};

export default AuthFormWrapper;

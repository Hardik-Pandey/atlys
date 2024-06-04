import React, { CSSProperties } from 'react';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseEnter?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onMouseLeave?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
}

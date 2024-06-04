import { cn } from 'common/utils/cn';
import { ButtonProps } from './interface';

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  className = '',
  style,
  disabled = false,
  ariaLabel,
  ariaExpanded,
  ariaControls,
  icon,
  loading = false,
  fullWidth = false,
  children,
}) => {
  const fullWidthClasses = fullWidth ? 'w-full' : '';
  const loadingClasses = loading ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      className={cn(
        `${fullWidthClasses} ${loadingClasses} p-3 text-base font-medium text-white bg-[var(--primaryCtaBg)] rounded focus:outline-none`,
        className
      )}
      style={style}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
    >
      {loading ? <span>Loading...</span> : icon} {children}
    </button>
  );
};

export default Button;

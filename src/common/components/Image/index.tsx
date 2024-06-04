import React from 'react';

import { ImageProps } from './interface';

const Image: React.FC<ImageProps> = ({
  src,
  alt = '',
  width,
  height,
  lazy = true,
  className,
  style,
  onClick,
  onLoad,
  onError,
  role = 'img',
  ariaLabel,
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      width={width}
      height={height}
      loading={lazy ? 'lazy' : 'eager'}
      onClick={onClick}
      onLoad={onLoad}
      onError={onError}
      role={role}
      aria-label={ariaLabel}
    />
  );
};

export default Image;

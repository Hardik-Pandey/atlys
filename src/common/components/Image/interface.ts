export interface ImageProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  lazy?: boolean;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onLoad?: () => void;
  onError?: () => void;
  caption?: string;
  role?: string;
  ariaLabel?: string;
}

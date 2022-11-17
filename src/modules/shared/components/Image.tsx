import { memo, ReactElement } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type ImageProps = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  placeholder?: ReactElement;
  placeholderSrc?: string;
  visibleByDefault?: boolean;
};

export const Image = memo(
  ({
    src,
    alt,
    width,
    height,
    placeholder,
    placeholderSrc,
    visibleByDefault,
  }: ImageProps) => (
    <LazyLoadImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder={placeholder}
      placeholderSrc={placeholderSrc}
      visibleByDefault={visibleByDefault}
    />
  )
);

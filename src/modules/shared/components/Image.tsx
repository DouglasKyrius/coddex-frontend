import { memo, ReactElement } from 'react';
import { Effect, LazyLoadImage } from 'react-lazy-load-image-component';

type ImageProps = {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  effect?: Effect | undefined;
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
    effect,
    placeholder,
    placeholderSrc,
    visibleByDefault,
  }: ImageProps) => (
    <LazyLoadImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      effect={effect}
      placeholder={placeholder}
      placeholderSrc={placeholderSrc}
      visibleByDefault={visibleByDefault}
    />
  )
);

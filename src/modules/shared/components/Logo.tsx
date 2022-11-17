import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Image } from './Image';

type LogoProps = {
  isLink?: boolean;
  width?: number;
  height?: number;
};

export const Logo = memo(({ isLink, width = 105, height = 25 }: LogoProps) => {
  if (isLink)
    return (
      <Link to="/">
        <Image
          width={width}
          height={height}
          alt="logo coddex"
          src="/assets/logo.svg"
          visibleByDefault={false}
          placeholderSrc="https://zone-assets-api.vercel.app/assets/img_placeholder.svg"
        />
      </Link>
    );

  return (
    <Image
      width={width}
      height={height}
      alt="logo coddex"
      src="/assets/logo.svg"
      visibleByDefault={false}
      placeholderSrc="https://zone-assets-api.vercel.app/assets/img_placeholder.svg"
    />
  );
});

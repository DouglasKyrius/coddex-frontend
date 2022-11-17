import { ReactNode } from 'react';
import {
  ButtonText,
  CancelButton,
  DefaultButton,
  DestructiveButton,
} from './Button.styles';

export const Button = ({
  type,
  isCancel,
  isDestructive,
  isLoading,
  children,
  onClickHandler,
}: ButtonProps) => {
  if (isCancel) {
    return (
      <CancelButton type={type} onClick={onClickHandler}>
        <ButtonText>{children}</ButtonText>
      </CancelButton>
    );
  }

  if (isDestructive) {
    return (
      <DestructiveButton
        type={type}
        onClick={onClickHandler}
        disabled={isLoading}
      >
        {isLoading && <Loading />}
        <ButtonText>{children}</ButtonText>
      </DestructiveButton>
    );
  }

  return (
    <DefaultButton type={type} onClick={onClickHandler} disabled={isLoading}>
      {isLoading && <Loading />}
      <ButtonText>{children}</ButtonText>
    </DefaultButton>
  );
};

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset' | undefined;
  isCancel?: boolean;
  isLoading?: boolean;
  children?: ReactNode;
  isDestructive?: boolean;
  onClickHandler?: () => void;
};

Button.defaultProps = {
  type: 'button',
  isCancel: false,
  isDestructive: false,
  isLoading: false,
  children: undefined,
  onClickHandler: undefined,
};

const Loading = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    version="1.1"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
  >
    <path
      fill="currentColor"
      d="M73 50c0-12.7-10.3-23-23-23S27 37.3 27 50m3.9 0c0-10.5 8.5-19.1 19.1-19.1S69.1 39.5 69.1 50"
    >
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        dur="1s"
        from="0 50 50"
        repeatCount="indefinite"
        to="360 50 50"
        type="rotate"
      />
    </path>
  </svg>
);

import { createPortal } from 'react-dom';
import tw, { styled } from 'twin.macro';
import { Logo } from './Logo';
import ProgressBar from './ProgressBar';

export const RootStyle = styled.div(() => [
  tw`
    z-50
    fixed
    flex
    w-full
    h-full
    items-center
    justify-center
    backdrop-blur-md
    bg-white/90
  `,
]);

export const LoadingScreen = () =>
  createPortal(
    <>
      <ProgressBar />
      <RootStyle>
        <div className="animate-pulse">
          <Logo width={200} />
        </div>
      </RootStyle>
    </>,
    document.body
  );

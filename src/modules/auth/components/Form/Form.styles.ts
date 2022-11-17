import tw, { styled } from 'twin.macro';

type InputProps = {
  hasError?: boolean;
};

export const Input = styled.input(({ hasError }: InputProps) => [
  tw`
    block
    py-2.5
    px-0
    w-full
    text-sm
    text-gray-900
    bg-transparent
    border-0
    border-b-2
    border-gray-300
    appearance-none
    focus:(
      outline-none
      ring-0
      border-zinc-600
    )
  `,
  hasError && tw`border-red-600`,
]);

export const Label = tw.label`
  absolute
  text-sm
  text-gray-500
  duration-300
  transform
  -translate-y-6
  scale-75
  top-3
  -z-10
  origin-[0]
  peer-focus:(
    left-0
    font-medium
    text-zinc-600
    scale-75
    -translate-y-6
  )
  peer-placeholder-shown:(
    scale-100
    translate-y-0
  )
`;

export const AuthWrapper = tw.div`
  [font-family: 'Manrope', sans-serif]
  select-none
  h-full
  bg-white
  backdrop-blur-3xl
  pt-12
  px-10
  md:(
    p-20
    h-auto
    rounded
    w-[36rem]
    bg-white/95
    [filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))]
  )
`;

export const HeaderTitle = tw.p`
  font-extrabold
  text-4xl
`;

export const SubTitle = tw.p`
  text-xl
`;

export const ForgotPassword = tw.p`
  underline
  text-sm
  text-right
  mb-6
`;

export const Divider = styled.div`
  ::before,
  ::after {
    ${tw`
      relative
      w-full
      border-t
      border-t-zinc-500
      mx-2
      [content: '']
      [transform: translateY(50%)]
    `}
  }
  ${tw`
    text-sm
    mt-8
    flex
    shrink-0
    whitespace-nowrap
    text-center
    border-0
    font-medium
    text-zinc-700
  `}
`;

export const SocialWrapper = tw.div`
  hidden
  md:(
    flex
    gap-x-4
    items-center
    justify-center
    p-4
  )
`;

export const SocialLogin = tw.button`
  flex
  items-center
  justify-center
  py-2
  px-4
  gap-x-2
  border
  border-zinc-400
  rounded-lg
  focus:(
    ring-2
    outline-none
    ring-red-300
  )
`;

export const MobileSocialWrapper = tw.div`
  flex
  gap-x-10
  items-center
  justify-center
  p-4
  md:hidden
`;

export const BottomText = styled.p`
  ${tw`
    text-center
    text-sm
    my-6
    text-zinc-700
  `};
  a {
    ${tw`
      underline
      font-medium
      text-zinc-800
    `};
  }
`;

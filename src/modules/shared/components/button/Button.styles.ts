import tw from 'twin.macro';

export const DefaultButton = tw.button`
  flex
  items-center
  justify-center
  text-white
  bg-zinc-900
  transition
  font-medium
  rounded-lg
  text-sm
  w-full
  px-5
  py-3
  cursor-pointer
  hover:bg-zinc-800
  focus:(
    ring-2
    outline-none
    ring-red-300
  )
  disabled:(
    py-0.5
    bg-zinc-200
    text-gray-700
    cursor-not-allowed
  )
`;

export const CancelButton = tw(DefaultButton)`
  bg-gray-100
  hover:bg-gray-200
`;

export const DestructiveButton = tw(DefaultButton)`
  bg-red-600
  text-white
  hover:bg-red-700
  disabled:(
    bg-red-900
    text-gray-300
  )
`;

export const ButtonText = tw.span`
  text-center
  font-semibold
`;

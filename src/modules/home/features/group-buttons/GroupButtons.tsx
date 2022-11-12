import { memo, useCallback, useState } from 'react';
import { Button } from '@/modules/shared/components/button';

export const GroupButtons = () => {
  const [itemValues, setItemValues] = useState([
    { value: 0, id: '1' },
    { value: 0, id: '2' },
    { value: 0, id: '3' },
  ]);

  const handleCount = useCallback((add: number, id: string) => {
    setItemValues((prevItemValues) =>
      prevItemValues.map((item) => {
        if (item.id === id) return { ...item, value: item.value + add };
        return item;
      })
    );
  }, []);

  return (
    <div className="flex flex-wrap w-full justify-center items-center gap-6">
      {itemValues.map((item) => (
        <ItemButton
          key={item.id}
          id={item.id}
          value={item.value}
          handleCount={handleCount}
        />
      ))}
    </div>
  );
};

const ItemButton = memo(({ value, id, handleCount }: ItemProps) => (
  <Button onClickHandler={() => handleCount(1, id)}>{value}</Button>
));

type ItemProps = {
  id: string;
  value: number;
  handleCount: (add: number, id: string) => void;
};

ItemButton.displayName = 'ItemButton';

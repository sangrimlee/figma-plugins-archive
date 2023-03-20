import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { useId } from 'react';

interface RadioGroupRootProps {
  children: React.ReactNode;
  name: string;
  value: string;
  onValueChange: (value: string) => void;
}

export const Root = ({ children, value, name, onValueChange }: RadioGroupRootProps) => {
  return (
    <RadioGroupPrimitive.Root className="flex" name={name} value={value} onValueChange={onValueChange}>
      {children}
    </RadioGroupPrimitive.Root>
  );
};

interface RadioGroupItemProps {
  value: string;
  label: string;
}

export const Item = ({ value, label }: RadioGroupItemProps) => {
  const id = useId();

  return (
    <div className="flex flex-1 items-center gap-x-2">
      <RadioGroupPrimitive.Item
        value={value}
        id={id}
        className="border-figma-border data-[state=checked]:border-figma-bg-brand flex h-5 w-5 items-center justify-center rounded-full border"
      >
        <RadioGroupPrimitive.Indicator className="bg-figma-bg-brand block h-2.5 w-2.5 rounded-full" />
      </RadioGroupPrimitive.Item>
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
};

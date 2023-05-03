import { CheckIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import * as SelectPrimitive from '@radix-ui/react-select';

interface SelectRootProps {
  name: string;
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

export const Root = ({ children, name, value, onValueChange }: SelectRootProps) => (
  <SelectPrimitive.Root name={name} value={value} onValueChange={onValueChange}>
    <SelectPrimitive.Trigger className="border-figma-border focus:outline-non focus:fill-figma-border-selected flex w-full items-center justify-between rounded-md border p-3 text-sm">
      <SelectPrimitive.Value />
      <SelectPrimitive.Icon>
        <ChevronDownIcon className="h-4 w-4" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className="bg-figma-bg border-figma-border w-full overflow-hidden rounded-md border shadow-xl"
        position="popper"
        side="bottom"
        sideOffset={4}
        style={{ width: 'var(--radix-select-trigger-width)' }}
      >
        <SelectPrimitive.Viewport className="flex flex-col gap-y-1 p-1.5">{children}</SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  </SelectPrimitive.Root>
);

interface SelectItemProps {
  children: React.ReactNode;
  value: string;
}

export const Item = ({ children, value }: SelectItemProps) => {
  return (
    <SelectPrimitive.Item
      value={value}
      className="data-[state=checked]:bg-figma-bg-selected hover:bg-figma-bg-selected flex cursor-pointer items-center justify-between rounded-md p-2.5 text-sm outline-none"
    >
      <SelectPrimitive.ItemText asChild>
        <span className="leading-none">{children}</span>
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="inline-flex items-center justify-center">
        <CheckIcon className="text-figma-text-brand h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};

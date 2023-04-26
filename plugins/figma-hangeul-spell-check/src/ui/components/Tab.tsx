// import { BoxIcon, LayersIcon } from '@radix-ui/react-icons';
import * as Tabs from '@radix-ui/react-tabs';
import clsx from 'clsx';

export const Root = ({ className, ...props }: Tabs.TabsProps) => (
  <Tabs.Root className={clsx('flex flex-1 flex-col', className)} {...props} />
);

export const List = ({ className, ...props }: Tabs.TabsListProps) => {
  return (
    <Tabs.List
      className={clsx('border-figma-border flex h-12 shrink-0 items-center gap-x-1 border-b px-2', className)}
      {...props}
    />
  );
};

export const Trigger = ({ className, ...props }: Tabs.TabsTriggerProps) => {
  return (
    <Tabs.Trigger
      className={clsx(
        'flex items-center rounded py-1.5 px-2 text-sm font-medium transition-colors',
        'text-figma-text-secondary',
        'data-[state=active]:text-figma-text-component data-[state=active]:bg-figma-bg-component-tertiary',
        className,
      )}
      {...props}
    />
  );
};

export const Content = ({ className, ...props }: Tabs.TabsContentProps) => {
  return <Tabs.Content className={className} {...props} />;
};

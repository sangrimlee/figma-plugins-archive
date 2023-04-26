import { FrameIcon, GroupIcon, TextIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';

const nodes = {
  TEXT: {
    Icon: TextIcon,
    label: 'Text',
  },
  FRAME: {
    Icon: FrameIcon,
    label: 'Frame',
  },
  GROUP: {
    Icon: GroupIcon,
    label: 'Group',
  },
};

interface NodeBadgeProps {
  type: keyof typeof nodes;
  className?: string;
}

export const NodeBadge = ({ type, className }: NodeBadgeProps) => {
  const { Icon, label } = nodes[type];
  return (
    <div
      className={clsx(
        'inline-flex items-center rounded px-1.5 py-0.5',
        'text-figma-text-component bg-figma-bg-component-tertiary',
        'mr-1 first:ml-1',
        className,
      )}
    >
      <Icon className="mr-1 h-3.5 w-3.5" aria-label={`${label} Icon`} />
      <span className="text-sm">{label}</span>
    </div>
  );
};

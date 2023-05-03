import { FrameIcon, GroupIcon, TextIcon } from '@radix-ui/react-icons';

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
}

export const NodeBadge = ({ type }: NodeBadgeProps) => {
  const { Icon, label } = nodes[type];
  return (
    <div className="text-figma-text-component bg-figma-bg-component-tertiary mr-1 inline-flex items-center rounded px-1.5 py-0.5 first:ml-1">
      <Icon className="mr-1 h-3.5 w-3.5" aria-label={`${label} Icon`} />
      <span className="text-sm">{label}</span>
    </div>
  );
};

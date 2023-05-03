import { InfoCircledIcon, TextIcon } from '@radix-ui/react-icons';

export const Tip = () => {
  return (
    <div className="bg-figma-bg-secondary border-figma-border text-figma-text-secondary fixed right-3 bottom-3 w-72 rounded-lg border p-2.5 font-medium">
      <div className="text-figma-text-brand mb-1.5 flex items-center text-xs">
        <InfoCircledIcon className="mr-1 h-3 w-3" />팁
      </div>
      <p className="text-xs leading-relaxed">
        상단 툴바의{' '}
        <span className="border-figma-border mr-0.5 rounded border-2 py-px px-px">
          <TextIcon className="mb-1 inline-block h-3.5 w-3.5" />
        </span>
        를 클릭하거나, 키보드의 <kbd className="border-figma-border mr-0.5 rounded border-2 py-px px-1">T</kbd>
        버튼을 사용하여 텍스트 레이어를 생성할 수 있습니다.
      </p>
    </div>
  );
};

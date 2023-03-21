import { PluginMessageType } from '@/shared/enum';

import * as RadioGroup from '../components/RadioGroup';
import { useAppState } from '../contexts/AppState';

const GENREATE_UNITS = [
  { value: 'word', label: '단어' },
  { value: 'sentence', label: '문장' },
  { value: 'paragraph', label: '문단' },
];

const GENERATE_COUNTS = [
  { value: '1', label: '1개' },
  { value: '2', label: '2개' },
  { value: '3', label: '3개' },
  { value: '4', label: '4개' },
  { value: '5', label: '5개' },
];

const Form = () => {
  const { formState, setFormState } = useAppState();

  const generate = () => {
    parent.postMessage(
      {
        pluginMessage: { type: PluginMessageType.CHANGE_TEXT_NODE_CONTENT, formState },
      },
      'https://www.figma.com',
    );
  };

  return (
    <div className="flex flex-col gap-y-5">
      <div>
        <h2 className="mb-2 font-semibold">생성 단위</h2>
        <RadioGroup.Root name="generate-unit" value={formState.unit} onValueChange={(v) => setFormState('unit', v)}>
          {GENREATE_UNITS.map(({ value, label }) => (
            <RadioGroup.Item value={value} label={label} />
          ))}
        </RadioGroup.Root>
      </div>
      <div>
        <h2 className="mb-2 font-semibold">생성 개수</h2>
        <RadioGroup.Root name="generate-count" value={formState.count} onValueChange={(v) => setFormState('count', v)}>
          {GENERATE_COUNTS.map(({ value, label }) => (
            <RadioGroup.Item value={value} label={label} />
          ))}
        </RadioGroup.Root>
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="button"
          className="bg-figma-bg-brand text-figma-text-onbrand hover:bg-figma-bg-brand-hover rounded-md px-3 py-2 font-medium leading-none transition-colors"
          onClick={generate}
        >
          생성
        </button>
      </div>
    </div>
  );
};

export default Form;

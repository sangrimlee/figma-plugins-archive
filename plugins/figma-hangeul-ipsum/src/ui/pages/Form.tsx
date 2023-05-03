import { PluginMessageType } from '@/shared/enum';

import * as RadioGroup from '../components/RadioGroup';
import * as Select from '../components/Select';
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

const GENERATE_SOURCES = [
  { value: 'countingStars', label: '별 헤는 밤' },
  { value: 'mountain', label: '청산도' },
  { value: 'shower', label: '소나기' },
  { value: 'star', label: '별' },
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
    <div className="flex h-full w-full flex-col justify-between py-4 text-sm">
      <div className="space-y-7">
        <div>
          <h2 className="mb-1.5 font-semibold">텍스트 소스</h2>
          <Select.Root name="generate-source" value={formState.source} onValueChange={(v) => setFormState('source', v)}>
            {GENERATE_SOURCES.map(({ value, label }) => (
              <Select.Item value={value}>{label}</Select.Item>
            ))}
          </Select.Root>
        </div>
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
          <RadioGroup.Root
            name="generate-count"
            value={formState.count}
            onValueChange={(v) => setFormState('count', v)}
          >
            {GENERATE_COUNTS.map(({ value, label }) => (
              <RadioGroup.Item value={value} label={label} />
            ))}
          </RadioGroup.Root>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="bg-figma-bg-brand text-figma-text-onbrand hover:bg-figma-bg-brand-hover w-full rounded-md py-3 font-semibold leading-none transition-colors"
          onClick={generate}
        >
          생성
        </button>
      </div>
    </div>
  );
};

export default Form;

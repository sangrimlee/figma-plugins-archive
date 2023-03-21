import { useState } from 'react';
import { PluginMessageType } from '../../shared/types';

import * as RadioGroup from '../components/RadioGroup';

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
  const [generateUnit, setGenerateUnit] = useState('word');
  const [generateCount, setGenerateCount] = useState('1');

  const generate = () => {
    parent.postMessage(
      {
        pluginMessage: { type: PluginMessageType.CHANGE_TEXT_NODE_CONTENT, content: '생성된 컨텐츠' },
      },
      'https://www.figma.com',
    );
  };

  return (
    <div className="flex flex-col gap-y-5">
      <div>
        <h2 className="mb-2 font-semibold">생성 단위</h2>
        <RadioGroup.Root name="generate-unit" value={generateUnit} onValueChange={setGenerateUnit}>
          {GENREATE_UNITS.map(({ value, label }) => (
            <RadioGroup.Item value={value} label={label} />
          ))}
        </RadioGroup.Root>
      </div>
      <div>
        <h2 className="mb-2 font-semibold">생성 개수</h2>
        <RadioGroup.Root name="generate-count" value={generateCount} onValueChange={setGenerateCount}>
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

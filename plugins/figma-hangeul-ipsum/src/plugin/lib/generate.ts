import type { GenerateFormState } from '@/shared/types';

export function generateContent({ unit, count }: GenerateFormState) {
  const countNum = parseInt(count, 10);
  return unit.repeat(countNum);
}

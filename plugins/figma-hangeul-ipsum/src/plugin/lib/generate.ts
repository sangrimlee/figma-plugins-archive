import type { GenerateFormState } from '@/shared/types';

import * as data from './data';

function randomIndex(length: number) {
  return Math.floor(Math.random() * length);
}

function randomItem<T>(arr: Array<T>) {
  return arr[randomIndex(arr.length)];
}

function createContent(count: number, cb: () => string, joined: string) {
  return new Array(count).fill(undefined).map(cb).join(joined);
}

function sliceWords(line: string, count: number) {
  return line
    .split(/[^가-힣]?\s/)
    .slice(0, count)
    .join(' ');
}

function generateWord(source: string, count: number) {
  const lines = source.split(/\n/);
  return sliceWords(randomItem(lines), count);
}

function generateSentence(source: string, count: number) {
  const lines = source.split(/\n/);
  return createContent(count, () => randomItem(lines), '\n');
}

function randomParagraph(lines: string[]) {
  let generated = '';
  while (generated.length < 256) {
    generated += `${randomItem(lines)} `;
  }
  return generated.trim();
}

function generatePragraph(source: string, count: number) {
  const lines = source.split(/\n/);
  return createContent(count, () => randomParagraph(lines), '\n');
}

export function generateContent({ unit, count: countStr, source }: GenerateFormState) {
  const count = parseInt(countStr, 10);
  if (!Object.getOwnPropertyNames(data).includes(source) || isNaN(count)) {
    throw new Error();
  }

  const dataSource = data[source as keyof typeof data];
  if (unit === 'word') {
    return generateWord(dataSource, count);
  }
  if (unit === 'sentence') {
    return generateSentence(dataSource, count);
  }

  return generatePragraph(dataSource, count);
}

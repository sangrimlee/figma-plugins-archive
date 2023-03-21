import type { StorageKey } from '../../shared/enum';

export async function getClientStorage<T>(key: StorageKey, defaultValue: T) {
  const value = (await figma.clientStorage.getAsync(key)) as T | undefined;
  if (value === undefined) {
    return defaultValue;
  }
  return value;
}

export function setClientStorage<T>(key: StorageKey, value: T) {
  return figma.clientStorage.setAsync(key, value);
}

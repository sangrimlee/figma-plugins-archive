import { GenerateFormState } from '../../shared/types';

export async function getFormStateFromStroage() {
  const value = await figma.clientStorage.getAsync('FORM_STATE');
  if (!value) {
    return {
      unit: 'word',
      count: '1',
    };
  }
  return value as GenerateFormState;
}

export function setFormStateStorage(value: GenerateFormState) {
  return figma.clientStorage.setAsync('FORM_STATE', value);
}

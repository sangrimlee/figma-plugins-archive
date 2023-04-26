import { useContent } from '../context/ContentContext';
import { useSpellCheck } from '../context/SpellCheckContext';
import { spellCheck } from '../lib/spell-check';
import { useMutation } from './useMutation';

export const useSpellCheckMutation = () => {
  const { setContent } = useContent();
  const { characters, setSpellCheckResults } = useSpellCheck();
  const { mutate, isLoading } = useMutation(spellCheck);

  const mutateSpellCheck = async () => {
    await mutate(characters, {
      onSuccess: (result) => {
        setSpellCheckResults(result);
        setContent('result');
      },
      onError: () => {
        // eslint-disable-next-line no-alert
        alert('맞춤법 검사에 실패하였습니다. 잠시 후 다시 시도해주세요.');
      },
    });
  };

  return {
    isLoading,
    mutateSpellCheck,
  };
};

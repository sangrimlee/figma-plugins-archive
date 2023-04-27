import { useContent } from '../context/ContentContext';
import { useSpellCheck } from '../context/SpellCheckContext';
import { useToast } from '../context/ToastContext';
import { spellCheck } from '../lib/spell-check';
import { useMutation } from './useMutation';

export const useSpellCheckMutation = () => {
  const toast = useToast();
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
        toast({
          type: 'danger',
          title: '네트워크 요청에 실패하였습니다.\n잠시후 다시 시도해주세요.',
        });
      },
    });
  };

  return {
    isLoading,
    mutateSpellCheck,
  };
};

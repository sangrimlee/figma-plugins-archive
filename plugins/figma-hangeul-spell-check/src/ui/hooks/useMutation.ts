import { useCallback, useState } from 'react';

interface MutateOptions<TData> {
  onSuccess: (data: TData) => void;
  onError: (error: unknown) => void;
}

export function useMutation<TVariables, TData>(mutationFn: (variables: TVariables) => Promise<TData>) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const mutate = useCallback(
    async (variables: TVariables, { onSuccess, onError }: MutateOptions<TData>) => {
      setIsLoading(true);
      try {
        const data = await mutationFn(variables);
        onSuccess(data);
      } catch (error) {
        onError(error);
      }
      setIsLoading(false);
    },
    [mutationFn],
  );

  return { isLoading, mutate };
}

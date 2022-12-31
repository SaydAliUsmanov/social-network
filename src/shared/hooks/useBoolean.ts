import { useCallback, useMemo, useState } from 'react';

export const useBoolean = (init = false) => {
  const [state, setState] = useState(init);

  const setTrue = useCallback(() => {
    setState(true);
  }, []);
  const setFalse = useCallback(() => {
    setState(false);
  }, []);
  const toggle = useCallback(() => {
    setState((bool) => !bool);
  }, []);

  return useMemo(
    () => ({ state, setState, setTrue, setFalse, toggle } as const),
    [setFalse, setTrue, state, toggle],
  );
};

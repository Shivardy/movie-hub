import { useCallback, useState } from 'react';
import { ActionTypes, appContext } from '../AppContext';

type AsyncState<R> =
  | { state: 'LOADING' }
  | { state: 'SUCCESS'; data: R }
  | { state: 'ERROR'; error: string };

type Unwrap<T> = T extends Promise<infer U> ? U : T;

export default function useAsync<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  type?: ActionTypes
): [AsyncState<Unwrap<ReturnType<T>>>, (...args: Parameters<T>) => void] {
  const [state, setState] = useState<AsyncState<Unwrap<ReturnType<T>>>>({
    state: 'LOADING',
  });
  const { dispatch } = appContext();

  const callback = useCallback(
    async (...args: Parameters<T>) => {
      try {
        setState({ state: 'LOADING' });
        const data = await fn(...args);
        setState({ state: 'SUCCESS', data });
        if (type) {
          dispatch({ type, payload: data });
        }
      } catch (e) {
        console.error(e);
        setState({ state: 'ERROR', error: 'Network Error' });
      }
    },
    [dispatch, fn, type]
  );

  return [state, callback];
}

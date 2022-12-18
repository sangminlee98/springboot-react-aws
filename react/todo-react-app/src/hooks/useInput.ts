import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from "react";

type ReturnType<T> = [
  T,
  (e: ChangeEvent<HTMLInputElement>) => void,
  Dispatch<SetStateAction<T>>
];

export const useInput = <T>(initialData: T): ReturnType<T> => {
  const [value, setValue] = useState(initialData);
  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value as unknown as T);
  }, []);
  return [value, changeHandler, setValue];
};

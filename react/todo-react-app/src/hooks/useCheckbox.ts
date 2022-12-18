import { Dispatch, SetStateAction, useCallback, useState } from "react";

type ReturnType = [boolean, () => void, Dispatch<SetStateAction<boolean>>];

export const useCheckbox = (initialData: boolean): ReturnType => {
  const [value, setValue] = useState(initialData);
  const changeHandler = useCallback(() => {
    setValue((prev) => !prev);
  }, []);
  return [value, changeHandler, setValue];
};

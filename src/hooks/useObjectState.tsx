import { useState } from "react";

// Define the generic type T that extends object
export default function useObjectState<T extends object>(initialValue: T) {
  const [value, updateValue] = useState<T>(initialValue);

  function updateObject(newValue: Partial<T> | ((prevState: T) => Partial<T>)) {
    updateValue((prevValue) => {
      if (newValue instanceof Function) {
        return { ...prevValue, ...newValue(prevValue) };
      }
      return { ...prevValue, ...newValue };
    });
  }

  return [value, updateObject] as const;
}

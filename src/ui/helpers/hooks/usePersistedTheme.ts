import { useState, useEffect, Dispatch, SetStateAction } from "react";

type Response<Type> = [Type, Dispatch<SetStateAction<Type>>];

function usePersistedTheme<Type>(
  key: string,
  themeDefault: Type
): Response<Type> {
  const [theme, setTheme] = useState(() => {
    const currentTheme = localStorage.getItem(key);

    return currentTheme ? JSON.parse(currentTheme) : themeDefault;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(theme));
  }, [key, theme]);

  return [theme, setTheme];
}

export default usePersistedTheme;

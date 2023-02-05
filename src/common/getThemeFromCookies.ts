export const getThemeFromCookies = (req) => {
  const initialThemeMode = req.cookies.initialThemeMode ?? 'light';

  return {
    props: {
      initialThemeMode,
    },
  };
};

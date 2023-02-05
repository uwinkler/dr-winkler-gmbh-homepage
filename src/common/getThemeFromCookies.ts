export const getThemeFromCookies = (req) => {
  const initialThemeMode = req.cookies.initialThemeMode ?? 'light';
  console.log('initialThemeMode', initialThemeMode);
  return {
    props: {
      initialThemeMode,
    },
  };
};

import React from 'react';

export function useTelephone() {
  const [telephone, setTelephone] = React.useState('....');
  React.useEffect(() => {
    setTimeout(() => setTelephone('+49 351-41 89 09 68'), 100);
  }, []);
  return telephone;
}

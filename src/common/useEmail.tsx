import React from 'react';

// eslint-disable-next-line no-useless-concat
export function useEmail(initialEmail = 'hello' + '@' + 'dr.winkler.gmbh') {
  const [email, setEmail] = React.useState('....');
  React.useEffect(() => {
    setTimeout(() => setEmail(initialEmail), 100);
  }, [initialEmail]);
  return email;
}

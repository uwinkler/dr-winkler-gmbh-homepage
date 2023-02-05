import React from 'react';

// eslint-disable-next-line no-useless-concat
export function useEmail(initialEmail = 'hello' + '@' + 'dr-winkler-gmbh.de') {
  const dots = range(initialEmail.length)
    .map((_, i) => '.')
    .join('');

  const [email, setEmail] = React.useState(dots);
  React.useEffect(() => {
    setTimeout(() => setEmail(initialEmail), 1);
  }, [initialEmail]);

  return email;
}

function range(length) {
  return Array.from({ length }, (_, i) => i);
}

import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

function useEmail(initialEmail: string) {
  const [email, setEmail] = React.useState('....');
  React.useEffect(() => {
    setTimeout(() => setEmail(initialEmail), 100);
  }, []);
  return email;
}

const ContactCard = () => {
  const theme = useTheme();
  const email = useEmail('datenschutz@dr.winkler.gmbh');

  return (
    <Box
      component={Card}
      boxShadow={0}
      border={{
        xs: 0,
        md: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Box
        paddingX={{ xs: 0, md: 3 }}
        paddingTop={3}
        paddingBottom={{ xs: 0, md: 3 }}
      >
        <Typography
          sx={{
            fontWeight: '700',
          }}
          gutterBottom
        >
          Fragen an den Datenschutzbeauftragten
        </Typography>
        <Typography
          variant={'body2'}
          color={'textSecondary'}
          sx={{
            marginBottom: 2,
          }}
        >
          Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine
          E-Mail oder wenden Sie sich direkt an unseren Datenschutzbeauftragten:
        </Typography>
        <Typography variant={'subtitle2'}>
          {email}
          <br />
          Datenschutzbeauftragter
          <br />
          Dr. Winkler GmbH
          <br />
          Nordstr. 10
          <br />
          01996 Hosena/Senftenberg
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactCard;

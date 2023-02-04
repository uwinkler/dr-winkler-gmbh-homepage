import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { WithChildren } from './WithChildren';

export function Heading<C>(props: WithChildren<C>) {
  const { children, sx } = props;

  return (
    <Box sx={{ align: 'center', ...sx }}>
      <Typography variant="h3">{children}</Typography>
    </Box>
  );
}

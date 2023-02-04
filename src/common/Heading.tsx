import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { WithChildren } from './WithChildren';

export function Heading<C>(props: WithChildren<C>) {
  const { children, sx } = props;

  return (
    <Box
      component={Typography}
      fontWeight={700}
      variant={'h3'}
      gutterBottom
      align={'center'}
      {...sx}
    >
      {children}
    </Box>
  );
}

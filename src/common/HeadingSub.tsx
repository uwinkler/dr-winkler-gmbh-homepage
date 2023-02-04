import Typography from '@mui/material/Typography';
import { WithChildren } from './WithChildren';

export function HeadingSub<C>(props: WithChildren<C>) {
  const { children, sx } = props;

  return (
    <Typography
      sx={{
        textTransform: 'uppercase',
        fontWeight: 'medium',
        ...sx,
      }}
      gutterBottom
      color={'secondary'}
    >
      {children}
    </Typography>
  );
}

import { Box, useTheme } from '@mui/material';
import Container from './Container';
import { WithChildren } from './WithChildren';

type BlockProps<C> = {
  background?: 'alternate' | 'primary';
} & WithChildren<C>;

export function Block<C>(props: BlockProps<C>) {
  const theme = useTheme();
  const sx = props.sx || {};
  return (
    <Box
      bgcolor={
        props.background === 'alternate'
          ? theme.palette.alternate.main
          : undefined
      }
      position={'relative'}
      width={'100%'}
      sx={sx}
    >
      <Container position="relative" zIndex={2}>
        {props.children}
      </Container>

      {props.background === 'alternate' && (
        <Box
          component={'svg'}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1921 273"
          sx={{
            position: 'absolute',
            width: '100%',
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 1,
            height: '35%',
          }}
        >
          <polygon
            fill={theme.palette.background.paper}
            points="0,273 1921,273 1921,0 "
          />
        </Box>
      )}
    </Box>
  );
}

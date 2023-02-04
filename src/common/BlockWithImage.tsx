import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from 'src/common/Container';
import { WithChildren } from 'src/common/WithChildren';

export function BlockWithImage<T>(
  props: WithChildren<T> & {
    Image: React.ReactNode;
  },
) {
  const { Image } = props;
  return (
    <Container>
      <Grid container spacing={6}>
        <Grid item container justifyContent={'center'} xs={12} md={6}>
          <Box
            height={'100%'}
            width={'100%'}
            maxWidth={{ xs: 500, md: '100%' }}
          >
            {Image}
          </Box>
        </Grid>
        <Grid
          item
          container
          alignItems={'center'}
          justifyContent={'center'}
          xs={12}
          md={6}
        >
          <Box>{props.children}</Box>
        </Grid>
      </Grid>
    </Container>
  );
}

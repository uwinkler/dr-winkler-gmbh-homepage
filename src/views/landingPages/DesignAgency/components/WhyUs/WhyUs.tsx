import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TeamWorkingIllustration from 'src/svg/illustrations/TeamWorking';

const WhyUs = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Why work with us
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
          data-aos={'fade-up'}
        >
          We can support you on each
          <br />
          step of the product live cycle
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
          data-aos={'fade-up'}
        >
          With our network of experts in both design & development,
          <br />
          we help you and your team go through the complete process.
          <br />
          From your new app idea, to design, development, launch and scale!
        </Typography>
        {/* <Box
          marginTop={3}
          display={'flex'}
          justifyContent={'center'}
          data-aos={'fade-up'}
        >
          <Button variant={'contained'} color={'primary'} size={'large'}>
            Contact us
          </Button>
        </Box> */}
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box height={'100%'} width={'100%'} maxWidth={600} data-aos={'fade-up'}>
          <TeamWorkingIllustration height={'100%'} width={'100%'} />
        </Box>
      </Box>
    </Box>
  );
};

export default WhyUs;

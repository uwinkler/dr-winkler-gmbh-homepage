import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import 'aos/dist/aos.css';
import 'react-image-lightbox/style.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Block } from 'src/common/Block';
import { getThemeFromCookies } from 'src/common/getThemeFromCookies';
import { useEmail } from 'src/common/useEmail';
import Main from 'src/layouts/Main';
import { TeamWork } from 'src/svg/illustrations/TeamWork';
import WithLayout from 'src/WithLayout';
import { BlockWithImage } from '../src/common/BlockWithImage';

export const getServerSideProps = async ({ req }) => {
  return getThemeFromCookies(req);
};

export default function App(props) {
  return (
    <WithLayout
      component={Jobs}
      layout={Main}
      initialThemeMode={props.initialThemeMode}
    />
  );
}

const Jobs = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const email = useEmail(['jobs', '@', 'dr-winkler-gmbh.de'].join(''));

  return (
    <>
      <Block background="alternate">
        <BlockWithImage Image={<TeamWork width={'100%'} height={'100%'} />}>
          <Typography
            variant="h3"
            component={'h3'}
            align={isMd ? 'left' : 'center'}
            sx={{ fontWeight: 700 }}
            gutterBottom
          >
            Work with us!
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="textSecondary"
            align={isMd ? 'left' : 'center'}
            gutterBottom
          >
            If you are looking for an exciting and challenging career in the IT
            industry, then working for our company could be a great opportunity
            for you.
          </Typography>

          <Button
            component="a"
            variant="contained"
            color="primary"
            sx={{ padding: 2, marginTop: 5 }}
            href={`mailto:${email}`}
          >
            <Typography variant="h5">{email}</Typography>
          </Button>
        </BlockWithImage>
      </Block>

      <Box>
        <Container>
          <Box marginBottom={4}>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
              }}
              gutterBottom
              color={'secondary'}
            >
              Job 1
            </Typography>
            <Typography variant={'h3'} gutterBottom>
              Student Developer (remote)
            </Typography>
            <Typography component={'div'} color={'textSecondary'}>
              <p>
                We are seeking a motivated and enthusiastic student developer to
                join our team and work on modern web technologies, specifically
                the "restate" framework for React. The ideal candidate should
                have a passion for coding and a strong desire to learn and grow
                as a developer.
              </p>
              <p>Responsibilities:</p>

              <ul>
                <li>
                  Work on the development and maintenance of the "restate"
                  framework
                </li>
                <li>
                  Write clear and concise documentation and demos to support the
                  framework
                </li>
                <li>
                  Collaborate with the team to create high-quality, innovative
                  software solutions.
                </li>
              </ul>

              <p>Requirements:</p>
              <ul>
                <li>
                  Currently enrolled in a relevant degree program such as
                  Computer Science, Software Engineering, or a related field
                </li>
                <li>
                  Familiarity with modern web technologies and development
                  practices
                </li>
                <li> Ability to work independently and as part of a team.</li>
              </ul>

              <p>Benefits:</p>
              <ul>
                <li>Hands-on experience working on a real-world project</li>
                <li>
                  Opportunity to contribute to and make an impact on an
                  open-source framework
                </li>
                <li>
                  Collaboration and learning opportunities with experienced
                  developers
                </li>
                <li>
                  Potential for future career growth and opportunities within
                  the company
                </li>
                <li>
                  Flexibility to work from home or another remote location
                </li>
                <li>Attractive salary package</li>
              </ul>

              <p>Technologies you will use and learn:</p>
              <ul>
                <li>React, Typescript, CSS, HTML, ...</li>
                <li>Material UI, ...</li>
                <li>vitepress, npm, git, ...</li>
                <li>GitHub, NextJS</li>
              </ul>
              <p>
                This is a unique and exciting opportunity for a student to gain
                real-world experience, visibility and boost their career by
                working on an open-source framework. No need to submit a CV,
                just give us a call if you are interested!
              </p>
            </Typography>
          </Box>
        </Container>
      </Box>

      <Block background="alternate">
        <Container>
          <Box marginBottom={4}>
            <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
              }}
              gutterBottom
              color={'secondary'}
            >
              Job 2
            </Typography>
            <Box
              component={Typography}
              fontWeight={700}
              variant={'h3'}
              gutterBottom
            >
              Senior Java Fullstack Developer (remote)
            </Box>
            <Typography component={'div'} color={'textSecondary'}>
              <p>
                We are seeking a highly experienced and Java Developer to join
                our team. The successful candidate will be responsible for
                leading software development projects using Java and Spring
                Boot,
              </p>
              Responsibilities:
              <ul>
                <li>Work as an Java team lead for our customers</li>
                <li>
                  Designing and developing software systems using Java and
                  Spring as well as documenting and maintaining the IT
                  architecture of the system.
                </li>
              </ul>
              Requirements:
              <ul>
                <li>Experience with medium and large development projects</li>
                <li>Several years of Java development experience</li>
                <li>
                  Extensive project experience with GIT, Jenkins, Gradle
                  scripts, Maven scripts and other JAVA related tools
                </li>
              </ul>
              <p>
                We offer a dynamic work environment, opportunities for growth
                and development, and a competitive salary package. Like many
                companies post-COVID, we're building our Headquarters online.
                All our processes are remote- and online-first. We do have a
                physical office, in beautiful Dresden if you want to come in.
              </p>
              <p>
                If you meet the requirements and are passionate about software
                development, we encourage you to apply for this exciting
                opportunity.
              </p>
            </Typography>
          </Box>
        </Container>
      </Block>
    </>
  );
};

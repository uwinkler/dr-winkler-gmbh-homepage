import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import { LogoLarge } from 'src/svg/logos/LogoLarge';

type Callback = () => void;

interface TopbarProps {
  themeToggler: Callback;
  themeMode: 'light' | 'dark';
}

const Topbar = ({ themeMode, themeToggler }: TopbarProps) => {
  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      width={'100%'}
    >
      <Box display={'flex'} alignItems={'center'}>
        <Box
          display={'flex'}
          alignItems="baseline"
          component="a"
          href="/"
          title="logo"
        >
          <LogoLarge height={'100%'} width={'100%'} />
        </Box>
      </Box>
      <Box display="flex" alignItems={'center'} gap={3}>
        <Link
          underline="none"
          href="/"
          color="textPrimary"
          component={NextLink}
        >
          Consulting
        </Link>
        <Box>
          <Link
            href="/projects"
            underline="none"
            color="textPrimary"
            component={NextLink}
          >
            Projects
          </Link>
        </Box>

        <Link
          color="textPrimary"
          underline="none"
          component={NextLink}
          href="/research"
        >
          Research
        </Link>

        <Box>
          <Badge badgeContent={2} color={'primary'}>
            <Link
              sx={{ paddingRight: '10px' }}
              href="/jobs"
              underline="none"
              color="textPrimary"
              component={NextLink}
            >
              Jobs
            </Link>
          </Badge>
        </Box>

        <DarkLightToggleButton
          themeToggler={themeToggler}
          themeMode={themeMode}
        />
      </Box>
    </Box>
  );
};

function DarkLightToggleButton({
  themeToggler,
  themeMode,
}: {
  themeToggler: Callback;
  themeMode: string;
}) {
  return (
    <IconButton
      onClick={() => themeToggler()}
      aria-label="Dark mode toggler"
      // color={themeMode === 'light' ? 'primary' : 'secondary'}
    >
      {themeMode === 'light' ? (
        <svg
          width={24}
          height={24}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      ) : (
        <svg
          width={24}
          height={24}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      )}
    </IconButton>
  );
}

export default Topbar;

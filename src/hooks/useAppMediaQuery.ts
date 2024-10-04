import useTheme from '@mui/material/styles/useTheme';
import useMediaQuery from '@mui/material/useMediaQuery';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const useAppMediaQuery = (breakpoint: Breakpoint = 'lg') => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up(breakpoint));
  return matches;
};

export default useAppMediaQuery;

import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';
import LinkBehavior from './components/LinkBehavior';

const theme = createTheme({
  palette: {
    secondary: grey,
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});

export default theme;

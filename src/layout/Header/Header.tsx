import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { SIDEBAR_WIDTH } from '@/constants/theme.constants';
import { useLayoutContext } from '@/contexts/LayoutContext';
import useIsMobile from '@/hooks/useIsMobile';
import Breadcrumbs from './Breadcrumbs';

function Header() {
  const { sidebarOpen, setSidebarOpen } = useLayoutContext();

  const isMobile = useIsMobile();
  const handleDrawerToggle = (): void => {
    setSidebarOpen((current) => !current);
  };
  return (
    <AppBar
      elevation={0}
      position='fixed'
      sx={{
        width: `calc(100% - ${sidebarOpen && !isMobile ? SIDEBAR_WIDTH : 0}px)`,
        transition: (theme) =>
          theme.transitions.create(['width'], {
            easing: sidebarOpen ? theme.transitions.easing.easeOut : theme.transitions.easing.sharp,
            duration: sidebarOpen
              ? theme.transitions.duration.enteringScreen
              : theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='toggle drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{
            mr: 2,
            ...(sidebarOpen && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Breadcrumbs />
      </Toolbar>
    </AppBar>
  );
}
export default Header;

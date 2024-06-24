import { Fragment, useCallback, useEffect } from 'react';
import { ChevronLeft } from '@mui/icons-material';
import { Box, Divider, Drawer, IconButton, List, Toolbar } from '@mui/material';
import { SIDEBAR_WIDTH } from '@/constants/theme.constants';
import { useLayoutContext } from '@/contexts/LayoutContext';
import useIsMobile from '@/hooks/useIsMobile';
import { navigation } from '@/router';
import SidebarLink from './SidebarLink';
import SidebarSubmenu from './SidebarSubmenu';


function Sidebar() {
  const isMobile = useIsMobile();
  const { sidebarOpen, setSidebarOpen } = useLayoutContext();

  const handleClose = useCallback(() => {
    setSidebarOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setSidebarOpen(!isMobile);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'persistent'}
      open={sidebarOpen}
      onClose={handleClose}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: SIDEBAR_WIDTH,
        },
      }}
    >
      <Box>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <IconButton onClick={handleClose}>
            <ChevronLeft />
          </IconButton>
        </Toolbar>

        {navigation.map((section) => (
          <Fragment key={section.title}>
            <Divider />
            <List>
              {section.links.map((link) =>
                link.children ? (
                  <SidebarSubmenu key={link.title} text={link.title} icon={link.icon}>
                    <List>
                      {link.children.map((nestedLink) => (
                        <SidebarLink
                          key={nestedLink.path}
                          to={nestedLink.path}
                          text={nestedLink.title}
                          icon={nestedLink.icon}
                        />
                      ))}
                    </List>
                  </SidebarSubmenu>
                ) : (
                  <SidebarLink key={link.path} to={link.path} text={link.title} icon={link.icon} />
                )
              )}
            </List>
          </Fragment>
        ))}
      </Box>
    </Drawer>
  );
}

export default Sidebar;
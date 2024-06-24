import { useCallback } from 'react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useLayoutContext } from '@/contexts/LayoutContext';
import useIsMobile from '@/hooks/useIsMobile';

interface Props {
  text: string;
  to: string;
  icon: JSX.Element | undefined;
}

function SidebarLink({ text, icon, to }: Props) {
  const isMobile = useIsMobile();
  const { sidebarOpen, setSidebarOpen } = useLayoutContext();

  const handleCloseSidebar = useCallback(() => {
    if (!isMobile || !sidebarOpen) return;
    setSidebarOpen(false);
  }, [isMobile, sidebarOpen, setSidebarOpen]);

  return (
    <ListItem key={text} disablePadding>
      <ListItemButton href={to} onClick={handleCloseSidebar}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}

export default SidebarLink;

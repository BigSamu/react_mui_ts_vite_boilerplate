import { PropsWithChildren, useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

interface Props extends PropsWithChildren {
  text: string;
  icon: JSX.Element | undefined;
}

function SidebarSubmenu({ text, icon, children }: Props) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText primary={text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {children}
        </List>
      </Collapse>
    </>
  );
}
export default SidebarSubmenu;

// import React, { PropsWithChildren, useState } from 'react';
// import { ExpandLess, ExpandMore } from '@mui/icons-material';
// import {
//   List,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Menu,
//   MenuItem,
// } from '@mui/material';

// interface Props extends PropsWithChildren {
//   text: string;
//   icon: JSX.Element;
// }

// function SidebarSubmenu({ text, icon, children }: Props) {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const [open, setOpen] = useState(false);

//   const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
//     setAnchorEl(event.currentTarget);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//     setOpen(false);
//   };

//   return (
//     <>
//       <ListItemButton onClick={handleClick}>
//         <ListItemIcon>{icon}</ListItemIcon>
//         <ListItemText primary={text} />
//         {open ? <ExpandLess /> : <ExpandMore />}
//       </ListItemButton>
//       <Menu
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: 'top',
//           horizontal: 'right',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//       >
//         {children && (
//           <List component="div" disablePadding>
//             {React.Children.map(children, (child) => (
//               <MenuItem onClick={handleClose}>
//                 {child}
//               </MenuItem>
//             ))}
//           </List>
//         )}
//       </Menu>
//     </>
//   );
// }

// export default SidebarSubmenu;

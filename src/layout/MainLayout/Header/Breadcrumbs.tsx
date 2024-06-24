import { useLocation } from 'react-router-dom';
import { Link, Breadcrumbs as MuiBreadcrumbs, Typography } from '@mui/material';
import navigation from '@/router/navigation.router';
import { createNavigationLinkMap, isValidNavigationPath } from '@/utils/routes.utils';

const navigationMap = createNavigationLinkMap(navigation);

function Breadcrumbs() {
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <MuiBreadcrumbs aria-label='breadcrumb' sx={{ color: 'primary.contrastText' }}>
      <Link href='/' underline='hover' color='inherit'>
        Home
      </Link>
      {pathnames.map((_, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const link = navigationMap[to];

        // Check if link is defined
        if (!isValidNavigationPath(to, navigationMap)) {
          // navigate('/not-found', { replace: true });
          return null;
        }

        return last || !link.linkable ? (
          <Typography color='inherit' key={to}>
            {link.title}
          </Typography>
        ) : (
          <Link underline='hover' color='inherit' href={to} key={to}>
            {link.title}
          </Link>
        );
      })}
    </MuiBreadcrumbs>
  );
}
export default Breadcrumbs;

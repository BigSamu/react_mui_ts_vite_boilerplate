import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from '@/layout';
import { About, Home, NotFound, Section } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'section',
        children: [
          {
            path: 'subsection-one',
            element: <Section.SubsectionOne />,
          },
          {
            path: 'subsection-two',
            element: <Section.SubsectionTwo />,
          },
        ],
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'not-found',
        element: <NotFound />,
      },
      {
        path: '*',
        element: <Navigate to='/not-found' replace />,
      },
    ],
  },
]);

export default router;

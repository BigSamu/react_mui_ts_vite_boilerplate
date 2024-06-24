import { Navigate, createBrowserRouter } from 'react-router-dom';
import MainLayout from '@/layout/MainLayout/MainLayout';
import { About, Home, NotFound, Section } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
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

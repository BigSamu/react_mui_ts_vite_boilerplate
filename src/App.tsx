import { RouterProvider } from 'react-router-dom';
import { router } from '@/router';
import LayoutContextProvider from './contexts/LayoutContext';

function App() {
  return (
    <LayoutContextProvider>
      <RouterProvider router={router} />
    </LayoutContextProvider>
  );
}

export default App;

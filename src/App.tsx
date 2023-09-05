import { QueryClientProvider } from 'react-query';
import { Outlet } from '@tanstack/react-router';
import queryClient from './utils/query';

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  )
}

export default App

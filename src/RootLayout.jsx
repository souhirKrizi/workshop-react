import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from './Components/Navbar';

const RootLayout = () => {
  return (
    <>
      <NavigationBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default RootLayout;

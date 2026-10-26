import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header.tsx';
import { Footer } from '../components/Footer.tsx';

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-rose-500 selection:text-white antialiased">
      <Header />
      <main className="w-full flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

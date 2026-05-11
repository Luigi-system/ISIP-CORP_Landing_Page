import { Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VirtualAssistant from './components/VirtualAssistant';
import SolicitarAsesoria from './components/SolicitarAsesoria';

const Layout = () => {
  const { pathname } = useLocation();
  const [isAsesoriaOpen, setIsAsesoriaOpen] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Global listener for the advisory modal
  useEffect(() => {
    const handleOpenModal = () => setIsAsesoriaOpen(true);
    window.addEventListener('open-asesoria-modal', handleOpenModal);
    return () => window.removeEventListener('open-asesoria-modal', handleOpenModal);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onContactClick={() => setIsAsesoriaOpen(true)} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <VirtualAssistant />
      <SolicitarAsesoria 
        isOpen={isAsesoriaOpen} 
        onClose={() => {
          setIsAsesoriaOpen(false);
          window.dispatchEvent(new CustomEvent('close-asesoria-modal'));
        }} 
      />
    </div>
  );
};

export default Layout;

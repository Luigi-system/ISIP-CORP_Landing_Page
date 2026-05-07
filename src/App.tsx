import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import UnitsPage from './pages/UnitsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<AboutPage />} />
        <Route path="unidades" element={<UnitsPage />} />
        <Route path="contacto" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}

export default App;

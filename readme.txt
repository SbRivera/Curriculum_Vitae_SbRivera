src/
├── components/
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ...
├── pages/
│   ├── Home.jsx
│   ├── Loans.jsx
│   └── ...
├── App.js
└── index.js

import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://via.placeholder.com/150x50?text=Coopartamos+Logo" 
              alt="Logo" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex space-x-8">
            <Link to="/prestamos" className="text-gray-700 hover:text-blue-600 font-medium">
              Préstamos
            </Link>
            <Link to="/ahorros" className="text-gray-700 hover:text-blue-600 font-medium">
              Ahorros
            </Link>
            <Link to="/nosotros" className="text-gray-700 hover:text-blue-600 font-medium">
              Nosotros
            </Link>
            <Link to="/contacto" className="text-gray-700 hover:text-blue-600 font-medium">
              Contacto
            </Link>
          </div>

          {/* Botón Login */}
          <div className="flex items-center">
            <Link 
              to="/login" 
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Acceder
            </Link>
            <button className="md:hidden ml-4 p-2 text-gray-600">
              <HiMenu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tu aliado en soluciones financieras
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Descubre las mejores opciones de crédito y ahorro para cumplir tus metas
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90">
              Solicitar Préstamo
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-blue-600">
              Conocer más
            </button>
          </div>
        </div>
      </section>

      {/* Servicios Destacados */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nuestros Productos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-full mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Préstamo Personal</h3>
                <p className="text-gray-600">Financia tus proyectos personales con tasas competitivas</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Acerca de Nosotros</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Nuestra Historia</li>
              <li>Transparencia</li>
              <li>Trabaja con Nosotros</li>
            </ul>
          </div>

          {/* Columna 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Préstamos</li>
              <li>Ahorros</li>
              <li>Inversiones</li>
            </ul>
          </div>

          {/* Columna 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>0800-123456</li>
              <li>info@coopartamos.fin.ec</li>
              <li>Av. Principal 123, Quito</li>
            </ul>
          </div>

          {/* Columna 4 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  {/* Icono Facebook */}
                </svg>
              </a>
              {/* Agregar más redes sociales */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Coopartamos. Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Loans from './pages/Loans';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prestamos" element={<Loans />} />
        {/* Agregar más rutas aquí */}
      </Routes>
    </Router>
  );
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Loans() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Nuestros Préstamos</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img 
                    src="https://via.placeholder.com/400x200?text=Loan+Image" 
                    alt="Préstamo" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Préstamo Personal</h3>
                    <ul className="text-gray-600 space-y-2 mb-4">
                      <li>• Monto hasta $50,000</li>
                      <li>• Plazos hasta 60 meses</li>
                      <li>• Tasa desde 8.5% anual</li>
                    </ul>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                      Solicitar Ahora
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// personal imports
import './App.css'
import Navbar from '@/pages/globals/navbar/Navbar';
import Footer from '@/pages/globals/footer/Footer';
import Home from '@/pages/home/Home.jsx'
import Services from '@/pages/sevices/Services.jsx'
import FAQ from '@/pages/faq/faq.jsx'
import Dates from '@/pages/dates/dates.jsx'
import ConfirmDate from '@/pages/dates/confirmdate/confirmdate.jsx'
import Login from '@/pages/globals/login/Login.jsx';
import Register from '@/pages/globals/login/Register.jsx';
import Perfil from '@/pages/globals/perfil/Perfil.jsx';
import ScrollToTop from '@/redirection/scrolltop';

import { AuthProvider } from '@/context/AuthContext';
import { DateProvider } from '@/context/DateContext';
import ProtectedRoute from '@/redirection/ProtectedRoute';

// react imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <AuthProvider>
        <DateProvider>
          <div className='app'>
            <Navbar />
            <ScrollToTop />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicios" element={<Services />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/dates" element={<Dates />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/perfil" element={
                  <ProtectedRoute>
                    <Perfil />
                  </ProtectedRoute>
                } />
                <Route path="/confirmdate" element={<ConfirmDate />} />
              </Routes>
            <Footer />
          </div>
        </DateProvider>
      </AuthProvider>
    </Router>
    </>
  )
}

export default App

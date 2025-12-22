
// personal imports
import './App.css'
import Navbar from '@/pages/globals/navbar/Navbar';
import Footer from '@/pages/globals/footer/Footer';
import Home from '@/pages/home/Home.jsx'
import Services from '@/pages/sevices/Services.jsx'
import FAQ from '@/pages/faq/faq.jsx'
import Login from '@/pages/globals/login/Login.jsx';
import Register from '@/pages/globals/login/Register.jsx';

// react imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='app'>
        <Router>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicios" element={<Services />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          <Footer />
        </Router>
      </div>
    </>
  )
}

export default App

import {Routes, Route} from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Home from '../src/pages/Home';
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';
import axios from 'axios';
import {Toaster} from 'react-hot-toast'
import { UserContext, UserContextProvider } from '../context/userContext';
import Dashboard from "./pages/Dashboard"
import HeroSection from './components/HeroSection';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';

axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.withCredentials = true;

function App() {
    return (
      <>
    <UserContextProvider>
    
    <Routes>
      <Route path="/" element={
        <>
        <div className="max-w7xl mx-auto pt-12 px-6">
          <Navbar />
          <HeroSection />
          <Workflow />
          <Testimonials />
          <ContactUs />
          <Footer />
        </div>
        </>
      } />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />  
    </Routes>
    <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
    </UserContextProvider>
    </>
  )
}

export default App;

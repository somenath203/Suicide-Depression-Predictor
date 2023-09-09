import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Welcome from './pages/Welcome';
import AboutUs from './pages/AboutUsPage';
import FormPage from './pages/FormPage';

import Navbar from "./components/Navbar";
import Footer from './components/Footer';

const App = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-violet-100">
      <BrowserRouter>

      <Navbar />

        <Routes>

          <Route path="/" element={<Welcome />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/voiceinputform" element={<FormPage />} />

        </Routes>

        <Footer />

      </BrowserRouter>

      <ToastContainer />
    </div>
  )
};

export default App
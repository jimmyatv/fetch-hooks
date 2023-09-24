import './App.css';
import Navbar from './components/Navbar/Navbar';
import Fetch from './pages/Fetch';
import Hooks from './pages/Hooks';
import Home from './pages/Home';
import { NavbarProvider } from './contexts/NavbarContext';
import { FetchProvider } from './contexts/FetchContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>

      <FetchProvider>
        <NavbarProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/fetch' element={<Fetch />} />
              <Route path='/hooks' element={<Hooks />} />
            </Routes>
          </BrowserRouter>
        </NavbarProvider>
      </FetchProvider>

    </div>
  );
}

export default App;

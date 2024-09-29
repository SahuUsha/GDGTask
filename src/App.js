
import Navbar from './components/Navbar';
import { ThemeProvider } from './context';
import Alumni from './pages/Alumni';
import Contact from './pages/Contact';
import Eventcom from './pages/Event';
import Home from './pages/Home';
import Team from './pages/Team';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Alumni' element={<Alumni />} />
          <Route path='/Event' element={<Eventcom />} />
          <Route path='/Team' element={<Team />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;

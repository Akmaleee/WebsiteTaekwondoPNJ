import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import Achievment from './Pages/Achievment'
import Jadwal from './Pages/Jadwal'
import Anggota from './Pages/Anggota'
import NoPage from './Pages/NoPage'
import Navbar from './Components/Navbar'
import './App.js'
import './App.css'


function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
    
          <Route path="/home" element={<Home />} />
          <Route path="/achievment" element={<Achievment />} />
          <Route path="/Jadwal" element={<Jadwal />} />
          <Route path="/anggota" element={<Anggota />} />
          <Route path="*" element={<NoPage />} />

        </Routes>
      </div>
    </>
  );
}


export default App;

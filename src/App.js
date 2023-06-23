import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home'
import Achievment from './Pages/Achievment'
import Jadwal from './Pages/Jadwal'
import Contact from './Pages/Contact'
import Anggota from './Pages/Anggota'
import NoPage from './Pages/NoPage'

import './App.css';


function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>

          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/achievment" element={<Achievment />}/>
          <Route path="/jadwal" element={<Jadwal />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/anggota" element={<Anggota />}/>
          <Route path="*" element={<NoPage />}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}


export default App;

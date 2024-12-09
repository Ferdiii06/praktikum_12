import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Latihan from './latihan/latihan.jsx';
import Tugas from './tugas/tugas.jsx';
import Percobaan from './percobaan/Percobaan.jsx';



function App() {
  return(
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/Tugas' element={<Tugas/>}></Route>
          <Route path='/Latihan' element={<Latihan/>}></Route>
          <Route path='/Percobaan' element={<Percobaan/>}></Route>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
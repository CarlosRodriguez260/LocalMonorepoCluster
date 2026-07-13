import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Menu from './JavaScript/Menu'
import Catalogo from './JavaScript/Catalogo'
import Grooming from './JavaScript/Grooming'
import PetLister from './JavaScript/PetLister'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />}/>
          <Route path='/catalogo' element={<Catalogo />}></Route>
          <Route path='/catalogo/:generalName' element={<PetLister />}/>
          <Route path='/grooming' element={<Grooming />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

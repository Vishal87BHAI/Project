import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbarcomp from './component/Navbarcomp';
import Home from './component/Home';
import Teachers from './component/Teachers';
import Students from './component/Students';
import Error from './component/Error';
import Teacherviewform from './component/Teacherviewform';
import Studentview from './component/Studentview';
import { propTypes } from 'react-bootstrap/esm/Image';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarcomp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/Teachers' element={<Teachers />} />
          <Route path='/Students' element={<Students />} />
          <Route path='/Teacherviewform/:id' element={<Teacherviewform />} />
          <Route path='/Studentview/:id' element={<Studentview />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

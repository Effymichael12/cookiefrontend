import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import Landing from './pages/Landing';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/landing' element={<Landing />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

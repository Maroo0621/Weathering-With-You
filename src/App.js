import { Route, Routes } from "react-router-dom";
import './App.css';
import Weather from './pages/weather';
import Registration from './pages/registration';
import Home from './pages/home'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Weather' element={<Weather />} />
        <Route path='/Registration' element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;

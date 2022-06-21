import { Route, Routes } from "react-router-dom";
// import { Redirect } from "react router"
import './App.css';
// import GamePage from './pages/GamePage';
// import Landing from './pages/Game/Landing';
import Weather from './pages/weather';
import Registration from './pages/registration';
import Home from './pages/home'
// import Home from './pages/home';
// import Login from './pages/login';
// import Signup from './pages/singup'


function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/profile/:' element={<Profile />} /> */}
        {/* <Route path='/Gamepage/' element={<GamePage />} />
        <Route path='/Landing/' element={<Landing />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='/Weather' element={<Weather />} />
        <Route path='/Registration' element={<Registration />} />
      </Routes>
    </div>
  );
}

export default App;

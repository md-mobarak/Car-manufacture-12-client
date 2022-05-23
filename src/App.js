import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Dashboard from './components/Dashboard/Dashboard';
// ..

function App() {
  AOS.init();
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='dashboard' element={<RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;

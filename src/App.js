import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;

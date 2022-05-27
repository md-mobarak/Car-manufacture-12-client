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
import ProductDetail from './components/ProductDetail/ProductDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyOrders from './components/Dashboard/MyOrders';
import AddReview from './components/Dashboard/AddReview';
import MyProfile from './components/Dashboard/MyProfile';
import AllUsers from './components/Dashboard/AllUsers';
import RequireAdmin from './components/RequireAuth/RequireAdmin';
import ManageAllProduct from './components/Dashboard/ManageAllProduct';
import AddProduct from './components/Dashboard/AddProduct';
import ManageProduct from './components/Dashboard/ManageProduct';
import Payment from './components/Dashboard/Payment';
import MyPortfolio from './components/MyPortfolio/MyPortfolio';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';
// ..

function App() {
  AOS.init();
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/MyPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/dashboard' element={<RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>}>
            <Route index element={<MyOrders></MyOrders>}></Route>
            <Route path='addReview' element={<AddReview></AddReview>}></Route>
            <Route path='myProfile' element={<MyProfile></MyProfile>}></Route>
            <Route path='payment/:id' element={<Payment></Payment>}></Route>
            <Route path='allUsers' element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>}></Route>
            <Route path='manageAllOrders' element={<RequireAdmin><ManageAllProduct></ManageAllProduct></RequireAdmin>}></Route>

            <Route path='addProducts' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
            <Route path='manageProduct' element={<RequireAdmin><ManageProduct></ManageProduct></RequireAdmin>}></Route>
          </Route>

          <Route path='/product/:productId' element={<RequireAuth>
            <ProductDetail></ProductDetail>
          </RequireAuth>}>
          </Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </Navbar>
      <ToastContainer />
    </div>
  );
}

export default App;

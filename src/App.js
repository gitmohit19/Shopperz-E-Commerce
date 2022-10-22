import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header  from './common/Header';
import Menu  from './common/Menu';
import Footer from './common/Footer';
import Home from './Home';
import NotFound from './NotFound';
import Category from './Category';
import Order from './Order';
import Cart from './Cart';
import Register from './Register';
import CheckOut from './CheckOut';
import Login from './Login';
import Wishlist from './Wishlist';
import History from './History';
import Product from './Product';
// import Toggle from './Toggle';

export const GlobalContext= React.createContext();
function App() {
     
  const initialObject = {
      cartTemp: [],
      loginStatus:false,
      wishlist: [],
  }

  const [store,setStore]=useState(initialObject);

  return (
    <>
   <BrowserRouter className='justify-content-center'>
      <GlobalContext.Provider value={{store,setStore}} >
            <div className='col-12'>
            {/* <Header/> */}
            {/* <Toggle/> */}

            <Menu/>
              <Routes>
                    <Route path='/home' element={<Home/>} />
                    <Route path='/category/:name' element={<Category/>} />
                    <Route path='/product/:id' element={<Product/>} />
                    <Route path='/cart' element={<Cart/>} />
                    <Route path='/checkout' element={<CheckOut/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/register' element={<Register/>} />
                    <Route path='/wishlist' element={<Wishlist/>} />
                    {/* <Route path='/toggle' element={<Toggle/>} /> */}


                   {/* 
                    <Route path='/order' element={<Order/>} />
                    <Route path='/history' element={<History/>} />
                    */}




                    <Route path='/' element={<Home/>} />
                    <Route path='/*' element={<NotFound/>} />
              </Routes>
            </div>
            <Footer/>
        </GlobalContext.Provider>
   </BrowserRouter>
   </>
  );
}

export default App;

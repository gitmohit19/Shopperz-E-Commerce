import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
 const Menu = () => {

   
  return (
    <div className='navbar bg-dark text-light p-2 '>

      <div className="container-fluid">
      <h1 className='title navbar-header justify-content-start' >shopperZ</h1>
        <div className=' justify-content-end style-none'>
              <Link to='/home' className='btn-home' >Home</Link> 
              <Link to="/category/women's clothing"  className='btn-women' >Women's clothing</Link>
              <Link to='/category/jewelery' className='btn-jewel' >Jewellery</Link> 
              <Link to="/category/men's clothing"  className='btn-men'>Men's clothing</Link>
              <Link to='/category/electronics'  className='btn-electronic'>Electronics</Link>

                
              <Link to='/login' className='btn-login'>Login</Link>     
              <Link to='/register' className='btn-register'>Register</Link>     
                <span>
                </span>
        </div>
        </div>
      </div>
  )
}
export default Menu;

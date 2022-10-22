import React, { useState,useContext } from 'react'
import { GlobalContext } from './App';
import {Link} from 'react-router-dom';
 const Cart = () => {
        
        const localStore=useContext(GlobalContext);
        const {store,setStore}=localStore
        const [quantity,setQuantity]=useState(0);
        
        const addQunatity=()=>{
            setQuantity(quantity+1);
        }
        const removeQuantity=()=>{
          if(quantity==0){
            return;
          }
          setQuantity(quantity-1);
      }
       
    
  return (
    <div className='container '>
       <div className='col-12 '>
          <div className='row'>
             <table className="table table-light table-hover table-striped">
              <thead>
                 <tr>
                  <th>Item No.</th>
                  <th>Product Title</th>
                  <th>Product Image</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Amount</th>
                 </tr>
              </thead>
              <tbody>
                {
                  store.cartTemp && store.cartTemp.map((item,index)=>(
                    <tr className='my-2'>
                    <td className='mx-2 my-2' key={item.title+index}>{index+1}</td>
                    <td className='mx-2 my-2' >{item.title}</td>
                    <td className='mx-2 my-2'><img className='img-fluid' src={item.image} alt='' style={{width: '50px', height: 'auto'}} /></td>
                    <td className='mx-2 my-2'>{item.price}₹</td>
                    <td className='mx-2 my-2'>
                      <button className="btn primary">
                      <span  className="fw-bold pe-auto" onClick={addQunatity}>+</span>
                      </button>
                        <span id="number" value="0"> {quantity}</span>
                      <button className="btn warning">
                      <span  className="fw-bold" onClick={removeQuantity}>-</span>
                      </button>
                                      
                    </td>
                    <td>{item.price*quantity}</td>
                  </tr>
                  
                  ))
                }
                
              </tbody>
             </table>
               <Link to='/home' className='btn-btn-primary'>Continue Shopping</Link>
               <Link to='/checkout' className='btn-btn-danger'>Proceed to Payment</Link>

          </div>
        </div>
    </div>
  )
}
export default Cart;
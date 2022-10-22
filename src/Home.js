import React,{useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Slider from './Slider';
 const Home = () => {
    const [products,setProducts]=useState([]);

    
    const apiFetchRequest=async()=>{
       const response=await fetch('https://fakestoreapi.com/products');
       const data= await response.json();
       console.log(data);
       setProducts(data);
    }
    useEffect(()=>{
        apiFetchRequest();
    },[])
    
    const mouseOver=(e)=>{

      e.target.style.backgroundColor="#FFFFE0";
      e.target.style.borderRadius="8px";
 }
 const mouseOut=(e)=>{

   e.target.style.backgroundColor="";
}



  return (
    <>
        <Slider/>
      <div className='row'>
        <div className='col-12 '>
            <div className='row my-2 mx-2'>
              {
                products && products.map((item,index)=>(
                  <Link className="col-2 card my-2" to={`products/${item.id}`} key={item.title+index} style={{textDecoration: 'none'}}>
                    <img src={item.image} className="card-img-top p-2" alt="..." style={{width:'150px', height:'200px'}}/>
                        <div className="card-body " onMouseOver={mouseOver} onMouseOut={mouseOut}>
                            <h5 className="product-title fs-sm" >{item.title}</h5>
                            <p className="fs-sm">{item.text} </p>
                            <h4 className="fs-sm ">Price-{item.price*100}₹/piece</h4>
                            <span>
                            {/* <button className="btn btn-primary mx-2" onClick={addToCart}>Add Cart</button> */}
                            {/* <button className="btn btn-danger" onClick={addToWishList}>Add Wishlist</button> */}
                            </span>
                    </div>
                </Link>
                ))
              }
              </div>
        </div>
      </div>
      </>
  )
}
export default Home;
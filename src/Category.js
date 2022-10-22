import React, {useEffect, useState,useContext} from 'react';
import { useParams, Link } from 'react-router-dom';
import { GlobalContext } from './App';

        const Category = () => {
                const {name}=useParams();
                console.log('name:',name);
                const [products,setProducts]=useState([]);
                const localStore=useContext(GlobalContext);
                // const [store,setStore]=useState(false);
            useEffect(()=>{
                apiFetchRequest();
            },[name]);

            const apiFetchRequest=async()=>{
                const response=await fetch(`https://fakestoreapi.com/products/category/${name}`);
                const data= await response.json();
                console.log(data);
                setProducts(data);
             };
             const mouseOver=(e)=>{

               e.target.style.backgroundColor="#FFFFE0";
               e.target.style.borderRadius="8px";
          }
          const mouseOut=(e)=>{

            e.target.style.backgroundColor="";
       }


  return (
    <>
      <div className='row my-2'>
        <div className='col-12 '>
            <div className='row' >
              {
                products && products.map((item,index)=>(
                  <Link className="col-2 card fade-out"   to={`/product/${item.id}`} key={item.title +index} style={{textDecoration: 'none'}}>
                    <img src={item.image} className="card-img-top-center p-2 " alt="..." style={{width:'250px', height:'200px'}}/>
                    <div className="card-body" onMouseOver={mouseOver} onMouseOut={mouseOut}>
                        <h5 className="fs-sm ">{item.title}</h5>
                        <p className="fs-sm ">{item.text} </p>
                        <h6 className="fs-sm ">Price-{item.price*100}₹/piece</h6>
                        <h6 className="fs-sm ">Overall Rating-{item.rating && item.rating.rate}</h6>

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
export default Category;
import React,{useState , useEffect, useContext} from 'react';
import {useParams,Link} from 'react-router-dom';
import { GlobalContext } from './App';

 const Product = () => {

     const {id}=useParams();
     const localStore= useContext(GlobalContext);
     const [product,setProduct]=useState({});
     const [cartStatus,setCartStatus] = useState(false);

     console.log("product",product);

     useEffect(()=>{
        localStore.store.cartTemp.map((item)=>{
            if(item.id === product.id){
                setCartStatus(true);
            }else{
                setCartStatus(false);
            }
        })
        if(localStore.store.cartTemp.length === 0){
            setCartStatus(false); 
        }
     })

     useEffect(()=>{
        console.log("set cart status", cartStatus)
    },[]);

   

    const fetchRequest = async ()=>{
        const response=await fetch(`https://fakestoreapi.com/products/${id}`);
        const data= await response.json();
        console.log(data);
        setProduct(data);
     };

     useEffect(()=>{
        fetchRequest();
    },[]);
     const addToCart=(obj)=> {
        console.log("add to cart",obj)
        localStore.setStore({
            ...localStore.store,
            cartTemp : [...localStore.store.cartTemp,obj]
        })
     }
     
     const removeToCart=(obj)=>{
        console.log("remove to cart",obj)
          let tempRemoveCart=localStore.store.cartTemp.filter((item)=>{
            return item.id !== obj.id;
          })
           localStore.setStore({
              ...localStore.store,
              cartTemp: [...tempRemoveCart]
           })
     }

     const addToWishlist=(obj)=> {
        console.log("add to wishlist")
        localStore.setStore({
            ...localStore.store,
            wishlist : [...localStore.store.wishlist,obj]
        })
     }
  return (
    <div className='row'>
        <div className='col-12'>
            <div className="row">
                <div className='col-4'>
                    <img className='img-fluid' alt='' src={product.image}/>
                </div>
                <div className='col-4'>
                   <h2>{product.title}</h2>
                   <p><h4>Product Detail</h4><span>{product.description}</span></p>
                   <h4>Price-{product.price}</h4>
                   <h6>Total buy count is{product.rating && product.rating.count}</h6>
                   <h4>Overall Rating-{product.rating && product.rating.rate}</h4>

                </div>
                <div className='col-4'>
                    {
                      cartStatus  ? (<button className="btn btn-primary" onClick={()=>{removeToCart(product)}}>Remove Cart</button>)
                       :
                       (<button className="btn btn-danger" onClick={()=>{addToCart(product)}}>Add Cart</button>)
                    }
                    {
                        cartStatus && (<Link className="btn btn-success" to='/cart'>Move To Cart</Link>)
                    }
                    <button className="btn btn-warning"onClick={addToWishlist}>Add Wishlist</button>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Product;
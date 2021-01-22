import React from 'react'
import './CheckoutProduct.css'
import {useStateValue} from "./StateProvider"
function CheckoutProduct({id,image,title,price,rating}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        //remove the item from the basket 
    }
    return (
        <div className="checkoutProduct" >
            <img className="checkoutProduct_image" src= {image}/>

            <div className="checkoutProduct_info">
               <p className = "checkoutProduct_title" >
                   {title}
                </p>
               <p className="checkoutProduct_price">
                   <small>$</small>
                   <strong>{price}</strong> 
               </p>
               <div className="div checkoutProduct_rating">
                    {Array(rating).fill().map((_, i)=>(
                            <p>⭐</p>
                        ))}
               </div>
               <button onclick={removeFromBasket} >Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct

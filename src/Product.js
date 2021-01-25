import React from 'react'
import './css/Product.css'
import {useStateValue} from "./StateProvider";

function Product({id,title,image,price,rating}) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        //dispatch the item into the the data layer
         dispatch({
             type: 'ADD_TO_BASKET',
             item:{
                 id:id,
                 title:title,
                 image:image,
                 price:price,
                 rating:rating,
             },
         })
    }

    return (
        <div 
            className="product">
             <div className="card"style = {{width: '18rem'}}>
             <div class="card-body" >
                    <div className="product_info">
                        <p>{title}</p>
                        <p  className="product_price">
                            <small>$</small>
                            <strong>{price}</strong>
                       </p>
                        <div className="product_rating">
                            {Array(rating).fill().map((_, i)=>(
                                <p>⭐</p>
                            ))}
                                
                        </div>

                    </div>
                    
               
                
                    <img
                    className="i"
                    src={image}
                    alt=""
                    />
                    <div className="b">
                 <button onClick={addToBasket}>Add to Basket</button>
             {  /** <button type="button" class="btn btn-primary">Primary</button>*/ }
            </div>
             </div>
            
             
        </div>
                    
                    


        </div>   
    )
}

export default Product

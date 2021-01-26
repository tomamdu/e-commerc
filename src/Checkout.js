import React,{ useState } from "react";
import { Title } from '@material-ui/icons';
import './css/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { getBasketTotal } from './reducer';
import Subtotal from './Subtotal';
import {useStateValue} from "./StateProvider"
import {Spring} from 'react-spring/renderprops'

function Checkout() {
    //react spring
    
//
    const [{basket,user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                className="checkout_ad"
                   src=""
                   alt=""
                />
                <div>
                <Spring from={{ opacity: 0,
                                    marginTop: -50}}
                            to =   {{opacity: 1,
                                   marginTop:0}}>
                    {props=>(   <div style={props}>
                                
                                    <div>
                                <p>
                                    Hello,{user?.email}
                                </p>
                                
                                <h2 className="checkout_title" >
                                    Your Shopping Basket
                                </h2>

                                </div>
                                
                            
                        </div> )}
                    </Spring>
                    
                    <Spring from={{ opacity: 0,
                                    marginLeft: -50}}
                            to =   {{opacity: 1,
                                   marginLeft:0}}>
                    {props=>(   <div style={props}>
                                {basket.map(item=>(
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image = {item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div> )}
                    </Spring>
                    
                    {/*basket tem*/}
                    {/*basket tem*/}
                    {/*basket tem*/}
                </div>
            </div>

            <Spring from={{ opacity: 0,
                                    marginTop: -50}}
                            to =   {{opacity: 1,
                                   marginTop:0}}>
                    {props=>(   <div style={props}>
                                
                                
                                <div className="checkout_right">
                                <Subtotal/>
                                </div>
                            
                        </div> )}
                    </Spring>
            
        </div>
    )
}

export default Checkout


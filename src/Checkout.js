import { Title } from '@material-ui/icons';
import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { getBasketTotal } from './reducer';
import Subtotal from './Subtotal';
import {useStateValue} from "./StateProvider"

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img
                className="checkout_ad"
                   src=""
                   alt=""
                />
                <div>
                    <h2 className="checkout_title" >
                        Your shopping Basket
                    </h2>
                      {basket.map(item=>(
                          <CheckoutProduct
                             id={item.id}
                             title={item.title}
                             image = {item.image}
                             price={item.price}
                             rating={item.rating}
                          />
                      ))}
                    {/*basket tem*/}
                    {/*basket tem*/}
                    {/*basket tem*/}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout


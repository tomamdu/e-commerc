import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css'
import {useStateValue} from "./StateProvider";
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFormat
               renderText={(value)=>(
                  <div>
                      <p>
                         subtotal ({basket.length} items): <strong>{value}</strong> 
                      </p>
                      <small className="subtotal_gift">
                          <input type="checkbox"/>this order 
                         contains a gift
                      </small>
                  </div>
               )}
               decimalScale={2}
               value={getBasketTotal(basket)}
               displayType={"text"}
               thousandseparator={true}
               prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal

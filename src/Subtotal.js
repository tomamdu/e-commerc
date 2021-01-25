import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './css/Subtotal.css'
import {useStateValue} from "./StateProvider";
import { getBasketTotal } from './reducer';
import { useHistory } from "react-router-dom";

function Subtotal() {
    const history = useHistory();
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
            <button onClick={e => history.push('/payment')}> Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal

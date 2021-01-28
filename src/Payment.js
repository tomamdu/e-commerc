import React,{ useState,useEffect } from "react";
import './css/Payment.css'
import {useStateValue} from "./StateProvider"
import CheckoutProduct from './CheckoutProduct';
import { Link,useHistory } from 'react-router-dom';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from "./axios";
import {db} from "./firebase";
//const firebase = require("firebase");
//Required for side-effects
//require("firebase/firestore");

function Payment() {
    const [{basket,user}, dispatch] = useStateValue();
    const history = useHistory();


    const stripe = useStripe();
    const elements = useElements();
    
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        //generete the special stripe secret which allows us to change a customer

        const getClientSecret = async () => {
            try {
                const response = await axios({
                
                    method: 'post',
                    //stripe expects the total in a currencies subunits
                    url: `/payments/create?total=${getBasketTotal(basket) * 100}`
                });
                console.log(response.data, 'response.data')
                setClientSecret(response.data.clientSecret)
                console.log('THE SECRET IS>>>', clientSecret)

            } catch(e) {
                console.log(e, 'error...')
            }
        }

        getClientSecret();
    }, [basket])

    console.log('',user);
    const handleSubmit = async (event) => {
        //stripe stuff... 
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //paymentIntent = payment confirmation
            
               var ba = Object.assign({},basket)
               
            db
              .collection('orders')
              .add({
                  basket: JSON.stringify(ba),
                  amount: paymentIntent.amount,
                  created: paymentIntent.created,
                  uid: user?.uid
              }).then(v => {
                console.log(v, 'value');
              }).catch(e => {
                  console.log(e, 'error');
                  
              });

            setSucceeded(true);
            setError(null)
            setProcessing(false)
            
            dispatch({
                type:'EMPTY_BASCKET'
            })
            history.replace('/orders')

        })
    }

    const handleChange = event => {
        //Listen for changes in the CardElement
        //and display anyerrors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error? event.error.message : "");
        
    }

    return (
        <div className="payment">
            <div className="payment_container">

                <h1>
                    Checkout(
                        <Link to="checkout">{basket?.length}items</Link>
                    )
                </h1>


                {/**payment section - delivary address */}
                    <div className="payment_section">
                           <div className="payment_title">
                               <h3>Delivery Address</h3>
                           </div>
                           <div className="payment_address">
                               <p>{user?.email}</p>
                               <p>123 react</p>
                               <p>addis ababa,et</p>
                           </div>
                    </div>

                {/**payment section - Review Item*/}
                    <div className="payment_section">
                               <div className="payment_title">
                                    <h3>Review items and delivry</h3>
                                </div>
                     

                {/**payment section - Payment items */}

                                <div className="payment_items">
                                {basket.map(item=>(
                                    <CheckoutProduct
                                        id={item.id}
                                        title={item.title}
                                        image = {item.image}
                                        price={item.price}
                                        rating={item.rating}
                                    />
                                ))}
                                </div>
                    </div>
                      {/**payment section - Payment method */}
                      <div className="payment_section">
                               <div className="payment_title">
                                    <h3>Payment Method</h3>
                                </div>
                                <div className="payment_details">
                                    {/**stripe will go */}

                                    <form onSubmit={handleSubmit}>
                                        <CardElement onChange={handleChange}/>
                                        <div className="payment_priceContainer">
                                            <CurrencyFormat
                                            renderText={(value)=>(
                                                <div>
                                                    <h3>Order Total: {value}</h3>
                                                </div>
                                            )}
                                            decimalScale={2}
                                            value={getBasketTotal(basket)}
                                            displayType={"text"}
                                            thousandseparator={true}
                                            prefix={"$"}
                                            />
                                            <button disabled={processing || disabled ||
                                             succeeded}>
                                                    <span>{processing? <p>Processing</p>: "Buy Now" }</span>
                                            </button>
                                        </div>

                                        {/**Errors */}
                                        {error && <div>{error}</div>}
                                    </form>
                                </div>
                     </div>
            </div>
        </div>
    )
}

export default Payment

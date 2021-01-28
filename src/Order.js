import React from 'react'

import moment from "moment";
import CheckoutProduct from './CheckoutProduct'

function Order({order}) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMM Do yyy/ hh:mm")}
            </p>

            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item =>(
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.price}
                    price={item.price}
                    rating={item.rating}
                />
            ))}
        </div>
    )
}

export default Order

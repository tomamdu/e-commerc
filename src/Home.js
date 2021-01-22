import React from 'react'
import './Home.css'
import home_grey from './images/home_grey.jpg';
import product1 from './images/product1.jpg';
import product2 from './images/product2.jpg';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
             <img
                className="home_image"
                src={home_grey}
                alt=""
                />
                <div className="home_row">
                     <Product title="cosmotics" price={22.50}
                     image={product1} rating={3}/>
                     <Product title="phone" price={1000.00}
                     image={product2} rating={3}/>
                </div>
                <div className="home_row">
                     <Product title="tv" price={12.99}
                     image={product1} rating={3}/>
                     <Product title="cosmotics" price={22.50}
                     image={product1} rating={3}/>
                     <Product title="cosmotics" price={22.50}
                     image={product1} rating={3}/>
                </div>
                <div className="home_row">
                    <Product title="cosmotics" price={22.50}
                     image={product1} rating={3}/>
                </div>
            </div>
            
        </div>
    )
}

export default Home

import React from 'react'
import './css/Home.css'
import home_grey from './images/home_grey.jpg';
import product1 from './images/product1.jpg';
import product2 from './images/product2.jpg';
import Product from './Product';
function Home() {
    return (
    <div className="hom">
            
        <div className="containe">
         
                 <img
                    className="home_image"
                    src={home_grey}
                    alt=""
                    />
            <div className="container">
                <div className="row">

                    <div class="col-10">
                                <div className="row">
                                    
                                    <div class="col-4">
                                
                                        <Product title="Brush the best brand ever streat from Europe
                                                        cheap price for the beter look just try it" 
                                        price={22.50}
                                        image={product1} rating={3}/>
                                    </div>
                                    
                                    <div class="col-4">
                                    
                                        <Product title="Brush the best brand ever streat from Europe
                                                        cheap price for the beter look just try it" 
                                        price={22.50}
                                        image={product1} rating={3}/>
                                    </div>
                                    
                                    <div class="col-4">
                                    
                                        <Product title="Brush the best brand ever streat from Europe
                                                        cheap price for the beter look just try it" 
                                        price={22.50}
                                        image={product1} rating={3}/>
                                    </div>
                                   
                                    <div class="col-4">
                                    
                                        <Product title="Brush the best brand ever streat from Europe
                                                        cheap price for the beter look just try it" 
                                        price={22.50}
                                        image={product1} rating={3}/>
                                    </div>
                                   
                                    <div class="col-4">
                                    
                                        <Product title="Brush the best brand ever streat from Europe
                                                        cheap price for the beter look just try it" 
                                        price={22.50}
                                        image={product1} rating={3}/>
                                    </div>

                                    <div class="col-4">
                                    
                                        <Product title="Brush the best brand ever streat from Europe
                                                        cheap price for the beter look just try it" 
                                        price={22.50}
                                        image={product1} rating={3}/>
                                    </div>

                                    <div class="col-4">
                                    
                                        <Product title="Brush the best brand ever streat from Europe
                                                        cheap price for the beter look just try it" 
                                        price={22.50}
                                        image={product1} rating={3}/>
                                    </div>
                                    
                                        
                                </div>        
                                    
                    </div>
                
                    
                     <div className="col-2">
                        
                          {/*  <div className="row">
                              <div class="col-sm">  
                                    <div className="card">
                                        <h4>Categories</h4>
                                                <ul>
                                                    <li>
                                                        <span>electronics</span>
                                                    </li>
                                                    <li>
                                                        close
                                                    </li>
                                                </ul>
                                    </div>
                                </div>    
                            </div>*/}
                    </div>
                
            </div>
        </div>
                
   
           
                

            
                 
           
                
                
       </div>
             
    </div>
    )
}

export default Home

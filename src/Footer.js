import { List } from '@material-ui/core'
import React from 'react'
import './css/Footer.css'

function Footer() {
    return (
        <div className="all">
            <div className="footer">
            <div className="list">
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
            <div className="contact">
                <h4>Contact</h4>
                <span> +251 913854712</span><br/>
               <span>mereb@gmail.com</span> <br/>
               <span>facebook.com</span> <br/>
               <span>youtube.com</span> 
             
            </div>
           
            </div>
            <div className="copy">
                <span>copy right @2021 created by Thomas Amdu</span>
            </div>
        </div>
    )
}

export default Footer

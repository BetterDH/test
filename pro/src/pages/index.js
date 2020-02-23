import React, { Component } from "react";
import './index.scss';
import logo from '../static/img/logo.png'

class Index extends Component {
  render() {
    return( 
        <div className='index'>
          <div className='header'>

            <div className="header_c">

              <div className="header_l">
              <a >
                <img  src={logo}/>
                 </a>
                 <span>|</span>
                   
                <p>
                  校招官网
                </p>
              </div>
              <div className="header_m">2</div>
              <div className="header_r">3</div>


            </div>
            
          </div>
          <div className='bannner'>
          banner

          </div>
          <div className='content'>
          content

          </div>
          <div className='footer'>
          footer

          </div>

        </div>  

    )
  }
}
export default Index;

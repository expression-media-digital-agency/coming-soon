import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './HomeComponent.css';
import comingimg from '../../assets/img/undraw_under_construction_46pa.svg'
import exmlogo from '../../assets/img/exmlogo.png'
import instagram from '../../assets/img/social-1_round-instagram.svg'
import twitter from '../../assets/img/social-1_round-twitter.svg'
import whatsapp from '../../assets/img/social-2_round-whatsapp.svg'




 class HomeComponent extends Component {
     render() {
       return (
         <div className="home">
            <div className="container">
                <nav class="navbar">
                    <Link class="navbar-brand" to="/"><img src={exmlogo} className="img-fluid exm-logo" alt="exm-logo"/></Link>
                </nav>
                <div className="row">
                    
                    <div className="col-md-3 col-sm-12 "></div>
                    <div className="col-md-6 col-sm-12 text-center">
                        <img src={comingimg} className="img-fluid coming-img " alt="coming-soon"/>

                    </div>
                    <div className="col-md-3 col-sm-12 "></div>
                    <div className="col-md-12 text-center">
                    <h1 className="live-text">We Will be Live Soon</h1>
                    <div className="icons row"> 
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mt-2">
                        <a href="https://twitter.com/exmdigital" rel="noopener noreferrer" target="_blank"><img className="svg" src={twitter} alt="twitter-icon"/></a>  
                         <a href="https://www.instagram.com/exmdigital/" rel="noopener noreferrer" target="_blank"><img className="svg" src={instagram} alt="instagram-icon"/></a> 
                         <span className="svg">@exmdigital</span> 
                        </div>
                        <div className="col-md-4 mt-2">
                        <Link to="/"><img className="svg whatsapp" src={whatsapp} alt="whatsapp"/></Link> 
                         <span className="svg">+234 816 793 2091</span> 
                        </div>
                        <div className="col-md-2"></div>

                        
                         

                    </div>
                    </div>

                </div>
            </div>
         </div>
       )
     }
 }
export default HomeComponent;
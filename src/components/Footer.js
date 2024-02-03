import React from 'react'

import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer>
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-7">
                    <div className="row links">
                        <div className="link-category col-6 col-lg-4">
                            <h5>About Us</h5>
                            <Link href="./about-us">Our Story</Link>
                            <Link href="./about-us">Mission & Vision</Link>
                            <Link href="./about-us">Team</Link>
                        </div>
                        <div className="link-category col-6 col-lg-4">
                            <h5>Services</h5>
                            <Link href="./about-us">Farming</Link>
                            <Link href="./about-us"> Real Estate</Link>
                            <Link href="./about-us">Consultancy</Link>
                        </div>
                        <div className="link-category col-6 col-lg-4">
                            <h5>Contact</h5>
                            <Link href="./about-us">Contact</Link>
                            <Link href="./about-us">Partnerships</Link>
                            <Link href="./about-us">Testimonials</Link>
                        </div>
                    </div>
                </div>
                <div className="footer-content col-md-6 col-lg-5">                    
                    
                    <form action="">
                        <h5>Newsletter: </h5>
                        <div className="form-container">
                            <input type="email" name="" id="" placeholder="Your email here" />
                            <button type="submit" className="page-btn">Subscribe</button>
                        </div>
                        
                    </form>

                    <div className="media-links">
                        <div className="links">
                            <Link to="#">
                                <img className="media-icon" src={require("../icons/facebook.png")} alt=""/>
                            </Link>
                            <Link to="#">
                                <img className="media-icon" src={require("../icons/twitter.png")} alt=""/>
                            </Link>
                            <Link to="#">
                                <img className="media-icon" src={require("../icons/instagram.png")} alt=""/>
                            </Link>
                            <Link to="#">
                                <img className="media-icon" src={require("../icons/linkedin.png")} alt=""/>
                            </Link>
                        </div>

                    </div>


                    <div className="company-info">
                        <p>Mobile: <Link to="tel:+">+2348033976703</Link></p>
                        <p>Email: <Link to="mailto:tierragreenresourcesltd@gmail.com">gracemedicaloutreachintl@gmail</Link></p>
                        <p className='address'>Address: <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptatibus vitae omnis atque rem at ipsum qui ex maxime.</span></p>

                    </div>
                </div>
            
                <div className="copy-right mt-3">
                    <Link to="#" className="logo" ><img src={require("../imgs/tierra-green-resources-ltd/logo.png")} alt="logo" className="logo-img" /></Link>

                    <p>Grace Medical Outreach Intl. &copy; 2023, All RIghts Reserved.</p>
                </div>
                
        </div>
        
        </div>
    </footer>
  )
}

export default Footer
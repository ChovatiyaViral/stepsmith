import React from 'react'
import './Footer.css'
import GmailImage from '../../../images/gmail.png';
import PhoneImage from '../../../images/phone.png';
import FooterLogo from '../../../images/footer-logo.png';
// import GmailImage from '../../images/gmail.png';
// import PhoneImage from '../../images/phone.png';
// import FooterLogo from '../../images/footer-logo.png'

export default function Footer() {
    return (
<footer className="footer-bg">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-3 col-md-6 col-sm-6">
                    <h2>Services</h2>
                    <ul className="footer-menu">
                        <li><a href="#"> Mobile Development</a></li>
                        <li><a href="#">UI/UX Design</a></li>
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                        <li><a href="#">Website Design</a></li>
                        <li><a href="#">Brand Identity</a></li>
                    </ul>
                </div>
                <div className="col-12 col-lg-3 col-md-6 col-sm-6">
                    <h2>Help Advice</h2>
                    <ul className="footer-menu">
                        <li><a href="#">How it works </a></li>
                        <li><a href="#">Contact support</a></li>
                        <li><a href="#">Privacy policy</a></li>
                    </ul>
                </div>
                <div className="col-12 col-lg-3 col-md-6 col-sm-6">
                    <h2>Company</h2>
                    <ul className="footer-menu">
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Our Team</a></li>
                    </ul>
                </div>
                <div className="col-12 col-lg-3 col-md-6 col-sm-6">
                    <h2>Get In touch</h2>
                    <ul className="footer-menu">
                        <li><a href="#">Feel free to get in touch with us vai email</a></li>
                        <li><a href="#" className="gmail"> <img src={GmailImage} alt="" />stepsmithinfotech@gmail.com</a></li>
                        <li><a href="#" className="mobile"> <img src={PhoneImage} alt="" />+91 7383501199</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="container">
                <div className="footer-bottom-box">
                    <a href="#"><img src={FooterLogo} alt="" /></a>
                    <ul className="footer-bottom-menu">
                        <li><a href="#">Follow us</a></li>
                        <li><a href="#">facebook</a></li>
                        <li><a href="#">instagram</a></li>
                        <li><a href="#">linkedin</a></li>
                    </ul>
                    <p>© Copyright 2020 <span>Step Smith Infotech</span>. All rights reserved by <span>
                            www.stepsmithinfotech.com</span></p>
                </div>
            </div>
        </div>
    </footer>
    )
}

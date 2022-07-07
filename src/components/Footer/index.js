import React from 'react';
import '../../sass/components/footer/footer.css';
import logo from '../../img/logo-green-2x.png';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-logo-box'>
            <img src={logo} alt="full logo" className='footer-logo'/>
        </div>

        <div className='footer-navigation'>
            <ul className='footer-list'>
                <li className='footer-item'>
                    <a href="#" className='footer-link'>Company</a>
                </li>
                <li className='footer-item'>
                    <a href="#" className='footer-link'>Contact us</a>
                </li>
                <li className='footer-item'>
                    <a href="#" className='footer-link'>Carrers</a>
                </li>
                <li className='footer-item'>
                    <a href="#" className='footer-link'>Privacy policy</a>
                </li>
                <li className='footer-item'>
                    <a href="#" className='footer-link'>Terms</a>
                </li>
            </ul>
        </div>

        <div className='footer-copyright'>
            <p className='footer-copyright-text'>Made by Heitor Urbanetz</p>
        </div>
    </footer>
  )
}

export default Footer
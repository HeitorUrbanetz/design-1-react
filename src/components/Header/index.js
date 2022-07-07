import React from 'react';
import logoWhite from '../../img/logo-white.png';
import '../../sass/components/header/header.css';

const Header = () => {
  return (
    <header className='header'>
        <div className='logo-box'>
            <img src={logoWhite} alt='logo' className='logo'/>
        </div>

        <div className='text-box'>
            <h1 className='heading-primary'>
                <span className='heading-primary-main'>Outdoors</span>
                <span className='heading-primary-sub'>is where life happens</span>
            </h1>

            <a href='https://github.com/HeitorUrbanetz' target="_blank" rel="noreferrer" className='btn btn-white btn-animated'>Discover our Tours</a>
        </div>

    </header>
  )
}

export default Header;
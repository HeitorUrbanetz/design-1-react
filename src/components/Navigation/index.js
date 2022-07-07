import React from 'react';
import '../../sass/components/navigation/navigation.scss';

const Navigation = () => {
  return (
    <div className='navigation'>
        <input type="checkbox" className='navigation-checkbox' id="navi-toggle" />

        <label htmlFor='navi-toggle' className='navigation-button'>
            <span className='navigation-icon'>&nbsp;</span>
        </label>

        <div className='navigation-background'></div>

        <nav className='navigation-nav'>
            <ul className='navigation-list'>
                <li className='navigation-item'><a href="#" className='navigation-link'>About Natous</a></li>
                <li className='navigation-item'><a href="#" className='navigation-link'>Your benefits</a></li>
                <li className='navigation-item'><a href="#" className='navigation-link'>Popular tours</a></li>
                <li className='navigation-item'><a href="#" className='navigation-link'>Stories</a></li>
                <li className='navigation-item'><a href="#" className='navigation-link'>Book now</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation
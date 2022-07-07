import React from 'react'
import {BsGlobe, BsCompass, BsMap, BsHeart} from 'react-icons/bs';
import '../../sass/components/features/features.css';

const Features = () => {
    const titles = ['Explore the world', 'Meet nature', 'Find your way', 'Live a healthier life']

    const renders = () => {
        const render = [];

        for (let i = 0, max = 4; i < max; i++) {
            render.push(
                <div className='feature-box'>
                    <div className='feature-box-icon'>
                        <svg width="0" height="0">
                            <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="#7ed56f" offset="0%" />
                            <stop stopColor="#28b485" offset="100%" />
                            </linearGradient>
                        </svg>
                        
                        {titles[i] === 'Explore the world' ? <BsGlobe style={{ fill: "url(#blue-gradient)" }}/> : ''}
                        {titles[i] === 'Meet nature' ? <BsCompass style={{ fill: "url(#blue-gradient)" }}/> : ''}
                        {titles[i] === 'Find your way' ? <BsMap style={{ fill: "url(#blue-gradient)" }}/> : ''}
                        {titles[i] === 'Live a healthier life' ? <BsHeart style={{ fill: "url(#blue-gradient)" }}/> : ''}
                        
                    </div>
                <h3 className='heading-tertiary u-margin-small'>{titles[i]}</h3>
                <p className='feature-box-text'>
                    Heitor Urbanetz<br/>
                    ReactJS, JavaScript, Sass and Css
                </p>
            </div>
            )
        }

        return render;
    }

    return (
        <section className='features'>
            
        <div className='features-list'>
        {renders()}
        </div>    
            
        </section>
    )
}

export default Features;

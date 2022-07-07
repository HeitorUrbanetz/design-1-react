import React from 'react'
import '../../sass/components/home/home.css';
import nat1 from '../../img/nat-1-large.jpg';
import nat2 from '../../img/nat-2-large.jpg';
import nat3 from '../../img/nat-3-large.jpg';

const MainContent = () => {
  return (
    <main>
        <section className='about'>
            <div className='u-center-text u-margin-bottom-big'>
                <h2 className='heading-secondary'>
                    Exiting tours for adventurous people
                </h2>
            </div>

        <div className='texts-contents'>
            <div className='contents'>
                <div className='row'>
                    <h3 className='heading-tertiary u-margin-bottom-small'>You're going to fall in love with nature</h3>
                    <p className='paragraph'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>
                </div>

                <div className='row'>
                    <h3 className='heading-tertiary u-margin-bottom-small'>Live adventures like you never have before</h3>
                    <p className='paragraph'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    </p>

                    <a href="#" className='btn-text'>Learn more &rarr;</a>
                </div>
            </div>

                <div className='row'>
                    <div className='composition'>
                        <img src={nat1} alt="Photo 1" className='photo photo--p1'/>
                        <img src={nat2} alt="Photo 2" className='photo photo--p2'/>
                        <img src={nat3} alt="Photo 3" className='photo photo--p3'/>
                    </div>
            </div>
        </div>

        </section>
    </main>
  )
}

export default MainContent
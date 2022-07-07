import React from 'react';
import '../../sass/components/stories/stories.css';
import nat8 from '../../img/nat-8.jpg';
import nat9 from '../../img/nat-9.jpg';
import video from '../../img/video.mp4';
import videoW from '../../img/video.webm';

const Stories = () => {
  return (
    <section className='stories'>

      <div className='bg-video'>
            <video className="bg-video--content" autoPlay muted loop>
                <source src={video} type="video/mp4" />
                <source src={videoW} type="video/mp4" />
                Your browser is not supported!
            </video>  
      </div>

        <div className='u-center-text u-margin-bottom-big'>
            <h2 className='heading-secondary heading-stories'>
                We making people genuinely happy
            </h2>
        </div>
            <div className='story story-1'>
                <figure className='story-shape'>
                    <img className="story-img" src={nat8} alt="Person on a tour" />
                    <figcaption className='story-caption'>
                          Mary Smith
                    </figcaption>
                </figure>
                <div className='story-text'>
                    <h3 className='heading-tertiary u-bottom-small'>I had the best week ever with my family</h3>
                      <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </p>
                </div>
            </div>

            <div className='story'>
                <figure className='story-shape'>
                    <img className="story-img" src={nat9} alt="Person on a tour" />
                    <figcaption className='story-caption'>
                          Jack Wilson
                    </figcaption>
                </figure>
                <div className='story-text'>
                    <h3 className='heading-tertiary u-bottom-small'>WOW! My life is completed different now</h3>
                      <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br></br>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                      </p>
                </div>
            </div>

            <div className='stories-button'>
                <a href="#" className='btn-text'>Read all stories &rarr;</a>
            </div>


       
    </section>
  )
}

export default Stories
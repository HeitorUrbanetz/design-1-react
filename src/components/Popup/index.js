import React from 'react';
import '../../sass/components/popup/popup.css';
import nat8 from '../../img/nat-8.jpg';
import nat9 from '../../img/nat-9.jpg'; 
import {AiOutlineClose} from 'react-icons/ai';

const Popup = ({setShowModal}) => {
  return (
    <div className='popup'>
        <div className='popup-container'>
            <div className='popup-images'>
                <img src={nat8} alt="" />
                <img src={nat9} alt="" />
            </div>

            <div className='popup-contents'>
                <div className='popup-heading'>
                    <h2 className='heading-secondary popup-text-h'>
                        We making people genuinely happy
                    </h2>
                    <div className='popup-close-icon' onClick={() => setShowModal(false)}>
                        <AiOutlineClose/>
                    </div>
                </div>

                <div className='popup-text'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                   
                    <a href="#" className='popup-btn'>Book now!</a>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default Popup
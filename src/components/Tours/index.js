import React, { useState } from 'react'
import '../../sass/components/tours/tours.css';
import Popup from '../Popup';

const Tours = () => {
    const [showModal, setShowModal] = useState(false);

    const showPopUp = (e) => {
        e.preventDefault();

        setShowModal(true);
    }

  return (
    <div className='u-center-text u-margin-bottom-big tours'>
        <h2 className='heading-secondary'>
            Most popular tours
        </h2>

        {
            showModal && <Popup setShowModal={setShowModal}/>
        }

        <div className='cards'>
            <div className='card'>

                <div className='card-side front front-1'>
                    <div className='card-picture-1'>
                        &nbsp;
                    </div>
                    <h4 className='card-heading'>
                        <span className='card-heading-span card-heading-span--1'>The Sea Explorer</span>
                    </h4>
                    <div className='card-details'>
                        <ul>
                            <li>3 day tours</li>
                            <li>Up to 30 people</li>
                            <li>2 tour guides</li>
                            <li>Sleep in cozy hotels</li>
                            <li>Difficulty: easy</li>
                        </ul>
                    </div>
                </div>

                <div className='card-side back back-1'>
                    <div className='card-cta'>
                        <div className='card--price-box'>
                            <p className='card-price-only'>Only</p>
                            <p className='card-price-value'>$297</p>
                        </div>
                        <a href="#" onClick={showPopUp} className='btn btn--white btn-book'>Book now!</a>
                    </div>
                </div>

            </div>

            <div className='card'>

                <div className='card-side front front-2'>
                    <div className='card-picture-2'>
                        &nbsp;
                    </div>
                    <h4 className='card-heading'>
                        <span className='card-heading-span card-heading-span--2'>The Forest Hiker</span>
                    </h4>
                    <div className='card-details'>
                        <ul>
                            <li>7 day tour</li>
                            <li>Up to 40 people</li>
                            <li>6 tour guides</li>
                            <li>Sleep in provided tents</li>
                            <li>Difficulty: medium</li>
                        </ul>
                    </div>
                </div>

                <div className='card-side back back-2'>
                    <div className='card-cta'>
                        <div className='card--price-box'>
                            <p className='card-price-only'>Only</p>
                            <p className='card-price-value'>$497</p>
                        </div>
                        <a href="#" onClick={showPopUp} className='btn btn--white btn-book'>Book now!</a>
                    </div>
                </div>

            </div>

            <div className='card'>

                <div className='card-side front front-3'>
                    <div className='card-picture-3'>
                        &nbsp;
                    </div>
                    <h4 className='card-heading'>
                        <span className='card-heading-span card-heading-span--3'>The Snow Adventurer</span>
                    </h4>
                    <div className='card-details'>
                        <ul>
                            <li>5 day tour</li>
                            <li>Up to 15 people</li>
                            <li>3 tour guides</li>
                            <li>Sleep in provided tents</li>
                            <li>Difficulty: hard</li>
                        </ul>
                    </div>
                </div>

                <div className='card-side back back-3'>
                    <div className='card-cta'>
                        <div className='card--price-box'>
                            <p className='card-price-only'>Only</p>
                            <p className='card-price-value'>$897</p>
                        </div>
                        <a href="#" onClick={showPopUp} className='btn btn--white btn-book'>Book now!</a>
                    </div>
                </div>

            </div>

        </div>

        <div className='u-center-text u-margin-bottom-big tours'>
            <a href="#" className='btn btn-green'>Discover all tours</a>
        </div>

    </div>
  )
}

export default Tours
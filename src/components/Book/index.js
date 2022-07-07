import React from 'react'
import '../../sass/components/book/book.css'

const Book = () => {
  return (
    <section className='section-book'>
        <div className='book'>
            <div className='book-form'>
                <form action='#' className='form'>
                    <div className='u-margin-bottom-big'>
                        <h2 className='heading-secondary small'>
                            Start booking now
                        </h2>
                    </div>

                    <div className='form-group'>
                        <input id="name" type="text" className='form-input' placeholder='Full name' required/>
                        <label htmlFor="name" className='form-label'>Full name</label>
                    </div>

                    <div className='form-group'>
                        <input id="email" type="email" className='form-input' placeholder='Email address' required/>
                        <label htmlFor="name" className='form-label'>Email address</label>
                    </div>


                    <div className='up'>
                        <div className='form-group'>
                            <div className='form-radio-group'>
                                <input type="radio" className="form-radio-input" id="small" name="size"/>
                                <label htmlFor="small" className='form-radio-label'>
                                    <span className='form-radio-button'></span>
                                    Small tour group
                                </label>
                            </div>

                            <div className='form-radio-group'>
                                <input type="radio" className="form-radio-input" id="large" name="size"/>
                                <label htmlFor="large" className='form-radio-label'>
                                    <span className='form-radio-button'></span>
                                    Large tour group
                                </label>
                            </div>
                        </div>

                        <div className='form-group'>
                            <button className='btn btn-green no-border'>Next Step &rarr;</button>
                        </div>

                    </div>

                </form>
            </div>
        </div>
    </section>
  )
}

export default Book
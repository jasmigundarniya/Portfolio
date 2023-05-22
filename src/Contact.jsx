import React from 'react'
import { MdEmail, MdLocationPin } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'

const Contact = () => {
    return (
        <div className='Main3'>
            <div className="container m3">
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='mail'>
                            <a href="mailto:divyeshdomadiya1602@gmail.com">
                                <MdEmail className='me-1' style={{ fontSize: '20px', color: '#F6AD54' }} /> divyeshdomadiya1602@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='mail phone'>
                            <a href="tel:9157187778">
                                <BsFillTelephoneFill className='me-1' style={{ fontSize: '18px', color: '#F6AD54' }} /> +91 9157187778</a>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='mail location'>
                            <MdLocationPin className='me-1' style={{ fontSize: '21px', color: '#F6AD54' }} /> Surat, Gujarat.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
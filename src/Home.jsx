import React from 'react'
import { FaDownload } from 'react-icons/fa'
import { BsWhatsapp } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import pic1 from './assets/pic1.png'
import CV from './assets/CV.pdf';
import { WhatsappShareButton, WhatsappIcon, } from "react-share";

export const Home = () => {

    const shareUrl = 'https://www.pakkamarwadi.tk/';


    return (
        <>
            <div className='Main'>
                <div className="container m1">
                    <div className='row'>
                        <div className="col-lg-6">
                            <div className="welcome">WELCOME TO MY WORLD</div>
                            <div className='text'>
                                I Am Divyesh domadiya
                            </div>
                            <div className='name'> WordPress developer.</div>
                            <div className='desc1'>
                                I am a WordPress developer based in Surat. I do my work properly whatever skill I have is web design that I have all my own in it, and I do good web developers to show your business well in the world. We make such a website which can give satisfaction to our client and whatever is connected to the website, we support it first, and whatever we will beforehand, it is our work to provide you with first.
                            </div>
                            <div className='social' style={{ marginTop: '6%' }}>
                                <div><a href={CV}
                                    download="Divyesh Domadiya"
                                    target="_blank"
                                    rel="noreferrer">
                                    <button type="button" class="btn download">DOWNLOAD MY CV <FaDownload className='ms-2' /></button>
                                </a>
                                </div>

                                <div className='wp'>
                                    <WhatsappShareButton
                                        url={shareUrl}
                                        quote={'Title or jo bhi aapko likhna ho'}
                                        hashtag={'#portfolio...'}
                                    >
                                        <WhatsappIcon size={40} round={true} 
                                    className='wpicon'
                                    />
                                    </WhatsappShareButton>
                                    {/* <a href="">
                                        <BsWhatsapp className='wp' />
                                    </a> */}
                                </div>
                                <div>
                                    <a target='_blank' href="https://www.linkedin.com/in/divyesh-domadiya-bb2b30207/">
                                        <FaLinkedinIn className='in' /></a></div>

                            </div>

                        </div>

                        <div className='col-lg-1'></div>

                        <div className="col-lg-5">
                            <div className='image'>
                                {/* <a target="_blank" href='http://localhost:3000/static/media/pic.913d42fc75231bf0103f.jpg'> */}
                                <img src={pic1} className='img-fluid' role='button' alt='' />
                                {/* </a> */}
                            </div>
                        </div>

                    </div>

                    <div><hr className='line' /></div>

                </div>
            </div>
        </>
    )
}

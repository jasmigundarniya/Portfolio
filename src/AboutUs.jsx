import React from 'react'
import pic1 from './assets/pic1.png'
import CV from './assets/CV.pdf';
import { FaDownload } from 'react-icons/fa'


function AboutUs() {

    return (
        <>
            <div className='Main1'>
                <div className="container m2">
                    <div className='row'>

                        <div className="col-lg-5">
                            <div className='image1'>
                                {/* <a target="_blank" href='http://localhost:3000/static/media/pic.913d42fc75231bf0103f.jpg'> */}
                                <img src={pic1} className='img-fluid' role='button' alt='' />
                                {/* </a> */}
                            </div>
                        </div>

                        <div className='col-lg-1'></div>

                        <div className="col-lg-6">
                            <div className="welcome1 mb-2">About Me</div>

                            <div className='desc'>
                                I specialize in creating custom websites and web applications using the WordPress platform. With years of experience in web development and a passion for staying up-to-date with the latest trends and technologies, I am dedicated to delivering high-quality solutions that meet the unique needs of each of my clients. <br/>
                                From designing and developing custom themes and plugins to integrating third-party applications and optimizing site performance, I have the skills and expertise to help businesses and individuals achieve their online goals. Whether you're looking to launch a new website, revamp an existing one, or need ongoing support and maintenance, I am committed to delivering exceptional results that exceed your expectations. So if you're ready to take your online presence to the next level, let's work together to bring your vision to life.</div>
                            <div style={{ marginTop: '8%' }}>
                                <a href={CV}
                                    download="Divyesh Domadiya"
                                    target="_blank"
                                    rel="noreferrer">
                                    <button type="button" class="btn download">DOWNLOAD MY CV <FaDownload className='ms-2' /></button>
                                </a>
                            </div>

                        </div>




                    </div>

                    <div><hr className='line' /></div>

                </div>
            </div>
        </>
    )
}

export default AboutUs
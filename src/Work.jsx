import React from 'react'
import data from './data.js'

const Work = () => {


    return (
        <>
            <div className='Main2'>
                <div className='container'>

                    <div className='work'>Recent Work</div>
                    <div className='desc2'>I have had the opportunity to work on a diverse range of projects, from small personal blogs to large-scale e-commerce sites and everything in between.</div>



                    <div className='row portbottom'>
                        {data?.map((v, i) => {
                            return (
                                <>
                                    {/* <div className='col-lg-4 col-md-6 col-sm-12 workimagemain'>
                                        <a href={v?.href} target="_blank" rel="noreferrer">

                                            <img src={v?.img} className='img-fluid workimage' alt='' />
                                        </a>
                                        <div role='button' className='projectname'>{v?.detail}</div>
                                    </div> */}
                                    <div className='col-lg-4 col-md-6 col-sm-12 workimagemain'>
                                        <a href={v?.href} target="_blank" rel="noreferrer">

                                            <img src={v?.img} className='img-fluid workimage' alt='' />
                                        </a>
                                        <div role='button' className='projectname'>{v?.detail}</div>
                                    </div>
                                </>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Work
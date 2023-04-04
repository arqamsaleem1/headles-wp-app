import React, { Fragment, useEffect } from 'react';


const HomeBanner = ({acfFields}) => {

    return ( 
        <Fragment>
            <section className='banner-area' style={{backgroundImage : 'url('+ acfFields.banner_background_image +')' }}>

                <div className='container'>
                    <div className='banner-inner'>
                        <h1> {acfFields.banner_heading} </h1>
                        <h2> {acfFields.banner_caption} </h2>
                    </div>
                </div>
            </section>
            
        </Fragment>
    );
}
 
export default HomeBanner;
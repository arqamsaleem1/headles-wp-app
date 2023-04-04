import React, { Fragment, useEffect, useState } from 'react';
import { wpHeadless } from "../../api/base";
import Slider from "react-slick";


const DevelopersSection = ({developerHeading}) => {

    //const [developersAcfFields, setDevelopersAcfFields] = useState([]);
    const [developers, setDevelopers] = useState([]);
    const settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    useEffect(() => {
        wpHeadless.get('/wp/v2/developer')
            .then((jsonResponse => {
                    if(jsonResponse.status === 200){
                        //console.log(jsonResponse.data);
                        //console.log(developers);
                        setDevelopers(jsonResponse.data);
                    }
                }
            ))
            .catch((err => {
                console.log(err);
        }));
    }, [developers]);

    return ( 
        <Fragment>

            <section className="developers-section">
                <div className='developers-area-heading area-heading'>
                    <h2> {developerHeading} </h2>
                </div>
                <div className="container">
                    <Slider {...settings}>
                        {
                            developers.map( dev => <div className='slide-item'>
                                <div className='dev-image'>
                                    <img src={dev.acf.profile_image.url} alt="" />
                                </div>
                                
                                <div className='dev-caption'>
                                    <h3> {dev.title.rendered} </h3>
                                    <div className='dev-skills'>
                                        {dev.acf.skills.split(",").map(skill => <span className='single-skill'>{skill}</span>)}
                                    </div>
                                    <a href={dev.link}> View Profile</a>
                                </div>
                            </div>)
                        }
                    </Slider>
                </div>
            </section>

            {/* <Carousel>
                <div>
                    <img src="assets/1.jpeg" />
                    <p className="legend">Legend 1</p>
                </div>
            </Carousel> */}
        </Fragment>
     );
}
 
export default DevelopersSection;
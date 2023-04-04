import React, { Fragment} from 'react';
import HeaderLogo from './Logo';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'


library.add(fas, faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube, faPhone, faEnvelope);

const Header = ({themeSettings}) => {

    return ( 
        <Fragment>
            
            <header>

                <div className='top-header'>
                    <div className='container'>
                        <div className='contact-tab'>
                            <ul>
                                <li><a href={'tel:'+themeSettings.phone_number}><FontAwesomeIcon icon="fa-solid fa-phone" />{themeSettings.phone_number}</a></li>
                                <li><a href={'mailto:'+themeSettings.email}><FontAwesomeIcon icon="fa-solid fa-envelope" />{themeSettings.email}</a></li>
                            </ul>
                        </div>
                        <div className='social-tab'>
                            <ul>
                                <li><a href={themeSettings.facebook_link}><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a></li>
                                <li><a href={themeSettings.linkedin_link}><FontAwesomeIcon icon="fa-brands fa-linkedin" /></a></li>
                                <li><a href={themeSettings.linkedin_link}><FontAwesomeIcon icon="fa-brands fa-linkedin-in" /></a></li>
                                <li><a href={themeSettings.twitter_link}><FontAwesomeIcon icon="fa-brands fa-twitter" /></a></li>
                                <li><a href={themeSettings.instagram_link}><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
                                <li><a href={themeSettings.youtube_link}><FontAwesomeIcon icon="fa-brands fa-youtube" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='bottom-header'>
                    <div className='container'>
                        <HeaderLogo/>
                        <Navigation/>
                    </div>
                </div>
            </header>
        </Fragment>
     );
}
 
export default Header;
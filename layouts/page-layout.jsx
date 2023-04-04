import React, { Fragment, useEffect, useState } from 'react';
import { wpHeadless } from '../src/api/base';
import Header from '../src/components/Header';


const PageLayout = ({children}) => {
    const [allThemeSettings, setAllThemeSettings] = useState([]);


    useEffect(() => {
        wpHeadless.get('/wp/v2/custom/theme-settings')
            .then((jsonResponse => {
                    if(jsonResponse.status === 200){
                        setAllThemeSettings(jsonResponse.data);
                    }
                }
            ))
            .catch((err => {
                console.log(err);
        }));
    },[]);

  return ( 
    <Fragment>
      <div className='header-wrapper'>
        <Header themeSettings={allThemeSettings} />
      </div>
      <div className="content-div">
        {children}
      </div>
      
    </Fragment>
   );
}
 
export default PageLayout;
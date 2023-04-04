import React, { useEffect, useState } from 'react';
import { wpHeadless } from "../../api/base";
import AgencySection from './AgencySection';
import HomeBanner from './banner';
import DevelopersSection from './Developers';

const HomeContainer = () => {

    const [acfData, setAcfData] = useState({});

    
    useEffect(() => {
        wpHeadless.get('/acf/v3/pages/10')
            .then((jsonResponse => {
                    if(jsonResponse.status === 200){
                        setAcfData(jsonResponse.data.acf);
                    }
                }
            ))
            .catch((err => {
                console.log(err);
        }));
    }, []);
    
    return ( 
        <div className='content-div'>
            <HomeBanner acfFields = {acfData} />
            <DevelopersSection developerHeading = {acfData.developer_area_heading} />
            <AgencySection acfFields = {acfData} />
        </div>
     );
}
 
export default HomeContainer;
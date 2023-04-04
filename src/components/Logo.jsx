import { wpHeadless } from "../api/base";
import React, { useState } from 'react';
import Link from "next/link";

const HeaderLogo = () => {
    const [logo, setLogo] = useState('');

    wpHeadless.get('/wp/v2/custom/theme-settings/header_logo')
        .then((jsonResponse => {
                if(jsonResponse.status === 200){
                    setLogo(jsonResponse.data);
                }
            }
        ))
        .catch((err => {
            console.log(err);
    }));

    return ( 
        <div className="h-logo">
            <Link href='/'><img src={logo} alt="allshore-logo" /></Link>
        </div>
     );
}
 
export default HeaderLogo;
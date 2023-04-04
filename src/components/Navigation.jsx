import { wpHeadless } from "../api/base";
import React, { useState } from 'react';
import Link from "next/link";

const Navigation = () => {
    const [navItems, setNavItems] = useState([]);
    
    wpHeadless.get('/wp/v2/custom/menu/8')
        .then((jsonResponse => {
                if(jsonResponse.status === 200){
                    setNavItems(jsonResponse.data);
                }
            }
        ))
        .catch((err => {
            console.log(err);
    }));


    return ( 
        <div className="header-navigation">
            <ul className="menu">
                { navItems.map( item => <li className="menu-item" key={item.ID}> <Link href={item.url}><a>{item.title}</a></Link></li>)}
            </ul>
        </div>
     );
}
 
export default Navigation;
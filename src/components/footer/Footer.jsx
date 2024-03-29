import React from 'react';
import "./Footer.css";
// import {Popularfeatures,features,freeTools,Comapny,Costomers,Partners,socialIcons} from "./footer";
import { Link } from 'react-router-dom';


// **********************************footerjs********************************************

import {FaFacebookF} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import {BsYoutube} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {FaLinkedinIn} from "react-icons/fa"


 const Popularfeatures=[
    {
        name:"mens",
        path:"/"
    },
    {
        name:"womens",
        path:"/"
    },
    {
        name:"accessories",
        path:"/"
    },
    {
        name:"jwellery",
        path:"/"
    },
    {
        name:"shoes",
        path:"/"
    },
    {
        name:"All Proucts",
        path:"/"
    }
    
]


const features=[
    {
        name:"Sales Email Templates",
        path:"/"
    },
    {
        name:"Help Desk Software",
        path:"/"
    },
    {
        name:"Free Online Form Builder",
        path:"/"
    },
    {
        name:"Free Chatbot Builder",
        path:"/"
    },
    {
        name:"Free Live Chat Software",
        path:"/"
    },
    {
        name:"Marketing Analytics",
        path:"/"
    },
    {
        name:"Free Landing Page Builder",
        path:"/"
    }
    
   
]


 const freeTools=[
    {
        name:"BOBBI",
        path:"/"
    },
    {
        name:"BHFO",
        path:"/"
    },
    {
        name:"Merch",
        path:"/"
    },
    {
        name:"Seven Times Six",
        path:"/"
    },
    {
        name:"Pertemba US",
        path:"/"
    },
    {
        name:"Macy's",
        path:"/"
    },
    {
        name:"Authentic Designer Fashion",
        path:"/"
    }
 
]



 const Comapny=[
    {
        name:"About Us",
        path:"/"
    },
    {
        name:"Careers",
        path:"/"
    },
    {
        name:"Management Team",
        path:"/"
    },
    {
        name:"Board of Directors",
        path:"/"
    },
    {
        name:"Investor Relations",
        path:"/"
    },
    {
        name:"Blog",
        path:"/"
    },
    {
        name:"Contact Us",
        path:"/"
    }
    
]


 const Costomers=[
    {
        name:"Customer Support",
        path:"/"
    },
    {
        name:"Join a Local User Group",
        path:"/"
    }     
]


 const Partners=[
    {
        name:"All Partner Programs",
        path:"/"
    },
    {
        name:"Solutions Partner Program",
        path:"/"
    }
    
    
  
    
]



 const socialIcons=[
    {
        icon:<FaFacebookF/>,
        path:"/"
    },
    {
        icon:<BsInstagram/>,
        path:"/"
    },
    {
        icon:<BsYoutube/>,
        path:"/"
    },
    {
        icon:<BsTwitter/>,
        path:"/"
    },
    {
        icon:<FaLinkedinIn/>,
        path:"/"
    }   
]















const Footer = () => {
  
  return (
    <div className='footer_main_div'>
      <div className='footer_supports_div'>

        {/* ***********************************************popular feature**************************** */}
        <div className='feature'>
            <h4>Category</h4>
           {Popularfeatures.map((e)=>(
            <Link to={e.path} className="footerlink">
               <div key={e.name} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
        <div className='feature'>
            <h4>Brands</h4>
           {features.map((e)=>(
            <Link to={e.path} className="footerlink">
               <div key={e.name} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
        <div className='Footer_hr_line'></div>
        <div className='feature'>
            <h4>Popular Features</h4>
           {freeTools.map((e)=>(
            <Link to={e.path} className="footerlink">
               <div key={e.name} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
        <div className='feature'>
            <h4>Contact us</h4>
           {Comapny.map((e)=>(
            <Link to={e.path} className="footerlink">
               <div key={e.name} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
        <div>
        <div className='feature'>
            <h4>Customer Service</h4>
           {Costomers.map((e)=>(
            <Link to={e.path} className="footerlink">
               <div key={e.name} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
       
        <div className='feature'>
            <h4>Popular Features</h4>
           {Partners.map((e)=>(
            <Link to={e.path} className="footerlink">
               <div key={e.name} className="footer_feature_single-div">{e.name}</div>
            </Link>
         
           ))}
        </div>
        </div>
      </div>

  
      {/* ****************************************social connect********************************************* */}
     
     {/* <hr/> */}
      <div className='footer_social_icons'>
      
            {socialIcons.map((e)=>(
               <Link to={e.path} className="footer_icons_link">
                    <div className='icons'>{e.icon}</div>
               </Link>
          
            ))}
      </div>
      <div className='footer_hub_logo'>
         <img
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLML1ibybQ73h18sO174RwB0Ztb-TVz_czqQ&usqp=CAU"
         width="100%"
         height="100%"
         />
      </div>
      <div className='footer_copyright'>Copyright © 2022 E-Shop, Inc.</div>
      <div className='footer_stuff'>
         <div className='footer_text'>Legal Stuff</div>
         <div className='vrline'></div>
         <div className='footer_text'>PrivacyPolicy</div>
         <div className='vrline'></div>
         <div className='footer_text'>Security</div>
         
      </div>
   
    </div>
  )
}

export default Footer
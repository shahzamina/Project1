import React from 'react'
import { Link } from 'react-router-dom'
import Contact from './Contact'
const Contform = () => {
    const img='/images/home.jpg'
const ch='Contact Form'
  return (
    <>
<div className='dyn'>
 <div className='oth-ser' style={{height:"35vh"}} >
          <h1  className='mt-5 text-black ' style={{wordSpacing:'1px',fontFamily:'Lato'}}>Get In Touch with us </h1>
        
</div>


    <div style={{marginTop:'6%'}}>
       <Contact  img={img} ch={ch}/>


    </div>

       <iframe
 
            title="Google Map"
            src="https://maps.google.com/maps?q=33.5417561,73.1740364&z=15&output=embed"
          
            className='m-wid mb-3 mymap w-ser'
          
            height="400"
            
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe> 
          </div>
    </>
  )
}

export default Contform

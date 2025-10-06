import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
    <div className='dyn footer bg-black pb-1' style={{boxShadow: '0px -2px 4px rgb(18, 150, 184)'}}>

    <div className='d-flex flex-column flex-md-row'>
      <div className='d-none d-md-block' style={{width:'28%',marginLeft:'4%', marginTop:'4%'}}>
   <h3 className=' text-white  mb-3' style={{wordSpacing:'1px',fontFamily:'Lato'}}>Window Innovationz Best Fabricated uPVC & Aluminium</h3>
        <p className='d-none d-md-block w-75 text-white mt-1 mb-3'   style={{fontFamily:'Lato', wordSpacing:'0px',textAlign:'justify'}}>
Our advanced software is designed to revolutionize your business operations. With its powerful features  and
user-friendly interface, enhance customer experiences, and boost your overall efficiency.
            </p>
            <div className='d-none d-md-block d-flex flex-row p-wid gap-4 mb-4 '>
                <Link  to="https://wa.me/923215599408" 
  target="_blank" 
  rel="noopener noreferrer" ><i style={{fontSize:"35px"}} class="ft-icon fa-brands fa-whatsapp text-success"></i></Link>
                <Link to='https://www.facebook.com/share/1FEFA9gd4V/' target='blan'><i style={{fontSize:"35px"}} class="fa-brands fa-facebook text-primary"></i></Link>
            
            </div>
            
      </div>

<div className="f-map" style={{ position: 'relative', height: '330px' }}>
  <iframe
    title="Google Map"
    src="https://maps.google.com/maps?q=33.5417561,73.1740364&z=15&output=embed"
    className='m-wid mb-3 mymap w-ser'
    height="330"
    style={{ pointerEvents: 'none' }} // disable clicks on iframe
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

  <div
    onClick={() => window.open('https://maps.google.com/maps?q=33.5417561,73.1740364&z=15', '_blank')}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      cursor: 'pointer'
    }}
  />
</div>



      <div className='c-wid mb-5' >
        <h1 style={{fontFamily:'Lato',wordSpacing:'1px'}} className='con-mt text-white'>Contact Us</h1>
        <div className='mt-4'><i style={{fontSize:'28px'}} class="fa-solid fa-location-dot text-danger" ></i><span className='my-btn ' style={{wordSpacing:'1px',fontFamily:'Lato'}}>Plot#2, Near Sihala Police Foundation, Kahuta road, Islamabad</span></div>
        <div className='mt-3'><i style={{fontSize:'28px'}} class="fa-solid fa-phone text-white"></i><span className='my-btn ' style={{wordSpacing:'1px',fontFamily:'Lato'}}>+923215599408 +923035599943</span></div>
        <div className='mt-3'><i style={{fontSize:'28px'}} class="fa-solid fa-envelope text-warning" ></i ><span className='my-btn' style={{wordSpacing:'1px',fontFamily:'Lato'}}>Window Innovationz678@gmail.com</span></div>
         
      </div>

    
    </div>
  
  <div>
     <p className='text-white  address-text'style={{wordSpacing:'0px',fontFamily:'Lato',marginLeft:'35%'}}>© 2025. Design by Koncept Software Solution</p>
  </div>
    </div>
  )
}

export default Footer

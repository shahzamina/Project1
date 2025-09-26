import React from 'react'
import Gallery from './Gallery'


const Galcom = () => {
     const images=[
      '/images/gal1.jpg',
      '/images/gal2.jpg',
      '/images/gal3.jpg',
      '/images/gal4.jpg',
      '/images/gal5.jpg',
      '/images/gal6.jpg',
      '/images/gal7.jpg',
      '/images/gal8.jpg',
      '/images/gal9.jpg',
      '/images/gal10.jpg',
      '/images/gal11.jpg',
      '/images/gal12.jpg',
      '/images/gal13.jpg',
      '/images/gal14.jpg',
      '/images/gal15.jpg',
      '/images/gal16.jpg',
      '/images/gal17.jpg',
  
  ]
  return (
    <div>
         <div className='oth-ser' style={{height:"35vh"}} >
          <h1  className='mt-5 text-black ' style={{wordSpacing:'2px',fontFamily:'Lato'}}>OUR GALLERY</h1>
</div>
      <Gallery images={images}  />
    </div>
  )
}

export default Galcom

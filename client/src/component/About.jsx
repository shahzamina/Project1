import React, { useEffect, useState } from 'react'
import Gallery from './Gallery'

const About = () => {
const [index,currentIndex]=useState(0)
const[curIndex,setcurIndex]=useState(0)
 

  const img=[
    '/images/c1.png',
     '/images/C2.webp',
      '/images/c3.jpg',
       '/images/c4.webp',
        '/images/c5.jpg',
        
  ]
const image=[
   {
    img: '/images/L2.png',
    h:'DECEUNINCK',
    p:'For over 80 years, Deceuninck has been a global leader in innovative, high-performance solutions for sustainable living. The company specializes in the design, development, and distribution of advanced window, door, and building profiles that seamlessly combine durability, efficiency, and aesthetics. With a strong commitment to sustainability, Deceuninck’s products are engineered to deliver superior insulation, enhanced comfort, and long-term energy savings, while supporting modern architectural standards. Their dedication to innovation ensures solutions that meet both present and future needs in residential, commercial, and industrial projects. By partnering with Deceuninck, we align with a brand that not only sets international benchmarks for quality and design but also shares our vision for building a more sustainable and future-proof world.'
   },
    { 
      img:'/images/L3.jpg',
          h:'THERMAL BREAK',
       p:'We are proud to partner with Thermal Break, a trusted name in high-performance aluminium solutions. Specializing in advanced insulating profiles, Thermal Break is renowned for delivering systems that ensure energy efficiency, durability, and superior performance in windows, doors, and facades. Through this partnership, we provide our clients with products that not only enhance comfort and climate control but also significantly reduce energy costs and carbon emissions. With a strong reputation for innovation and quality, Thermal Break offers both standard and customized profile solutions, meeting the needs of projects of all sizes. By working with Thermal Break, we ensure that our customers benefit from the latest advancements in aluminium insulation systems, creating sustainable and future-ready spaces.'
    },
     {
      img: '/images/L1.png',
          h:'YAGMURPEN',
       p:'We are honored to collaborate with YAGMURPEN PVC, a leading manufacturer of high-quality PVC door and window profiles. Established in 2002 and steadily expanding since 2015, YAGMURPEN has built a strong reputation for producing durable, energy-efficient, and environmentally friendly solutions that meet strict TSE standards. Their wide-ranging product portfolio includes Rain Line, Nevra, Dalya, Tuana, Zara, Sliding, and Auxiliary Profiles, offering over 2,200 unique combinations. With advanced manufacturing facilities, accredited testing, and a commitment to quality, YAGMURPEN delivers solutions that combine strength, style, and sustainability. By partnering with YAGMURPEN, we ensure that our customers benefit from innovative designs, reliable performance, and long-term satisfaction across all types of projects.'
     },
      
        
  ]

  const next=()=>{
      currentIndex((index+1)%image.length)
}

const pre=()=>{
  currentIndex(((image.length+index)-1)%image.length)
}

const imgs=[
  '/images/gr1.jpg',
  
  '/images/gal2.jpg',
  '/images/gal6.jpg',
  '/images/gal10.jpg',
  '/images/gal12.jpg'
        
]
 
const visible=[image[index]]

useEffect(()=>{
  const interval=setInterval(()=>{
   currentIndex((pre)=>(pre+1)%image.length)
  
  },5000)
    return ()=>clearInterval(interval)
},[visible.length])

useEffect(()=>{
  const interval=setInterval(()=>{
   setcurIndex((pre)=>(pre+1)%imgs.length)
  
  },5000)
    return ()=>clearInterval(interval)
},[imgs.length])
  return (
    <>
    



    <div className=' dyn about'>
       <div className='oth-ser' style={{height:"35vh"}} >
          <h1  className='mt-5 text-black  ' style={{wordSpacing:'1px',fontFamily:'Lato'}}>ABOUT US </h1>
        
</div>

 <div className='d-flex flex-column flex-md-row  gap-1 ' style={{marginTop:'6%'}}>
        <div className='dyn a-img'>
            <h2 className='text-center ' style={{marginTop:'10%', objectFit:'cover',wordSpacing:'1px',fontFamily:'Lato', fontWeight:'bold'}}>Window Innovationz best fabricated </h2>
             <h3 className='text-center p-1' style={{ objectFit:'cover',fontFamily:'Lato',wordSpacing:'1px', fontWeight:'bold'}}>uPVC & Aluminium
Widows Doors System</h3>
            <p className='p-3 mt-3 mx-4 ' style={{wordSpacing :'0px',fontFamily:'Lato', textAlign:'justify', lineHeight:'35px'}}>We specialize in premium uPVC and Aluminium windows and doors that combine durability, elegance, and modern functionality. From our manufacturing facility in the Rawat Industrial Area, our foreign-qualified technicians produce premium windows and doors with unmatched benefits: superior sound insulation (30–40 dB reduction), excellent energy efficiency, complete termite resistance, 20–35 year durability, minimal maintenance requirements, and enhanced fire safety.

Our product range includes casement windows, sliding systems, tilt & turn windows, doors, and innovative bi-fold solutions that combine European quality standards with local expertise. Whether for residential homes, commercial buildings, or hospitality projects across Pakistan, Unitherm's commitment to innovation, quality, and sustainability makes us the trusted choice for discerning customers seeking premium window and door systems.
            </p>
           
        </div>

        <div className='d-none d-md-flex image-container a-img dyn'>
                <img  className=' mb-4' style={{height:'500px',marginTop:'15%'}} src='/images/g2.jpg' alt='error' />
        </div>
      </div>

      
 <div className='d-flex flex-column flex-md-row gap-3' style={{marginTop:'3%'}}>
   <div className='dyn mis-left'>
            <h2 className='text-center ' style={{wordSpacing:'1px',marginTop:'10%', objectFit:'cover',fontFamily:'Lato', fontWeight:'bold'}}>Mission Statement</h2>
             
            <p className='p-3 mt-3 mx-4' style={{ wordSpacing:'1px',fontFamily:'Lato', textAlign:'justify', lineHeight:'35px'}}>
              At Window Innovationz, our mission is to redefine modern living and working spaces by delivering premium-quality uPVC and Aluminium window and door systems. With a focus on durability, energy efficiency, and cutting-edge design, we create solutions that enhance comfort, security, and style. We are committed to providing low-maintenance, eco-friendly products that meet the demands of both residential and commercial projects while contributing to a more sustainable future.
            </p>
           
        </div>
        <div className='dyn mis-right'>
            <h2 className='text-center ' style={{marginTop:'10%', wordSpacing:'1px',objectFit:'cover',fontFamily:'Lato', fontWeight:'bold'}}>Vision Statement</h2>
             
            <p className='p-3 mt-3 mx-4' style={{ wordSpacing:'0px',fontFamily:'Lato', textAlign:'justify', lineHeight:'35px'}}>
              Our vision is to become the most trusted name in uPVC and Aluminium window and door fabrication. By combining advanced technology with expert craftsmanship, we aim to set new benchmarks for quality, innovation, and customer satisfaction. Window Innovationz aspires to transform architecture across Pakistan, offering products that deliver long-lasting performance, superior insulation, and timeless elegance.
            </p>
           
        </div>

       
      </div>

<h2 className='text-center' style={{wordSpacing:'1px', marginTop:'8%', fontFamily:'Lato',fontWeight:'bold'}}>Our Dealings with Companies</h2>
 <div className=' car-back-img pb-2  dyn d-flex flex-row' style={{marginBottom:'10%',position:'relative', backgroundImage: `url(${imgs[curIndex]})`}}>
  {
    visible.map((item,index)=>(
        <div style={{zIndex:'2'}}  key={index}>
      <i
      
        onClick={pre}
        
        className="pre fa-solid fa-chevron-left carousel-icon left"
      ></i>
      <img className='d-image'  src={item.img} alt={item.h} 
      />
     {/* <h3>{item.h}</h3> */} 
      <p className='d-par' style={{fontFamily:'Lato',wordSpacing:'0px'}}>{item.p}</p>

       <i
        onClick={next}
       
        className="fa-solid fa-chevron-right carousel-icon right"
      ></i>
    </div>
    ))
  }
 </div>





<div className='dyn ' style={{backgroundColor:"rgba(248, 244, 244, 1)" , paddingTop:'65px', paddingBottom:'80px', marginBottom:'5%' , marginTop:'6%'}}>
<h2 className='mb-5' style={{ wordSpacing:'1px',textAlign:'center',fontFamily:'Lato', fontWeight:'bold'}}>OUR CLIENTS</h2>
<div className='d-flex flex-column flex-md-row  gap-5 justify-content-center'>
  {
    img.map((c,id)=>(
      <img
      className='c-abo'
      style={{height:'100px'}}
      key={id}
      src={c}
      alt={`img${id}`}
      />
    ))
  }
</div>
 </div>

 
    </div>
    </>
  )
}

export default About

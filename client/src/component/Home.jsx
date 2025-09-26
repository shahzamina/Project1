import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Card from './Card'
import Services from './Services'
import Contact from './Contact'

const Home = () => {
const img='/images/uw7.jpg'
const ch='Contact Form'
  const h='uPVC WINDOWS AND DOORS SERVICES'
 const carousal=[
        {
            id:1,
              img:'/images/sd1.gif',
            title:'Sliding Doors',
            p:'uPVC sliding doors create a seamless connection between indoors and outdoors with smooth, space-saving operation. They combine strength and style while offering wide, unobstructed views.',
      
        
        },
         {
            id:2,
           img:'/images/sw1.gif',
            title:'Sliding Window',
            p:'uPVC sliding windows offer a sleek, space-saving design with effortless horizontal movement. They provide wide views and excellent insulation, making them perfect.',
     
         
        },
         { id:3,
           img:'/images/uw2.webp',
            title:'Openable Window',
            p:'uPVC sliding windows offer a sleek, space-saving design with effortless horizontal movement. They provide wide views and excellent insulation, making them perfect.',
        
       
          
        },
        
         {
            id:4,
           img:'/images/gd4.jpg',
               
            title:'Glass Doors',
            p:'Our uPVC glass doors combine modern aesthetics with strength and insulation. They offer a perfect balance of style, security, and durability while allowing natural light to brighten your interiors.',
   
            
        },


         
   {
            id:5,
            img:'./images/gwin.jpg',
            title:'Glass Window',
            p:'Enhance your space with premium glass windows that blend elegance, durability, and natural light. Designed for modern living, our solutions ensure energy efficiency, security, and timeless style.',
         
          
        },
         {
            id:6,
              img:'/images/ven11.jpeg',
            title:'Ventilator',
            p:'Top Hung uPVC ventilator windows are designed to improve airflow and natural light without compromising privacy. Their durable build and smooth operation make them ideal for utility areas.',
        
              
          
        },
            {
            id:6,
             img:'/images/s1.jpg',
            title:'Glass Skylight',
            p:'Skylight is a roof-mounted glass panel that allows natural sunlight to brighten interiors. It enhances energy efficiency while adding a modern and spacious feel to any space for home and offices.',
         
        },
        

    ]
     const carousal1=[
            {
                id:1,
                img:'./images/sc2.jpeg',
                title:'Glass Shower Cabin',
                p:'Our glass shower cabins are designed to transform your bathroom into a space of comfort and luxury. Crafted with high-quality tempered glass and sleek fittings, they offer both safety and style. With easy-to-clean surfaces and durable construction, our cabins ensure long-lasting performance while creating a modern, spacious feel in any bathroom.',
              
            },
             {
                id:2,
                img:'/images/st3.webp',
                title:'Glass Stairs Railing',
                p:'Our glass stair railings are designed to maximize light and space, making your home or office look brighter. With minimalist designs and flawless finishes, they complement both contemporary and classic interiors, offering a perfect balance of sophistication and functionality. Our railings redefine style without compromising on strength.',
              
            },
              {
                id:3,
                img:'/images/st5.jpg',
                title:'Glass Terrace Railing',
                p:'Transform your terraces and balconies with our modern glass railings that offer uninterrupted panoramic views while ensuring safety and durability. The sleek design enhances outdoor living spaces, creating an elegant and contemporary look for both homes and commercial projects. Our glass terrace railings are durable, low-maintenance, and long-lasting.',
            
            }
          ]
          const h1='Other Services'
  return (
    <>
    <div className='home dyn position-relative' >
    <div className='home-content position-absolute mt-4'>
      <h2 >Window Innovations Best Fabricated uPVC & Aluminium <br/><span > Windows Doors System</span></h2>
      <p >Discover the perfect blend of style, durability, and energy efficiency with our uPVC and Aluminium windows doors system. Designed to enhance your living spaces, our products provide superior insulation, low maintenance, and long-lasting performance while complementing modern and traditional architecture alike. Whether for homes or commercial projects, we deliver innovative solutions that bring comfort, security, and elegance to every space. </p>
      

    </div>
    </div>


  <Card h={h} carousal={carousal}  />
 <Services carousal1={carousal1} h1={h1} />
 <Contact  img={img} ch={ch}/>

    </>
  )
}

export default Home

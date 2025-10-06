import React from 'react'
import Serdet from './Serdet'

const Gdoor = () => {
    const images=[
       { img:'images/gd1.jpg'},
{ img:'images/gd.jpg'},
{ img:'images/gd2.jpg'}
    ]
  const head='uPVC OPENABLE GLASS DOORS'
    const para='Our openable uPVC and Aluminium glass doors combine modern design with superior functionality. Crafted for durability, energy efficiency, and ease of use, these doors allow smooth ventilation and natural light while ensuring security and insulation. Perfect for homes and commercial spaces, they bring elegance, practicality, and long-lasting performance to any interior or exterior setting. Our openable UPVC and Aluminium glass doors combine modern design with superior functionality. Crafted for durability, energy efficiency, and ease of use, these doors allow smooth ventilation and natural light while ensuring security and insulation. Perfect for homes and commercial spaces, they bring elegance, practicality, and long-lasting performance to any interior or exterior setting' 
    const img= '/images/gd4.jpg'
     const p='Why Choose uPVC Openable Doors from Window Innovationz upvc Windows & Doors?'

    const h =[
  "uPVC is an excellent insulator, making it an ideal choice for doors. With superior thermal performance and reduced heat transfer, your home stays comfortable year-round while helping you save on energy bills.",
  
  "uPVC is incredibly robust and resistant to weather, rot, and corrosion. Our doors are built to last, requiring minimal maintenance over their lifetime, ensuring long-term durability.",
  
  "Safety is a paramount concern for any homeowner. Our uPVC Glass Doors feature multi-point locking systems, providing a high level of security and peace of mind for your family and belongings.",
  
  "The elegant and sleek design of uPVC Glass Doors adds sophistication to your home. Transparent glass allows natural light to flood your living spaces, creating a bright and welcoming atmosphere.",
  
  "Living Standard offers a wide range of design options, including various glass patterns, colors, and hardware, allowing you to customize your UPVC Glass Door to perfectly match your home’s unique style.",
  
  "uPVC doors have excellent sound insulation properties, helping to create a quieter and more peaceful interior environment, ideal for homes in busy or noisy areas.",
  
  "These doors are easy to clean and maintain, with no need for regular repainting or resealing, making them a convenient and low-maintenance choice for modern living."
]

    
  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img} p={p} h={h}
       />
    </div>
  )
}

export default Gdoor

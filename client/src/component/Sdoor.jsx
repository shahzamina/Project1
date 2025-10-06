import React from 'react'
import Serdet from './Serdet'

const Sdoor = () => {
    const images=[
       { img:'images/sd1.gif'},
{ img:'images/sd2.gif'},
{ img:'images/sd5.gif'}
    ]

      const head='uPVC SLIDING GLASS DOORS'
    const para='Our sliding glass doors create a seamless connection between indoor and outdoor spaces, offering smooth operation, abundant natural light, and a modern aesthetic. Built with durable uPVC or Aluminium frames, they provide excellent insulation, easy maintenance, and a stylish solution that enhances both functionality and elegance in any setting. Crafted with durable uPVC or aluminium frames and fitted with high-quality glass, our sliding doors are built for long-lasting performance. They provide excellent insulation to keep interiors comfortable in every season, while their low-maintenance design ensures they remain as stylish and functional as the day they were installed.'
    const img= '/images/sd1.gif'
     const p='Why Choose uPVC Sliding Doors from Window Innovationz uPVC Windows & Doors?'
   const h=[
  "Our uPVC Sliding Glass Doors create a seamless connection between indoor and outdoor spaces, offering smooth operation, abundant natural light, and a modern aesthetic.",
  
  "Built with durable uPVC or Aluminium frames, these doors provide excellent insulation, keeping your home energy-efficient while maintaining comfort.",
  
  "The sliding mechanism allows effortless opening and closing, saving space and providing convenience in both residential and commercial settings.",
  
  "Designed for low maintenance, these doors resist warping, rust, and corrosion, ensuring long-lasting performance with minimal upkeep.",
  
  "Available in a variety of sizes, finishes, and glass options, you can customize the sliding doors to perfectly match your interior or exterior design.",
  
  "The robust locking system enhances security, giving you peace of mind without compromising on style.",
  
  "Sliding doors improve ventilation and maximize natural light, creating a bright and airy living environment.",
  
  "Eco-friendly materials are used in construction, making them a sustainable and environmentally responsible choice."
]

  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img} p={p} h={h}
       />
    </div>
  )
}

export default Sdoor

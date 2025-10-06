import React from 'react'
import Serdet from './Serdet'

const Grail = () => {
    const images=[
       { img:'images/rail3.jpg'},
{ img:'images/r1.jpg'},
{ img:'images/rail2.jpg'}
    ]

      const head='GLASS TERRACE RAILING'
    const para='At Window Innovationz, we design and fabricate high-quality glass terrace railings that bring a modern, elegant touch to your exteriors. Our durable and weather-resistant railings ensure safety without compromising style, making them ideal for balconies, staircases, and terraces in Islamabad homes and commercial spaces. ur uPVC glass railings combine strength, elegance, and modern design. Perfect for balconies, staircases, and terraces, they provide a clear, open view while maintaining maximum safety. With durable uPVC frames and tempered glass, these railings resist weather, corrosion, and wear making them a long-lasting choice for homes and businesses in Islamabad.'
    const img= '/images/gr1.jpg'
   const p='Why Choose Glass Railing from Window Innovationz uPVC Windows & Doors?'
  const h=[
  "Glass railings provide a sleek and modern look, enhancing the aesthetics of balconies, staircases, and terraces.",
  "The use of toughened or laminated safety glass ensures durability and minimizes the risk of breakage.",
 
  "These railings are designed to withstand harsh weather conditions without warping or corroding.",
  "The transparent design allows for unobstructed views while maintaining safety and style.",
  "Easy to clean with just water and a cloth, requiring no painting, polishing, or special treatments.",
  "Available in various styles and finishes, allowing customization to match modern or traditional architecture.",
  "Eco-friendly material choice, as uPVC is recyclable and supports sustainable construction practices."
]
 
   
    
  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img}  p={p} h={h}
       />
    </div>
  )
}

export default Grail

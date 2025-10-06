import React from 'react'
import Serdet from './Serdet'

const Swin = () => {
    const images=[
       { img:'images/sw11.gif'},
{ img:'images/sw4.gif'},
{ img:'images/uPVCwin1.webp'}
    ]

      const head='uPVC SLIDING WINDOWS'
    const para='Our sliding glass windows combine elegance and functionality, offering smooth operation and effortless ventilation. Crafted with uPVC or Aluminium frames, they ensure durability, energy efficiency, and low maintenance while maximizing natural light and providing a modern, sleek look for any home or commercial space. Crafted with premium uPVC or aluminium frames, these windows are built to last offering exceptional durability, energy efficiency, and low maintenance. The sleek sliding mechanism ensures easy handling, while the minimalist design complements any interior or exterior style. Designed for smooth operation and effortless ventilation, they allow you to enjoy fresh air and natural light without compromising on style or performance.'
    const img= '/images/sw3.gif'
     const p='Why Choose uPVC Sliding Windows from Window Innovationz uPVC Windows & Doors?'
 const h= [
  "Our uPVC sliding windows are engineered to keep your home comfortable year-round. The multi-chambered frame design and high-quality weatherstripping prevent drafts and heat loss, making them excellent insulators and helping reduce heating and cooling costs.",
  
  "uPVC sliding windows are incredibly low maintenance. They are resistant to rot, rust, and corrosion, and do not require repainting or staining. A simple wipe-down with a damp cloth keeps them looking brand new for years.",
  
  "Enjoy the convenience of sliding windows that glide effortlessly along their tracks. Islamabad uPVC Windows & Doors uPVC sliding windows are designed for smooth, easy operation, allowing you to enjoy fresh air and natural light without any hassle.",
  
  "uPVC windows are highly durable and impact-resistant, providing strong security against intrusion. Their robustness ensures your investment will last for decades, giving you long-term peace of mind.",
  
  "Our uPVC sliding windows offer superior noise reduction, creating a quieter and more peaceful environment inside your home, even in busy or noisy neighborhoods.",
  
  "Islamabad uPVC Windows & Doors provides a wide range of customization options for sliding windows. You can choose from different frame colors, grid patterns, and hardware finishes to match your style and preferences, whether classic, bold, or contemporary.",
  
  "We are committed to sustainability. uPVC is a recyclable material, and our manufacturing process reduces waste and conserves resources. Choosing Living Standard’s uPVC sliding windows enhances your living space while contributing to a greener, eco-friendly future."
]

    
  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img}  p={p} h={h}
       />
    </div>
  )
}

export default Swin

import React from 'react'
import Serdet from './Serdet'

const Gscab = () => {
    const images=[
       { img:'images/sc1.jpeg'},
{ img:'images/sc5.jpeg'},
{ img:'images/sc4.jpeg'}
    ]
      const head='GLASS SHOWER CABIN'
    const para='At Window Innovationz, we specialize in premium Glass Shower Cabins that combine modern design with durability. Our fabricated cabins are crafted to provide a sleek, waterproof, and hygienic solution for bathrooms, ensuring both style and functionality. Located in Islamabad, we offer customized sizes and designs to perfectly fit your space, delivering comfort, elegance, and long-lasting performance. The transparency of glass stairs introduces a sense of openness, allowing natural light to flow freely and creating brighter, more spacious interiors. Ideal for homes, offices, and commercial spaces aiming for a sleek and contemporary aesthetic, these stairs are engineered with precision to deliver not only stunning visual appeal but also lasting strength, stability, and safety.'
    const img= '/images/sc2.jpg'
const p='Why Choose Glass Shower Cabins from Window Innovationz uPVC Windows & Doors?'
   const h=[
  "Our shower cabins are crafted with both elegance and functionality in mind. They come in a wide range of designs — from sleek, frameless, and minimalist cabins for a modern look, to more detailed and decorative options for those who prefer a classic feel. With options in glass finishes, frame colors, and handle styles, you can choose a design that blends seamlessly with your bathroom’s existing décor while also adding a touch of luxury.",
  
  "Shower cabins are an excellent solution for bathrooms of all sizes, especially compact ones. Their self-contained structure means they don’t require additional space like traditional shower setups. This helps you make the most of your bathroom layout, leaving more room for movement and storage. They’re perfect for maximizing functionality without compromising on comfort or style.",
  
  "Unlike traditional bathroom remodels that require heavy tiling, plumbing, and weeks of labor, uPVC shower cabins are designed for quick and straightforward installation. Most units are pre-fabricated with integrated plumbing and drainage, reducing both time and costs. This makes them a convenient choice for homeowners who want an upgrade with minimal disruption to their daily lives.",
  
  "Our modern shower cabins are more than just enclosures — they are designed to offer a spa-like experience. Many models come with built-in LED lighting that creates a relaxing ambiance, thermostatic controls that maintain a perfect water temperature, digital touch panels for easy operation, and even massage jets to relieve stress and fatigue. These advanced features transform your shower into a personalized wellness retreat.",
  
  "At Islamabad uPVC Windows & Doors, durability is a top priority. Our shower cabins are built with high-quality uPVC frames and toughened safety glass that resist wear, corrosion, and moisture damage. They are designed to withstand daily use while maintaining their strength and beauty for years. With minimal maintenance, your shower cabin will continue looking stylish and functioning reliably long-term."
]



    
  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img} p={p} h={h}
       />
    </div>
  )
}
export default Gscab

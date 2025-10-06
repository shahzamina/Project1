import React from 'react'
import Serdet from './Serdet'

const Gstairs = () => {
    const images=[
       { img:'images/sta4.jpg'},
{ img:'images/stairs.jpg'},
{ img:'images/stairs1.jpg'}
    ]
      const head='GLASS STAIRS RAILING'
    const para='At Window Innovationz, we design and fabricate high-quality glass stairs are a modern architectural statement, designed to add openness, light, and elegance to any space. Crafted with premium tempered glass and robust fittings, they offer the perfect balance of safety, durability, and contemporary style. Whether for homes, offices, or commercial spaces, glass stairs create a sleek and spacious look that enhances both functionality and aesthetics. Perfect for homes, offices, and commercial spaces, our glass stairs redefine interiors with a bold, modern edge. Combining transparency with strength, they create a striking visual feature that is both safe and stylish. The transparency of glass stairs creates a sense of spaciousness and light flow, making them ideal for homes, offices, and commercial environments seeking a sleek.'
    const img= '/images/gst.jpg'
   const p='Why Choose Glass Stairs Railing from Window Innovationz uPVC Windows & Doors?'
    const h=[
  "Glass stairs add a striking modern aesthetic to homes and commercial spaces, creating a sense of openness and elegance.",
  "Made with toughened or laminated glass, they are designed to handle heavy loads while ensuring safety and durability.",
  "Their transparent design allows natural light to flow through, making interiors look brighter and more spacious.",
  "Glass staircases can be paired with aluminium framing for added strength, stability, and style.",
  "They are resistant to moisture, rust, and corrosion, making them a long-lasting and low-maintenance option.",
  "Easy to clean with just a simple wipe, keeping the stairs looking new and glossy with minimal effort.",
  "Customizable in design, thickness, and finish, allowing you to choose frosted, clear, or tinted glass for the desired look.",
  "An eco-friendly option since the glass and uPVC materials are recyclable, supporting sustainable architecture."
]

  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img} p={p} h={h}
       />
    </div>
  )
}

export default Gstairs

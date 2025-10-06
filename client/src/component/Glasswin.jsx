import React from 'react'
import Serdet from './Serdet'

const Glasswin = () => {
    const images=[
       { img:'images/aw6.jpeg'},
{ img:'images/aw2.jpg'},
{ img:'images/aw1.jpeg'}
    ]

      const head='uPVC Openable Windows'
    const para=' uPVC and Aluminium glass openable windows offer a sleek, space-saving solution with smooth, effortless operation. Designed with uPVC and Aluminium frames, they provide excellent insulation, durability, and low maintenance. Ideal for modern homes and commercial spaces, these windows maximize natural light, enhance ventilation, and add a clean, contemporary aesthetic to any interior or exterior setting. Crafted with durable uPVC or aluminium frames, they deliver outstanding insulation, weather resistance, and long-term durability while requiring minimal maintenance. Their versatility allows for improved ventilation, abundant natural light, and enhanced energy efficiency, ensuring year-round comfort and performance.Our uPVC and Aluminium glass openable windows are designed to combine modern aesthetics with superior functionality.'
    const img= '/images/win.jpg'
    const p='Why Choose uPVC Openable Windows from Window Innovationz uPVC Windows & Doors?'

    const h = [
  "uPVC is resistant to moisture, termites, and rust, which means the windows maintain their shape and quality for years without frequent repairs or replacements.",
  "The airtight design prevents heat loss in winter and blocks excess heat in summer, keeping your home comfortable while lowering energy bills.",
  "Multi-point locking systems provide security by locking the window at several points, making it much harder to force open.",
  "Tight seals and insulation reduce outside noise from traffic or neighbors, creating a calm indoor environment.",
  "These windows are available in multiple styles like casement, awning, and tilt & turn, allowing flexibility in design and function.",
  "They require very little maintenance and can be kept looking new with a quick wipe using a damp cloth.",
  "UV protection in the glass and frame prevents furniture, flooring, and décor from fading or sun damage.",
  "Since uPVC is recyclable, it is an eco-friendly choice that supports sustainable living."
];
  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img}  p={p} h={h}
       />
    </div>
  )
}

export default Glasswin

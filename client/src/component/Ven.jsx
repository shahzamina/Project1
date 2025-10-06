import React from 'react'
import Serdet from './Serdet'

const Ven = () => {
    const images=[
       { img:'images/v2.jpg'},
{ img:'images/v1.jpg'},
{ img:'images/v5.jpg'}
    ]

      const head='uPVC GLASS VENTILATOR'
    const para='At Window Innovationz, we design and fabricate high-quality uPVC top-hung ventilators are designed to provide excellent ventilation while maintaining energy efficiency and security. These windows open outward from the top, allowing fresh air to circulate without compromising privacy or safety. Built with high-quality uPVC and durable hardware. Ensure fresh air and comfort with our uPVC top-hung ventilators, offering smooth operation, durability, and excellent airflow control. Crafted from high-grade uPVC profiles and long-lasting hardware, our ventilators are resistant to corrosion, weathering, and termites—making them a low-maintenance yet high-performance solution. The airtight sealing helps in minimizing noise and dust infiltration, while the sturdy locking mechanisms enhance safety and security.'
    const img= '/images/ven10.webp'
    const p='Why Choose uPVC Ventilator from Window Innovationz uPVC Windows & Doors?'
  const h=[
  "Top-hung glass ventilators are designed to open outward from the top, allowing fresh air to circulate while maintaining security and privacy.",
  "Made with high-quality glass and durable uPVC or aluminium frames, ensuring long-lasting performance and minimal maintenance.",
  "The design provides controlled ventilation, making them ideal for kitchens, bathrooms, and spaces where airflow is essential.",
  "Their smooth operating hinges allow easy opening and closing, ensuring convenience and comfort for everyday use.",
  "These ventilators help improve indoor air quality by allowing hot or stale air to escape efficiently.",
  "The transparent or frosted glass options offer both natural light and privacy, enhancing the interior ambiance.",
  "Built to withstand harsh weather conditions, they are resistant to moisture, rust, and corrosion.",
  "Energy-efficient design helps maintain indoor temperatures while reducing the need for artificial cooling or heating."
]

  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img} p={p} h={h}
       />
    </div>
  )
}

export default Ven

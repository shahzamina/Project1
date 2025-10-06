import React from 'react'
import Serdet from './Serdet'

const Skylet = () => {
    const images=[
       { img:'images/s4.jpg'},
{ img:'images/sky4.jpg'},
{ img:'images/s5.jpg'}
    ]

      const head='GLASS SKYLIGHT '
    const para='At Window Innovationz, we design and fabricate high-quality skylights, crafted with high-quality glass and durable frames. Designed for roofs and ceilings, skylights enhance brightness, improve ventilation, and add a modern architectural touch to your home or office in Islamabad. Our skylights are the perfect solution for natural light and fresh air, combining durability with elegant design. Installing skylights is one of the most effective ways to brighten interiors, improve airflow, and reduce reliance on artificial lighting, making your spaces more energy-efficient and comfortable. Whether for a residential home, office, or commercial project in Islamabad, our skylights provide a sleek architectural feature that enhances both functionality and style.'
    const img= '/images/s1.jpg'
const p='Why Choose Glass Skylight from Window Innovationz uPVC Windows & Doors?'

    const h = [
  "We take pride in delivering the highest quality workmanship in every project. Our skilled professionals use the finest materials and construction techniques to ensure that every conservatory, skylight, or installation is durable, visually appealing, and long-lasting.",
  
  "Your home is unique, and your conservatory or skylight should reflect that. We customize designs to suit your individual tastes, functional needs, and the existing style of your property, ensuring a perfect fit and seamless integration with your home.",
  
  "We focus on energy-efficient solutions to help you reduce your carbon footprint and save on energy bills. By using quality insulation, glazing, and materials, our installations maintain comfortable indoor temperatures while minimizing energy consumption.",
  
  "Your satisfaction is our ultimate priority. From the initial consultation to the final installation, we work closely with you to ensure that every detail meets or exceeds your expectations, providing a stress-free and rewarding experience.",
  
  "We offer competitive pricing without compromising on quality. Our services are designed to fit a range of budgets while still delivering exceptional value, allowing you to enjoy high-quality craftsmanship at a fair price."
]

   
  return (
    <div>
      <Serdet images={images}  head={head} para={para} img={img} p={p} h={h}
       />
    </div>
  )
}

export default Skylet

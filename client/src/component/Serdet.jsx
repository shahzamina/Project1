import React from 'react'
import './Serdet.css'
const Serdet = ({images,para,head,img,p,h}) => {
   
  return (
    <div className='dyn mt-5'>
      <div className='d-flex flex-column flex-md-row gap-5' style={{marginTop:'6%'}}>
        <div className='dyn '>
            <h2 className='text-center' style={{marginTop:'5%', wordSpacing:'1px',objectFit:'cover',fontFamily:'Lato', fontWeight:'bold'}}>{head}</h2>
            <p className='serdt mt-3 ' style={{fontFamily:'Lato',wordSpacing:'0px', textAlign:'justify', lineHeight:'35px'}}>{para}</p>
        </div>
        <div className= 'd-none d-md-block dyn me-4 image-container '>
                <img  className='mt-4 mb-4  w-100' style={{height:'450px'}} src={img} alt={head} />
        </div>
      </div>

      
<div>
  <h2 className='text-center mt-4 p-2' style={{fontFamily:'Lato',wordSpacing:'0px'}}>{p}</h2>
  <ul className='mt-4 '>
      {
        h.map((option,index)=>(
          <li className='p-2  mt-3 wid-ser'  style={{wordSpacing:'0px', listStyle:'none',fontFamily:'Lato' }} key={index}> <span style={{ color: "green", marginRight: "8px" }}>✔</span>{option}</li>
        ))
      }
  </ul>
</div>

    

      <div className='d-flex flex-column flex-md-row  gap-4  w-ser' style={{marginTop:'7%', marginBottom:'5%'}}>
        {
            images.map(item =>(
                    <div key={item} className=' image-container d-wid '>
                        <img  className='det-wid ' style={{height:'470px'}} src={item.img} alt="" />

                        </div>
            ))
        }
      </div>
    </div>
  )
}

export default Serdet

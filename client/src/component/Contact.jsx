import React, { useState,useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

const Contact = ({img,ch}) => {
  const { watch, register, handleSubmit,reset,formState:{isValid}  } = useForm({ mode: "onChange"});
  const [open, setOpen] = useState(false); 
 const [loading, setLoading] = useState(false);
  const services = [
    "uPVC Doors",
    "uPVC Windows",
    "uPVC Skylet",
    "uPVC Ventilator",
    "uPVC Stairs",
    "uPVC Railing",
    "uPVC Shower Caben",
  ];

  const onSubmit= async(e)=>{
    
    setLoading(true); 
    try{

    
    const res= await fetch('http://localhost:5000/fillCon', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(e)
    })

    const result = await res.json();
    if(res.ok){
     
      alert('Form submitted  successfully!');
      reset()
     
    }
    else{
  //   it call server side error 
  alert(result.message );
 // reset()
  
    }
    }
    catch(err){
           console.log("server error , please try again");
           console.error(err)
    }
      finally {
      setLoading(false); // ✅ stop loading
    }

  }

  return (
    <div className="con dyn">
      <div
        className="image-container d-flex"
        style={{ backgroundColor: "rgb(18, 150, 184)", marginBottom: "6%" }}
      >
   
        <img
        className="d-none d-md-block"
          style={{ height: "500px", width: "40%" }}
          src={img}
          alt="error"
        />
    
        <div>
          <form className="form  mt-5" onSubmit={handleSubmit(onSubmit)}>
            <h3 className="mb-2 c-text" style={{ fontFamily: "Lato",wordSpacing:'1px', fontWeight:'bolds' }}>
             {ch}
            </h3>

            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
              <input
                className="form-control"
                placeholder="Full Name"
                type="text"
                {...register("name")}
              />
           
              <input
                className="form-control"
                placeholder="Phone Number"
                type="tel"
               {...register("phone")}
              />
           

            </div>


        <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-3">
  {/* Email input */}
  <input
    className="form-control"
    placeholder="Email"
    type="email"
    {...register("email")}
  
  />


  {/* Services dropdown wrapper */}
  <div className="position-relative ser-wid" 
 
  >

    <div
  className="form-control mt-3 selected-services"
  style={{

    cursor: "pointer",
    padding: "18px",
    
  }}
  onClick={() => setOpen(!open)}
>
{(watch("services") || []).length > 1
  ? `${(watch("services") || [])[0]} (+${(watch("services") || []).length - 1} more)`
  : (watch("services") || [])[0] || "Select services"}


</div>


  
  {open && (
  <div
    className="border rounded bg-white shadow position-absolute mt-1"
    style={{
      zIndex: 10,
      maxHeight: "150px",
      overflowY: "hidden",
      width: "100%",
    }}
  >

<div className="d-flex flex-column ms-2">
  {services.map((service, index) => (
    <div
      key={index}
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: '3%',
        padding: 0,
      }}
    >
      <input
        type="checkbox"
        id={`service-${index}`}
        value={service}
        {...register("services", {
          required: "Please select at least one service",
        })}
        style={{
          margin: 0,
          padding: 0,
          width: "14px",   // make checkbox small
          height: "14px",
        }}
      />
      <label
        htmlFor={`service-${index}`}
        style={{
          margin: "0 0 0 5px", // only 2px gap between checkbox & text
          padding: 0,
        }}
      >
        {service}
      </label>
    </div>
  ))}
</div>



  </div>
)}

  </div>
</div>



            <div>
              <textarea
              style={{fontFamily:'Lato'}}
                className="form-control ser-wid "
                placeholder="Comment"
                {...register("comment")}
              />
            </div>
          
           <button type="submit" className="btn2 style fs-5 my-3 btn-wid" disabled={loading} >
 
                <span style={{ fontFamily: "Lato" }}>Submit</span>
</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

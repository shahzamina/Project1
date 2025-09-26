import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  const [open, isOpen]=useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(null);

const handleSubmenuClick = (e, name) => {
  e.preventDefault();
  e.stopPropagation();
  setSubmenuOpen(submenuOpen === name ? null : name);
};

  return (
    <>
     <div className='Dyn-nav dyn bg-transparent'>

        <div className='n-wid mt-1 p-2 '>
            <Link to='/'><img 
          className='nav-img'
          src="/images/al.PNG"  
          alt="Logo" 
         
        />
        </Link> 
        </div>

        <button className='hamburger d-lg-none'
        onClick={() => {
    isOpen(!open);
    if(open) { // if we are closing the menu
      setDropdownOpen(false); // close main dropdown
      setSubmenuOpen(null);   // close any submenu
    }
  }}

          
        >
          <i className="fa fa-bars" style={{ fontSize: "28px" }}></i>
        </button>

        <div className={`me-5 menu ${open?"sopen":"lopen"}`}>
        <ul className='navbar-nav  d-flex flex-lg-row gap-lg-5 nav-menu'>
        <li className='nav-item'>  <Link to='/' type='button' className='nav-link'> Home</Link></li>
        <li className='nav-item'>   <Link to='/about' className='nav-link'> About</Link></li>

      
         <li   className={`nav-item dropdown ${dropdownOpen ? "open" : ""}`} 
            onClick={() => setDropdownOpen(!dropdownOpen)}> 
           <Link   role="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false" className='nav-link '>Services</Link>

          <ul className='dropdown-menu w-50 p-0' >
              <li className={`dropdown-submenu ${submenuOpen === "doors" ? "open" : ""}`}
  onClick={(e) => handleSubmenuClick(e, "doors")}> 
               <Link className="style mb-1 dropdown-item w-100 d-block" style={{ whiteSpace: "normal",color:'rgb(18, 150, 184)', fontSize:'14px'}}>uPVC Doors</Link>

                  <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/sdoor">Sliding Door</Link></li>
                      <li><Link className="dropdown-item" to='/gdoor'>Openable Door</Link></li>
                  </ul>
               </li>
                            
              <li  className={`dropdown-submenu ${submenuOpen === "windows" ? "open" : ""}`}
          onClick={(e) => handleSubmenuClick(e, "windows")} ><Link className="style mb-1 dropdown-item w-100 d-block" style={{ whiteSpace: "normal",color:'rgb(18, 150, 184)', fontSize:'14px'}}>uPVC Windows</Link>
                  <ul className="dropdown-menu">

              <li><Link  className="dropdown-item" to='/swin'>Sliding Windows</Link> </li>
              <li><Link className="dropdown-item" to='/gwin'>Openable Windows</Link></li>
                    </ul>
              </li>
                           
                            <li><Link to='/sky' className="style mb-2 dropdown-item w-100 d-block" style={{ whiteSpace: "normal",color:'rgb(18, 150, 184)', fontSize:'14px'}}>uPVC Skylight</Link></li>
                             <li><Link to='/ven' className="style mb-2 dropdown-item w-100 d-block" style={{ whiteSpace: "normal",color:'rgb(18, 150, 184)', fontSize:'14px'}}>uPVC Ventilator</Link></li>
                              <li><Link to='/gstair' className="style mb-2 dropdown-item w-100 d-block" style={{ whiteSpace: "normal",color:'rgb(18, 150, 184)', fontSize:'14px'}}>Glass Stairs railing</Link></li>
                               <li><Link to='/grail' className="style mb-2 dropdown-item w-100 d-block" style={{ whiteSpace: "normal",color:'rgb(18, 150, 184)', fontSize:'14px'}}>Glass Terrace railing</Link></li>
                                <li><Link to='/scab' className="style mb-2 dropdown-item w-100 d-block" style={{ whiteSpace: "normal",color:'rgb(18, 150, 184)', fontSize:'14px'}}>Glass Shower Cabins</Link></li>
                                
                        </ul>
    
    
    </li>
                   
                       
                    <li className='nav-item'> <Link to='/gcom' className='nav-link'>Gallery</Link></li>
         <li className='nav-item'> <Link to='/cform' className='nav-link'>Contact</Link></li>
  
        </ul>
        </div>

       

    </div> 
    </>
  )
}

export default Navbar

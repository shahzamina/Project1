import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const handleSubmenuClick = (e, name) => {
    e.preventDefault();
    e.stopPropagation();
    setSubmenuOpen(submenuOpen === name ? null : name);
  };

  const handleLinkClick = () => {
    // Close everything when user clicks a link
    setOpen(false);
    setDropdownOpen(false);
    setSubmenuOpen(null);
  };

  return (
    <div className="Dyn-nav dyn bg-transparent">
      <div className="n-wid mt-1 p-2">
        <Link to="/" onClick={handleLinkClick}>
          <img className="nav-img" src="/images/al.PNG" alt="Logo" />
        </Link>
      </div>

      {/* Hamburger menu (mobile) */}
      <button
        className="hamburger d-lg-none"
        onClick={() => {
          setOpen(!open);
          if (open) {
            setDropdownOpen(false);
            setSubmenuOpen(null);
          }
        }}
      >
        <i className="fa fa-bars" style={{ fontSize: '28px' }}></i>
      </button>

      <div className={`me-5 menu ${open ? 'sopen' : 'lopen'}`}>
        <ul className="navbar-nav d-flex flex-lg-row gap-lg-5 nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={handleLinkClick}>Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={handleLinkClick}>About</Link>
          </li>

          {/* Services Dropdown */}
          <li
            className={`nav-item dropdown ${dropdownOpen ? 'open' : ''}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="nav-link dropdown-toggle">Services</span>

            <ul className="dropdown-menu w-50 p-0">
              {/* uPVC Doors */}
             <li className={`dropdown-submenu ${submenuOpen === 'doors' ? 'open' : ''}`}>
  <span
    className="dropdown-item submenu-title"
    onClick={(e) => handleSubmenuClick(e, 'doors')}
  >
    uPVC Doors
  </span>

                <ul className="dropdown-menu">
                  <li>
                    <Link to="/sdoor" className="dropdown-item" onClick={handleLinkClick}>Sliding Door</Link>
                  </li>
                  <li>
                    <Link to="/gdoor" className="dropdown-item" onClick={handleLinkClick}>Openable Door</Link>
                  </li>
                </ul>
              </li>

              {/* uPVC Windows */}
              <li
                className={`dropdown-submenu ${submenuOpen === 'windows' ? 'open' : ''}`}
                onClick={(e) => handleSubmenuClick(e, 'windows')}
              >
                <span className="dropdown-item submenu-title">uPVC Windows</span>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/swin" className="dropdown-item" onClick={handleLinkClick}>Sliding Windows</Link>
                  </li>
                  <li>
                    <Link to="/gwin" className="dropdown-item" onClick={handleLinkClick}>Openable Windows</Link>
                  </li>
                </ul>
              </li>

              {/* Other Services */}
              <li><Link to="/ven" className="dropdown-item" onClick={handleLinkClick}>uPVC Ventilator</Link></li>
              <li><Link to="/sky" className="dropdown-item" onClick={handleLinkClick}>Glass Skylight</Link></li>
              <li><Link to="/gstair" className="dropdown-item" onClick={handleLinkClick}>Glass Stairs Railing</Link></li>
              <li><Link to="/grail" className="dropdown-item" onClick={handleLinkClick}>Glass Terrace Railing</Link></li>
              <li><Link to="/scab" className="dropdown-item" onClick={handleLinkClick}>Glass Shower Cabins</Link></li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/gcom" className="nav-link" onClick={handleLinkClick}>Gallery</Link>
          </li>

          <li className="nav-item">
            <Link to="/cform" className="nav-link" onClick={handleLinkClick}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

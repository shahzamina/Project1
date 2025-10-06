import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false); // hamburger
  const [dropdownOpen, setDropdownOpen] = useState(false); // Services main dropdown
  const [subDropdownOpen, setSubDropdownOpen] = useState(null); // to track which submenu is open

  const handleLinkClick = () => {
    setOpen(false);
    setDropdownOpen(false);
    setSubDropdownOpen(null);
  };

  // toggle hamburger
  const toggleMenu = () => {
    if (open) {
      setDropdownOpen(false);
      setSubDropdownOpen(null);
    }
    setOpen(!open);
  };

  return (
    <div className="Dyn-nav dyn bg-transparent">
      <div className="n-wid mt-1 p-2">
        <Link to="/" onClick={handleLinkClick}>
          <img className="nav-img" src="/images/al.PNG" alt="Logo" />
        </Link>
      </div>

      <button className="hamburger d-lg-none" onClick={toggleMenu}>
        <i className="fa fa-bars" style={{ fontSize: '28px' }}></i>
      </button>

      <div className={`me-5 menu ${open ? 'sopen' : 'lopen'}`}>
        <ul className="navbar-nav d-flex flex-lg-row gap-lg-5 nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={handleLinkClick}>
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={handleLinkClick}>
              About
            </Link>
          </li>

          {/* SERVICES DROPDOWN */}
          <li
            className={`nav-item dropdown ${dropdownOpen ? 'open' : ''}`}
            onMouseEnter={() => window.innerWidth >= 992 && setDropdownOpen(true)}
            onMouseLeave={() => window.innerWidth >= 992 && setDropdownOpen(false)}
          >
            <span
              className="nav-link dropdown-toggle"
              onClick={(e) => {
                if (window.innerWidth < 992) {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                }
              }}
            >
              Services
            </span>

            <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
              {/* uPVC DOORS */}
              <li className="dropdown-submenu">
                <span
                  className="dropdown-item submenu-title"
                  onClick={(e) => {
                    if (window.innerWidth < 992) {
                      e.preventDefault();
                      setSubDropdownOpen(
                        subDropdownOpen === 'doors' ? null : 'doors'
                      );
                    }
                  }}
                >
                  uPVC Doors
                </span>
                <ul
                  className={`dropdown-menu ${
                    subDropdownOpen === 'doors' ? 'show' : ''
                  }`}
                >
                  <li>
                    <Link
                      to="/sdoor"
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      Sliding Door
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gdoor"
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      Openable Door
                    </Link>
                  </li>
                </ul>
              </li>

              {/* uPVC WINDOWS */}
              <li className="dropdown-submenu">
                <span
                  className="dropdown-item submenu-title"
                  onClick={(e) => {
                    if (window.innerWidth < 992) {
                      e.preventDefault();
                      setSubDropdownOpen(
                        subDropdownOpen === 'windows' ? null : 'windows'
                      );
                    }
                  }}
                >
                  uPVC Windows
                </span>
                <ul
                  className={`dropdown-menu ${
                    subDropdownOpen === 'windows' ? 'show' : ''
                  }`}
                >
                  <li>
                    <Link
                      to="/swin"
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      Sliding Windows
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gwin"
                      className="dropdown-item"
                      onClick={handleLinkClick}
                    >
                      Openable Windows
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/ven" className="dropdown-item" onClick={handleLinkClick}>
                  uPVC Ventilator
                </Link>
              </li>
              <li>
                <Link to="/sky" className="dropdown-item" onClick={handleLinkClick}>
                  Glass Skylight
                </Link>
              </li>
              <li>
                <Link to="/gstair" className="dropdown-item" onClick={handleLinkClick}>
                  Glass Stairs Railing
                </Link>
              </li>
              <li>
                <Link to="/grail" className="dropdown-item" onClick={handleLinkClick}>
                  Glass Terrace Railing
                </Link>
              </li>
              <li>
                <Link to="/scab" className="dropdown-item" onClick={handleLinkClick}>
                  Glass Shower Cabins
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/gcom" className="nav-link" onClick={handleLinkClick}>
              Gallery
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/cform" className="nav-link" onClick={handleLinkClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

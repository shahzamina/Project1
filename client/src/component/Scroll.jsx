import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scroll = () => {
  const { pathname } = useLocation(); // get current route

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top whenever route changes
  }, [pathname]); // runs every time pathname changes

  return null; // nothing to render
};

export default Scroll;

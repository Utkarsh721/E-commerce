import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { NavDropdown } from "react-bootstrap";
import { getCartTotal } from "../reducer/dataSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";

const logo = (
  <div className={styles.logo}>
    <Link to="/">
      <h2>
        E-<span>Commerce</span>
      </h2>
    </Link>
  </div>
);

const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { cart, totalQuantity } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

//for Logout function//

  let user=JSON.parse(localStorage.getItem('user-info'))
function logout()
{
  localStorage.clear();
  
}

  return (
<header>     
      <div className={styles.header}>
        {logo}

        <nav className={showMenu ? `${styles["show-nav"]}` : `${"hide-nav"}`}>
          <div
            className={
              showMenu
                ? `${styles["nav-wrapper"]} ${styles["show-nav-wrapper"]} `
                : `${styles["nav-wrapper"]}`
            }
            onClick={hideMenu}
          ></div>
          <ul onClick={hideMenu}>
            <li className={styles["logo-mobile"]}>
              {logo}
              <FaTimes size={22} color="#fff" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/store">Store</NavLink>
            </li>0
            <li>
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
           
          </ul>
          <div className={styles["header-right"]} onClick={hideMenu}>
            <span className={styles.links}>
              <NavDropdown title={user && user.name}>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </span>
            <span className={styles.links}>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </span>
          </div>
          NavLink
        </nav>
        <MDBBtn color="light">
          <Link to="/cart">Cart({totalQuantity})</Link>
        </MDBBtn>
        <div className={styles["menu-icon"]}>
        
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

  export default Header;

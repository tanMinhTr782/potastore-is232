import React from 'react'
import styles from "./Navbar.module.css"
import {
    ShoppingCartOutlined,
    SearchOutlined,
    CameraAlt,
    ArrowForward
} from '@mui/icons-material';
import { useNavigate } from "react-router-dom"; 
import {Link} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate(); 
    const hiddenRoutes = [
        "/shop",
        "/shop/orders",
        "/shop/products",
        "/shop/accounts",
      ];
      const hideNavbar = hiddenRoutes.includes(window.location.pathname);
      if (hideNavbar) {
        return null;
      }
    return (
        <div className={styles.navbar}>
            <div className={styles.left}>
                <div className= {styles.item}>
                    <Link to="/" className={styles.logo}> <img src='/logo.png' alt = "Potastore"/></Link>
                </div>
                <div className={styles.Search}>
                    <div className= {styles.searchWrapper}>
                        <input className={styles.searchContainer} placeholder="Search">
                        </input>

                        <button className= {styles.button}>
                            <SearchOutlined style={{ color: 'white' }} />
                        </button>
                        <button className= {styles.button}>
                            <CameraAlt style={{ color: 'white' }} />
                        </button>
                    </div>
                    <div className={styles.section}>
                        <Link to="/" className= {styles.link}> Customer Service </Link>
                        <Link to="/" className= {styles.link}> About Us </Link>
                    </div>
                </div>
            </div>


            <div className={styles.right}>
                <button className={styles.cartBtn}>
                    <ShoppingCartOutlined className={styles.cart} />
                    <span className={styles.cartCount}>0</span>
                </button>
                <button className={styles.signinBtn}  onClick={() =>  { navigate('/SignIn') }}> 
                    <span className={styles.cartCount}>Sign in</span>
                    <ArrowForward className={styles.arrow}/>
                </button>

            </div>
        </div>
    )
}
export default Navbar; 
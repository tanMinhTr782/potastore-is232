import { Link } from 'react-router-dom';
import styles from './Register.module.css';
import { Google } from '@mui/icons-material'
const Register = () => {
  return (
    <div className={styles.container}>
      <div className = {styles.left}>
      <div className={styles.leftContainer}>
        <img src="./img/vegetable_tray.jpg" alt="Potastore_cover" width="800px" height="1024px" />
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>Potastore</Link>
        </div>
        <div className = {styles.copyright}>
          Copyright © 2024 Potastore. All Right Reversed. 
          </div>
      </div>
      </div>
      <div className={styles.right}>
        <div className={styles.centerRightContainer}>
          <div className={styles.heading}>
            <div className={styles.title}> Create An Account</div>
            <div className={styles.subtitle}>We sell fresh products with love</div>
          </div>

          <div className = {styles.input}>
          
          
          <div className={styles.text}>Name</div>
          <input className = {styles.inputContainer}></input>

          <div className={styles.text}>Email</div>
          <input className = {styles.inputContainer}></input>

          <div className={styles.text}>Password</div>
          <input className = {styles.inputContainer}></input>
      
          <div className={styles.btn}>
            <button className={styles.createBtn}> Create Account</button>
            <button className={styles.signUpBtn}> <Google /> Sign Up With Google</button>
          </div>
          <div className={styles.remind}>Already have an account? <span>Sign In</span> </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Register; 
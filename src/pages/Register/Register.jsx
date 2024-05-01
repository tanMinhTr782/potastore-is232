import { Link } from 'react-router-dom';
import styles from './Register.module.css';
import { Google } from '@mui/icons-material'
const Register = () => {
  return (
      <div className={styles.right}>
        <div className={styles.centerRightContainer}>
          <div className={styles.heading}>
            <div className={styles.title}> Create An Account</div>
            <div className={styles.subtitle}>We sell fresh products with love</div>
          </div>

          <div className={styles.input}>


            <div className={styles.text}>Name</div>
            <input className={styles.inputContainer} placeholder='John Doe'></input>

            <div className={styles.text}>Email</div>
            <input className={styles.inputContainer} placeholder='doe@example.com'></input>

            <div className={styles.text}>Password</div>
            <input className={styles.inputContainer}></input>

            <div className={styles.btn}>
              <button className={styles.createBtn}> Create Account</button>
              <button className={styles.signUpBtn}> <Google />Register With Google</button>
            </div>
            <div className={styles.remind}>Already have an account? 
            <Link to = '/SignIn' className={styles.link}> Sign In</Link> 

             </div>

          </div>
        </div>
      </div>
  )
}

export default Register; 
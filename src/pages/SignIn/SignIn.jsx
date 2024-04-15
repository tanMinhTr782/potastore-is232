import {Link} from 'react-router-dom'
import styles from './SignIn.module.css'
import { useNavigate } from 'react-router-dom';
import {
  ArrowForward, 
  Google
} from '@mui/icons-material';
const SignIn = () => {
  const navigate = useNavigate(); 
  return (
    <div className={styles.right}>
        <div className={styles.centerRightContainer}>
          <div className={styles.heading}>
            <div className={styles.title}> Sign In </div>
            <div className={styles.registerRemind}> 
                  Don't have an account?
                  <Link to = '/Register' className={styles.link}> Register here</Link> 
            </div>
          </div>

          <div className={styles.input}>


            <div className={styles.text}>Email</div>
            <input className={styles.inputContainer} placeholder='example@example.com'></input>

            <div className={styles.text}>Password</div>
            <input className={styles.inputContainer}></input>

            <div className={styles.btn}>
              <button className={styles.createBtn}>Sign In  <ArrowForward className={styles.arrow}/> </button>
              <button className={styles.signUpBtn}> <Google />Sign In With Google</button>

            </div>
            <div className={styles.remind}>
            <Link to = '/ResetPassword' className={styles.link}> Forgot Password?</Link> 
            </div>

          </div>
        </div>
      </div>
  )
}

export default SignIn
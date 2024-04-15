import React from 'react'
import styles from './ResetPassword.module.css'
import {
  ArrowForward, 
  ArrowBack
} from '@mui/icons-material';
import {Link, useNavigate} from 'react-router-dom'

const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.right}>
    <div className={styles.centerRightContainer}>
      <div className={styles.heading}>
      <Link  to = '/ResetPassword'>
      <ArrowBack style = {{width: '44px', height: '41px'}}/>
      </Link>
        <div className={styles.title}> Reset Password </div>
      </div>

      <div className={styles.input}>


        <div className={styles.text}>Type the OTP we sent you on your email here</div>
        <input className={styles.inputContainer} placeholder=''></input>


        <div className={styles.btn}>
          <button className={styles.createBtn} onClick={() =>  { navigate('/ResetPassword2') }}>
            Continue  <ArrowForward className={styles.arrow}/> 
          </button>

        </div>

      </div>
    </div>
  </div>
  )
}

export default ResetPassword;
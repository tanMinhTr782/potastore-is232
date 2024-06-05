import React, {useState} from 'react'
import styles from './ResetPassword.module.css'
import {
  Visibility, 
  VisibilityOff
} from '@mui/icons-material';
import {Link} from 'react-router-dom'

const ResetPassword = () => {
  const [eyeOpen, setEyeOpen] = useState(true); 
  const [eyeOpen1, setEyeOpen1] = useState(true); 
  return (
    <div className={styles.right}>
    <div className={styles.centerRightContainer}>
      <div className={styles.heading}>
        <div className={styles.title}> Reset Password </div>
      </div>

      <div className={styles.input}>
        <div className = {styles.inputBox}>
          <div className={styles.text}>Type your new password here</div>
          <input className={styles.inputContainer} ></input>
          {eyeOpen ? (
            <Visibility className = {styles.eye} onClick = {() => setEyeOpen(!eyeOpen)}/>
          )
        : (
          <VisibilityOff className = {styles.eye} onClick = {() => setEyeOpen(!eyeOpen)}/>
        )
        }
        </div>

        <div className = {styles.inputBox}>
        <div className={styles.text}>Confirm new password</div>
        <input className={styles.inputContainer} placeholder=''></input>
        {eyeOpen1 ? (
            <Visibility className = {styles.eye} onClick = {() => setEyeOpen1(!eyeOpen1)}/>
          )
        : (
          <VisibilityOff className = {styles.eye} onClick = {() => setEyeOpen1(!eyeOpen1)}/>
        )
        }
        </div>

        <div className={styles.btn}>
          <button className={styles.createBtn}> Confirm  </button>

        </div>

      </div>
    </div>
  </div>
  )
}

export default ResetPassword;
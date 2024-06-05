import React from 'react'
import styles from './UserInfo.module.css'

const UserInfo = () => {
  return (
   <div className = {styles.rightContainer}>
      <form className = {styles.form}>
        <div className = {styles.leftForm}>
        <div className = {styles.name}>
        <label className = {styles.label}> Name </label>
        <input placeholder = "Lorem ipsum" className = {styles.inputName}/>
        </div>
        <div className = {styles.name}>
        <label className = {styles.label}> Email </label>
        <span style = {{fontSize: '15px', paddingInline: '10px'}}>example@example.com</span>
        </div>

        <div className = {styles.gender}>
        <label className = {styles.label}> Gender </label>
          <div className = {styles.checkBox}>
            <input type="radio" id="gender1" name="gender" value="Male" style = {{width: '24px'}}/>
            <label for="gender1"> Male</label> 
         </div>
          <div className = {styles.checkBox}>
              <input type="radio" id="gender2" name="gender" value="Female" style = {{width: '24px'}}/>
              <label for="gender2"> Female</label> 
            </div>
            <div className = {styles.checkBox}>
              <input type="radio" id="gender3" name="gender" value="Prefer not to say" style = {{width: '24px'}}/>
              <label for="gender3"> Prefer not to say</label> 
            </div>

        </div>

        <div className = {styles.bdate}>
        <label className = {styles.label}> Birthdate </label>
        <input type="date" id="vehicle1" name="vehicle1" style = {{height: '24px', marginLeft: '-20px'}} />
        <p style = {{paddingLeft: '30px'}}>(Month-date-year)</p>
        </div>
        <button className = {styles.submitBtn}> Submit</button>
        </div>
        <div className = {styles.avatarContainer}>
        <label className = {styles.labelAvatar}> Avatar </label>
        <img src='/img/ppap.png' alt='avatar' className = {styles.avatar}/>
        <button className = {styles.btn}> Pick Image </button>
        <div>
        <span >Max file size 1 MB<br/><br/>
        File type: <b>.JPEG,  .PNG</b></span>
        </div>
        </div>
      </form>
   </div>
  )
}

export default UserInfo
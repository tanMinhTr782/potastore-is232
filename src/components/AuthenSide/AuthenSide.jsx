import styles from './AuthenSide.module.css'
import {Link} from 'react-router-dom';
const AuthenSide = () => {
  return (
    <>
        <div className={styles.left}>
        <div className={styles.leftContainer}>
          <img src="./img/vegetable_tray.jpg" alt="Potastore_cover" width="800px" height="1024px" />
          <div className={styles.logoContainer}>
            <Link to="/" className={styles.logo}>Potastore</Link>
          </div>
          <div className={styles.copyright}>
            Copyright © 2024 Potastore. All Right Reversed.
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthenSide; 
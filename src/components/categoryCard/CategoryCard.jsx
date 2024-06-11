import React from 'react'
import styles from './CategoryCard.module.css'
const CategoryCard = ({imgUrl, title, numberOfItem}) => {
  return (
    <div className= {styles.containerCategory}  style={{ backgroundImage: `url(${imgUrl})` }}>
        <div className={styles.centered}>{title}</div>
        {/* <div className={styles.centered}>{numberOfItem} Items</div> */}
    </div>
  )
}
export default CategoryCard; 

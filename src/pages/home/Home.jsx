import React from 'react'
import styles from './Home.module.css'
import CategoryCard from '../../components/categoryCard/CategoryCard'

const Home = () => {
  return (
    <div className = {styles.container}>
      
      <h1 className= {styles.title}>Shop</h1>
      <br></br>     
      <div className = {styles.categoryContainer}>
          <CategoryCard imgUrl = '/img/FruitCategory.jpg' title = "FRUITS" numberOfItem='5'/>        
          <CategoryCard imgUrl = '/img/VegetableCategory.jpg' title = "VEGETABLES" numberOfItem='5'/>        
    </div>

    </div>
  )
}

export default Home; 
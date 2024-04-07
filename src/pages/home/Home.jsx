import styles from './Home.module.css'
import CategoryCard from '../../components/categoryCard/CategoryCard'
import Dropdown from '../../components/Dropdown/Dropdown'


const type = ["Fruit", "Vegetable", "All Type"]; 
const availability =  ["Per fruit", "Per pack", "All Availability"]; 
const price =  ["From low to high", "From high to low", "All Price"]; 


const Home = () => {
  return (
    <div className = {styles.container}>
      
      <h1 className= {styles.title}>Shop</h1>
      <br></br>     
      <div className = {styles.categoryContainer}>
          <CategoryCard imgUrl = '/img/FruitCategory.jpg' title = "FRUITS" numberOfItem='5'/>        
          <CategoryCard imgUrl = '/img/VegetableCategory.jpg' title = "VEGETABLES" numberOfItem='5'/>        
    </div>
    <div className = {styles.productContainer}>
    <div className = {styles.filter}>
      <span className = {styles.filterTitle}>Sort by :</span>
      <Dropdown options = {type}/>
      <Dropdown options = {price}/>
      <Dropdown options = {availability}/>
    </div>
    </div>
    </div>
  )
}

export default Home; 
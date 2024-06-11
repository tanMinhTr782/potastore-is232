import styles from './Home.module.css'
import CategoryCard from '../../components/categoryCard/CategoryCard'
import Dropdown from '../../components/Dropdown/Dropdown'
import ProductCard from '../../components/productCard/ProductCard';
import { useState, useEffect } from 'react';

const type = ["Fruit", "Vegetable", "All Type"];
const availability = ["Per fruit", "Per pack", "All Availability"];
const price = ["From low to high", "From high to low", "All Price"];


const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch(
        "http://localhost:3001/product/forCustomer",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const products = await response.json();
      setProducts(products.items);
    };
    fetchProducts();
  }, []);
  console.log({products})
  return (
    <div className={styles.container}>

      <h1 className={styles.title}>Shop</h1>
      <br></br>
      <div className={styles.categoryContainer}>
        <CategoryCard imgUrl='/img/FruitCategory.jpg' title="FRUITS" numberOfItem='5' />
        <CategoryCard imgUrl='/img/VegetableCategory.jpg' title="VEGETABLES" numberOfItem='5' />
      </div>
      <div className={styles.productContainer}>
        {/* <div className={styles.filter}>
          <span className={styles.filterTitle}>Sort by :</span>
          <Dropdown options={type} />
          <Dropdown options={price} />
          <Dropdown options={availability} />
          <button className={styles.filterBtn}>
            <span className={styles.wordsOnButton}>Filter</span>
          </button>
        </div> */}
        <div className={styles.productCardList}>
          {products.map((product) => (
            <ProductCard {...product} />
          ))} 
        </div>
      </div>
    </div>
  )
}

export default Home; 
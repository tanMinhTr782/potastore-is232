import styles from './Home.module.css'
import CategoryCard from '../../components/categoryCard/CategoryCard'
import Dropdown from '../../components/Dropdown/Dropdown'
import ProductCard from '../../components/productCard/ProductCard';

const type = ["Fruit", "Vegetable", "All Type"];
const availability = ["Per fruit", "Per pack", "All Availability"];
const price = ["From low to high", "From high to low", "All Price"];

const products = [
  {
    name: 'Mocchau Strawberry',
    price: '6.48',
    rating: '4.9',
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    imgUrl: '/img/MocchauStrawberry.jpg', 
    soldFigure: '14',
  },
  {
    name: 'Dalat Potato',
    price: '5.99',
    rating: '3.5',
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    imgUrl: '/img/potato.jpg', 
    soldFigure: '268',
  },
  {
    name: 'Pineapple',
    price: '3.99',
    rating: '5.0',
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    imgUrl: '/img/ppap.png', 
    soldFigure: '1957',
  },

];

const Home = () => {
  return (
    <div className={styles.container}>

      <h1 className={styles.title}>Shop</h1>
      <br></br>
      <div className={styles.categoryContainer}>
        <CategoryCard imgUrl='/img/FruitCategory.jpg' title="FRUITS" numberOfItem='5' />
        <CategoryCard imgUrl='/img/VegetableCategory.jpg' title="VEGETABLES" numberOfItem='5' />
      </div>
      <div className={styles.productContainer}>
        <div className={styles.filter}>
          <span className={styles.filterTitle}>Sort by :</span>
          <Dropdown options={type} />
          <Dropdown options={price} />
          <Dropdown options={availability} />
          <button className={styles.filterBtn}>
            <span className={styles.wordsOnButton}>Filter</span>
          </button>
        </div>
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
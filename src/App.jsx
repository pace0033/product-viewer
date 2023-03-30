import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    // Fetch the initial list of products
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch(console.error);

    // Fetch the list of categories
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    // Fetch the current category
    if (!selectedCategory) {
      return;
    }

    fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch(console.error);
  }, [selectedCategory]);

  function categoryHandler(ev) {
    setSelectedCategory(ev.target.value);
  }

  return (
    <div className="App">
      <h1>Product Viewer</h1>

      <label htmlFor="category-select">Choose a category:</label>
      <select
        name="categories"
        id="category-select"
        value={selectedCategory}
        onChange={categoryHandler}
      >
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>

      <ul className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <li>No products found.</li>
        )}
      </ul>
    </div>
  );
}

export default App;

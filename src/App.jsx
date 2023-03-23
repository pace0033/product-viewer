import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch the initial list of products
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data.products);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <h1>Product Viewer</h1>
      <ul className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <li key={product.id}>
              {product.brand} - {product.title}
            </li>
          ))
        ) : (
          <li>No products found.</li>
        )}
      </ul>
    </div>
  );
}

export default App;

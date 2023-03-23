import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <h1>Product Viewer</h1>
      <ul className="product-list">
        {products.length > 0 ? (
          products.map((product) => <li key={product}>{product}</li>)
        ) : (
          <li>No products found.</li>
        )}
      </ul>
    </div>
  );
}

export default App;

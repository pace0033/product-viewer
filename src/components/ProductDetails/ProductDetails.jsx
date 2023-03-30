import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    const { id } = params;
    console.log(id);

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      })
      .catch(console.error);
  }, []);

  return product ? (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
    </div>
  ) : (
    <h2>Loading product details...</h2>
  );
}

export default ProductDetails;

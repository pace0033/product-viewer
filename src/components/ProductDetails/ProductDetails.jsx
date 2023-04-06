import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../hooks/ProductsContext';
import './ProductDetails.css';

function ProductDetails() {
  const [products] = useProducts();
  const [product, setProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    const { id } = params;
    // console.log(id);
    // console.log(products);

    const productById = products.find((product) => product.id == id);
    if (productById) {
      setProduct(productById);
    }
  }, []);

  return product ? (
    <div>
      <p>{product.title}</p>
      <p>{product.description}</p>
    </div>
  ) : (
    <h2>No product details found...</h2>
  );
}

export default ProductDetails;

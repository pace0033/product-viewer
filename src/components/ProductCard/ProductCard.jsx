import { Link } from 'react-router-dom';
import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <li className="product-card">
      <p className="label">
        {product.brand} - {product.title}
      </p>
      <Link to={`/product/${product.id}`}>Details</Link>
    </li>
  );
}

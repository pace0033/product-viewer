import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <li>
      {product.brand} - {product.title}
    </li>
  );
}

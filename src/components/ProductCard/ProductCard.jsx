import './ProductCard.css';

export default function ProductCard({ product }) {
  return (
    <li className="product-card">
      <p className="label">
        {product.brand} - {product.title}
      </p>
      <button onClick={() => console.log('Details button clicked!')}>
        Details
      </button>
    </li>
  );
}

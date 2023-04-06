//ProductsContext.jsx
import { createContext, useState, useContext } from 'react';
import { useLocalStorage } from './UseLocalStorage';

const ProductsContext = createContext(); //create the context object

function ProductsProvider(props) {
  // when products get set, save in localstorage
  // const [products, setProducts] = useState([]);
  const [products, setProducts] = useLocalStorage('product-viewer-list', []);

  return (
    <ProductsContext.Provider value={[products, setProducts]} {...props} />
  );
}

//create a custom hook that can be called from components
function useProducts() {
  const context = useContext(ProductsContext);
  if (!context) throw new Error('Not inside the Provider');
  return context; // [products, setProducts]
}

//export the hook and the provider
export { useProducts, ProductsProvider };

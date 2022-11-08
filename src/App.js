import './App.css';
import Inputs from './components/Inputs';
import { useState } from 'react';
import ProductsCardList from './components/ProductsCardList';


function App() {
  const [products, setProducts] = useState([]);
  return (
    <div className="App">
      <Inputs setProducts={setProducts} products={products} />
      <ProductsCardList products={products} />
    </div>
  );
}

export default App;

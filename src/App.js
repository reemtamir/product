import './App.css';
import Inputs from './components/Inputs';
import { useState } from 'react';
import ProductsCardList from './components/ProductsCardList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [products, setProducts] = useState([]);
  return (
    <div className="App">
      <Header />
      <Inputs setProducts={setProducts} products={products} />
      <ProductsCardList products={products} />
      <Footer />
    </div>
  );
}

export default App;

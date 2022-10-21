import './App.css';
import data from './data';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">emart</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:slug" element={<ProductPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

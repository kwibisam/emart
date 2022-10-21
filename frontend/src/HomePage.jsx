import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import data from './data';
import axios from 'axios';

export default function HomePage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/products');
      setProducts(result.data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {products.map((product) => (
          <div key={product.slug} className="product">
            <Link to={`/products/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/products/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <strong>
                <p>{product.price}</p>
              </strong>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

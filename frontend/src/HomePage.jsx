import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

export default function HomePage() {
  return (
    <div>
      <h1>Featured Products</h1>
      <div className="products">
        {data.products.map((product) => (
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

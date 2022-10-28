import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import logger from 'use-reducer-logger';
import { useReducer } from 'react';
import Product from './components/Product';
import LoadingBox from './components/LoadingBox';
import MessageBox from './components/MessageBox';
const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, products: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [{ loading, products, error }, dispatch] = useReducer(logger(reducer), {
    loading: true,
    error: '',
    products: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h3 className="title" class="title">
        POPULAR PRODUCTS
      </h3>
      <div className="products">
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger"> {error}</MessageBox>
        ) : (
          <Row className="row">
            {products.map((product) => (
              <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
                <Product product={product}></Product>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}

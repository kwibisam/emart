import './App.css';
import HomePage from './HomePage';
import ProductPage from './pages/ProductPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar bg="dark" variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>Emart</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main className="mt-3">
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:slug" element={<ProductPage />} />
            </Routes>
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

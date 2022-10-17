import React from 'react';
import NavBar from './components/NavBar';
import Product from './components/Product';
import Category from './components/Category';
import PopCart from './components/PopCart';
import Cart from './components/Cart';
import { Container } from './styled/NavBarStyled';
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Container>
        <NavBar />
        <PopCart />
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/:categoryName" element={<Category />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Container>
    );
  }
}

export default App;

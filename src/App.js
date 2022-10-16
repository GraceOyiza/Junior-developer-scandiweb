import React from 'react';
import Cart from './components/Cart';
import { Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
    );
  }
}

export default App;

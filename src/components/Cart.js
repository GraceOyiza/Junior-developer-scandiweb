import React from 'react';

import { Div, ButtonClick } from '../styled/CartStyled';
import {
  incrementQuantity,
  decrementQuantity,
  setVariant,
} from '../feature/cartSlice';
import { connect } from 'react-redux';


class Cart extends React.Component {
 

  handleOverlayClick = () => {
    this.props.togglePopUpCart();
  };

  addToCart = () => {
    this.props.addToCart(this.props.cartItem);
  };

  selectVariant = (attribute, selectedValue) => {
    this.props.setVariant({ id: attribute, value: selectedValue });
  };

  render() {
    return (
      <div>
        <Div>
         
          <h3>CART</h3>
          <div>
            {this.props.cartItems.map((cartItem, index) => (
              <CartItem
                key={index}
                cartItem={cartItem}
                incrementQuantity={this.props.incrementQuantity}
                decrementQuantity={this.props.decrementQuantity}
                selectVariant={this.selectVariant}
              />
            ))}

            <div>
              <p>
                Total:{' '}
                {calculateCartTotal(
                  this.props.cartItems,
                  this.props.currentCurrency,
                )}
              </p>
              <p>Quantity: {calculateCartQuantity(this.props.cartItems)}</p>
              <ButtonClick id='checkout-button'>CHECK OUT</ButtonClick>
            </div>
          </div>
        </Div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  currentCurrency: state.currency.currentCurrency || '$'
});
const mapDispatchToProps = {
  incrementQuantity,
  decrementQuantity,
  setVariant,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

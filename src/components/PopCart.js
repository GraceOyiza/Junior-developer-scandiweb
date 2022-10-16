import React from 'react';
import {  Popupcart,  ButtonClick, Button2, Overlay} from '../styled/PopCartStyled';
import {
  togglePopUpCart,
  incrementQuantity,
  decrementQuantity,
  setVariant,
} from '../feature/cartSlice';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import { calculateCartTotal } from '../utils/common';





class PopCart extends React.Component {
  

  handleOverlayClick = () => {
    this.props.togglePopUpCart();
  };

  addToCart = () => {
    this.props.addToCart(this.props.cartItem);
  };

  selectVariant = (attribute, selectedValue) => {
    this.props.setVariant({ id: attribute, value: selectedValue });
  };

  closePopCart = () => this.props.togglePopUpCart();

  render() {
    return (
      <div>
        <Overlay isOpen={this.props.isOpen} onClick={this.handleOverlayClick} />
        <Popupcart isOpen={this.props.isOpen}>
          <div />
          <h3>My Bag {this.props.cartItems.length}</h3>
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
              <Link onClick={this.closePopCart} to={`/cart`}>
                <Button2>VIEW BAG</Button2>
              </Link>

              <ButtonClick>CHECK OUT</ButtonClick>
            </div>
          </div>
        </Popupcart>
      </div>
    );
  }
}
 

// export default PopCart;

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems,
  isOpen: state.cart.isOpen,
  currentCurrency: state.currency.currentCurrency || '$',
});
const mapDispatchToProps = {
  togglePopUpCart,
  incrementQuantity,
  decrementQuantity,
  setVariant,
};


export default connect(mapStateToProps, mapDispatchToProps) (PopCart);


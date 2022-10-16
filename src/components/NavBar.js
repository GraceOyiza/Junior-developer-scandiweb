import React from 'react';
import { Flex, Flex2, Flex2h5, Image } from "../styled/NavBarStyled"
import Logo from "../assests/a-logo.png"
import Cart from "../assests/EmptyCart.png"
import { togglePopUpCart } from '../feature/cartSlice';
import { connect } from 'react-redux';
import CurrencySwitcher from './CurrencySwitcher';
import { Link } from 'react-router-dom';
import { setCategories, setCurrentCategoryName } from '../feature/categorySlice';
import { getAllCategories } from '../utils/query';


class NavBar extends React.Component {


  componentDidMount() {
    getAllCategories().then(({ data }) => this.props.setCategories(data.categories))
  }
  
  render() {
    const toggling = () => this.props.togglePopUpCart();
    const handleNavItemClick = (e) => {
      e.preventDefault();
      const { name } = e.target.dataset;
      console.log(name)
      this.props.setCurrentCategoryName(name);
      window.location.pathname = `/${name}`;
    };
    return (
      <Flex>
        <Flex2>
          {this.props.categories.map(({ name }) => (
            <Flex2h5>
              <Link
                onClick={handleNavItemClick}
                data-name={name}
                to={`/${name}`}
              >
                {name.toUpperCase()}
              </Link>
            </Flex2h5>
          ))}
        </Flex2>

        <div>
          <img src={Logo} alt="" />
        </div>

        <Flex>
          <p>
            <CurrencySwitcher />
          </p>
          <Image src={Cart} alt="" onClick={toggling} />
        </Flex>
      </Flex>
    );
  }
}



const mapStateToProps = (state) => ({
  cartItemCount: state.cart.cartItems.length,
  categories: state.category.categories
});
const mapDispatchToProps = {
  togglePopUpCart,
  setCategories,
  setCurrentCategoryName,
};


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);



import React from 'react';
import { Button } from '../styled/Button.styled';
import { Flex, Image, Name, Brand, Price, Pdpr, Div, Div2} from '../styled/ProductStyled';

import { setProduct, setImageIndex, setVariant } from '../feature/productSlice';
import { addToCart, togglePopUpCart } from '../feature/cartSlice';
import { connect } from 'react-redux';







class Product extends React.Component {
  componentDidMount() {
    const urlPathName = window.location.pathname.split('/');
    const productId = urlPathName[urlPathName.length - 1];
    getProductQuery(productId).then(({ data: { product } }) => {
      this.props.setProduct(product);
      console.log('Product: ', product);
    });
  }

  handleThumbNailClick = e => {
    this.props.setImageIndex(e.target.dataset.index);
  };

  addToCart = () => {
    this.props.addToCart(this.props.product);
    this.props.togglePopUpCart();
  };

  selectVariant = (attribute, selectedValue) => {
    console.log('clicked', attribute, selectedValue);
    this.props.setVariant({ id: attribute, value: selectedValue });
  }

  render() {
    return (
      <Flex>
        <Flex>
          <div>
            {this.props.product?.gallery?.map((imgSrc, index) => (
              <div onClick={this.handleThumbNailClick} data-index={index}>
                <ThumbNail index={index} src={imgSrc} />
              </div>
            ))}
          </div>

          <Div2>
            <Image
              src={
                this.props.product?.gallery &&
                this.props.product.gallery[this.props.imageIndex]
              }
            />
          </Div2>
        </Flex>
        <div>
          <div>
            <Flex>
              <div>
                <Name> {this.props.product.name}</Name>
                <Brand> {this.props.product.brand}</Brand>
                {this.props.product?.attributes?.map((attribute, index) => (
                  <div key={index}>
                    <VariantList
                      title={attribute.name.toUpperCase()}
                      type={attribute.type}
                      variants={attribute.items}
                      selectVariant={this.selectVariant}
                    />
                  </div>
                ))}
                <Price>PRICE:</Price>
                <Pdpr>
                  {this.props.currentCurrency &&
                  this.props.product?.prices?.length
                    ? setPriceBasedOnCurrency(
                        this.props.product.prices,
                        this.props.currentCurrency,
                      )
                    : ''}
                </Pdpr>
                <Button onClick={this.addToCart}>ADD TO CART</Button>
                <Div
                  dangerouslySetInnerHTML={{
                    __html: this.props.product.description,
                  }}
                />
              </div>
            </Flex>
          </div>
        </div>
      </Flex>
    );
  }
}

const mapStateToProps = state => ({
  product: state.product.product,
  imageIndex: state.product.imageIndex,
  currentCurrency: state.currency.currentCurrency,
});
const mapDispatchToProps = {
  setProduct,
  setImageIndex,
  addToCart,
  togglePopUpCart,
  setVariant,
};


export default connect(mapStateToProps, mapDispatchToProps)(Product);







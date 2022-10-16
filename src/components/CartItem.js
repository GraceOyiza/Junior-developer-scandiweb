import React from 'react';



class CartItem extends React.Component {
 

  render() {
    return (
      <div>
        <Flex>
          <div>
            <Pag> {this.props.cartItem.name}</Pag>
            <Pag> {this.props.cartItem.brand}</Pag>
            <Price>
              {this.props.cartItem.prices[0].currency.symbol}
              {this.props.cartItem.prices[0].amount}
            </Price>
            {this.props.cartItem.attributes.map((attribute, index) => (
              <div key={index}>
                <VariantList
                  title={attribute.name}
                  type={attribute.type}
                  variants={attribute.items}
                  selectVariant={this.props.selectVariant}
                />
              </div>
            ))}
          </div>
          <Flex>
            <Flex1>
              <Button
                onClick={() =>
                  this.props.incrementQuantity(this.props.cartItem.id)
                }
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 5V19"
                    strokeWidth="#32323A"
                    strokeWidth-width="2"
                    strokeWidthLinecap="round"
                    strokeWidth-linejoin="round"
                  />
                  <path
                    d="M5 12H19"
                    strokeWidth="#32323A"
                    strokeWidth-width="2"
                    strokeWidthLinecap="round"
                    strokeWidth-linejoin="round"
                  />
                </svg>
              </Button>
              <QuantityInput value={this.props.cartItem.quantity} />
              <Button
                onClick={() =>
                  this.props.decrementQuantity(this.props.cartItem.id)
                }
              >
                <svg
                  width="16"
                  height="2"
                  viewBox="0 0 16 2"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1H15"
                    strokeWidth="#32323A"
                    strokeWidth-width="2"
                    strokeWidthLinecap="round"
                    strokeWidth-linejoin="round"
                  />
                </svg>
              </Button>
            </Flex1>

            <div>
              {this.props.cartItem.gallery[0].gallery}
              <Image src={this.props.cartItem.gallery[0]} />
            </div>
          </Flex>
        </Flex>
      </div>
    );
  }
}

export default CartItem;

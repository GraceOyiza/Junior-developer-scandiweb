import React from "react";
import {  Image, Row, Col, Grid, Paragraph, Pg, Heading} from '../styled/CategoryStyled';
import { setCategories, setCurrentCategory } from '../feature/categorySlice';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Category extends React.Component {
 

  componentDidMount() {
    const categoryName = window.location.pathname.slice(1)
    getCategoryQuery(categoryName || "all").then(({ data: { category } }) => {
      this.props.setCurrentCategory({
        name: category.name,
        products: category.products,
      });
    });
  };
 
  render() {
    return (
      <div>
        <Heading>{this.props.currentCategory.name.toUpperCase()}</Heading>
        <Grid>
          <Row>
            {this.props.currentCategory.products.map(
              ({ gallery, name, prices, id }) => {
                return (
                  <Col>
                    <Link to={`/products/${id}`}>
                      <Image src={gallery[0]} />
                    </Link>
                    <Link to={`/products/${id}`}>
                      <Paragraph> {name}</Paragraph>
                    </Link>
                    <Pg>
                      {setPriceBasedOnCurrency(
                        prices,
                        this.props.currentCurrency,
                      )}
                    </Pg>
                  </Col>
                );
              },
            )}
          </Row>
        </Grid>


      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  currentCategory: state.category.currentCategory,
  categories: state.category.categories,
  currentCurrency: state.currency.currentCurrency
});
const mapDispatchToProps = { setCategories, setCurrentCategory };


export default connect(mapStateToProps, mapDispatchToProps)(Category);

import React from 'react';
import {setCurrencies,  setCurrentCurrency} from "../feature/currencySlice"
import { connect } from 'react-redux';

class CurrencySwitcher extends React.Component {
   constructor() {
    super();
   this.handleChange = this.handleChange.bind(this);
   }
  componentDidMount() {   
    getCurrencyQuery().then((res) => {
      const { data: { currencies } } = res
     this.props.setCurrencies(currencies);
     this.props.setCurrentCurrency(currencies[0].symbol)
})
}
 handleChange(event) {
    console.log("food" ,  event.target.value)
   this.props.setCurrentCurrency(event.target.value);
 }
  render() {
    return (
      
        <select onChange={this.handleChange}>
          {this.props.currencies.map((currency, index) => (
            <option key={currency.symbol} value={currency.symbol}>
              {currency.symbol} {currency.label}
            </option>
          ))}
        </select>
      
    );
  }
}



const mapStateToProps = (state) => ({
  currencies: state.currency.currencies,
  
});
const mapDispatchToProps = {setCurrencies, setCurrentCurrency };


export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);


import React  from "react";
import {  Ul, VariantItem, H5} from '../styled/ElementStyled';

class VariantList extends React.Component {
 
  render() {
     return (
       <div>
         <H5>{this.props.title}:</H5>
         <Ul>
           {this.props.variants?.map((variant, index) => (
             <VariantItem key={`${this.props.title}-${index}`}>
               <input
                 id={`${this.props.title.toLowerCase()}-${index}`}
                 type="radio"
                 value={variant.value}
                 name={this.props.title.toLowerCase()}
               />
               <label
                 onClick={() =>
                   this.props.selectVariant(this.props.title, variant.value)
                 }
                 style={{
                   backgroundColor:
                     this.props.type === 'swatch' && variant.value,
                 }}
                 htmlFor={`${this.props.title.toLowerCase()}-${index}`}
                 className={` ${variant.selected && 'active'} ${
                   this.props.type === 'swatch' && 'swatch'
                 }`}
               >
                 {this.props.type === 'text' ? variant.value : ''}{' '}
               </label>
             </VariantItem>
           ))}
         </Ul>
       </div>
     );
  }
}




export default VariantList; 
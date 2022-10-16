import styled from 'styled-components';
export const VariantItem = styled.li`
  input {
    display: none;
  }

  label {
    border: 1px solid #000;
    padding: 5px;
    background: ${props => (props.value ? props.value : 'white')};
    min-width: 16px;
    min-height: 16px;
    display: block;

  }

  .active {
    background: #000;
    color: #fff
  }

  .active.swatch {
    border: 3px solid red;
  }
`;

export const H5 = styled.div`
   
   margin:0;
   font-weight: 700;
  

 
`;

export const Ul = styled.ul`
  list-style: none;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  display: flex;
  column-gap: 10px;
  padding-left: 0;
`;

export const Li = styled.div`
  list-style-type: none;
  list-style-position: outside;
  padding: 10px;
  float: left;

  &input[[type="checkbox"]:not(:checked)] {
    list-style-type: none;
    list-style-position: outside;
    padding: 10px;
    float: left;
  }

  input[type='checkbox']:checked {
    list-style-type: none;
    list-style-position: outside;
    padding: 10px;
    float: left;
  }

  input[type='checkbox'] + label {
    display: inline-block;
    padding: 10px;
    cursor: pointer;
    border: 1px solid black;
    color: black;
    background-color: white;
    margin-bottom: 10px;
  }

  input[type='checkbox']:checked + label {
    border: 1px solid white;
    color: white;
    background-color: black;
  }
`;








// export const Image = styled.img`
//   height: 10%;
//   width: 30%;
// `;

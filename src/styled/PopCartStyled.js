import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  margin-bottom: 30px;
  justify-content: space-between;
 
`;
export const Flex1 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Pag = styled.div`
   font-size: 16px;
  
`;

export const Price = styled.div`
 margin-top: 10px;
 margin-bottom: 8px;
 font-weight:700;
`;


export const Image = styled.img`
  
  width: 121px;
  height: 121px;
  object-fit: cover;
  aspect-ratio: 1/1;
`;

export const Popupcart = styled.div`
  position: fixed;
  top: 50px;
  right: 50px;
  z-index: 999;
  transform: translateX(${props => (props.isOpen ? '50px' : '100vw')});
  transition: transform 0.5s ease-in-out;
  background: white;
  border: 1px solid red;
  max-width: 350px;
  padding:20px;
`;

export const Button = styled.button`
  color: white;
  border-radius: 4px;
  padding: 1px;

  cursor: pointer;
  border: none;
  outline: none;
  margin-top: -1px
  margin-right:4px;
`;

export const Button1 = styled.button`
  color: white;
  border-radius: 4px;
  padding: 4px 0;
  cursor: pointer;
  border: none;
  outline: none;
  margin-bottom: 10px;
`;

export const ButtonClick = styled.button`
  background-color: springGreen;
  color: white;
  font-size: 13px;
  border-radius: 4px;
  padding: 1rem 2rem;
  margin: 1rem;
  cursor: pointer;
  border: none;
  outline: none;
`;

export const Button2 = styled.button`

  color: black;
  font-size: 13px;
  border-radius: 4px;
  padding: 1rem 2rem;
  margin: 1rem;
  cursor: pointer;
  border: none;
  outline: none;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: ${props => (props.isOpen ? 'block' : 'none')};
`;

export const QuantityInput = styled.input`
    text-align: center;
    width: 20px;
    height: 20px;
    padding: 5px;
    border: none;
    outline: none;
`;

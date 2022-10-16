import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1024px;
  padding: 0 20px;

`;

export const Flex2 = styled.div`
  display: flex;

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: #00d100;
    text-decoration: underline;
  }
`;

export const Flex2h5 = styled.div`
    padding: 10px

  
    
`;

export const ListItem = styled('li')`
  list-style: none;
  margin-bottom: 0.8em;
`;

export const DropDownList = styled('ul')`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }
`;
export const DropDownListContainer = styled('div')``;

export const DropDownContainer = styled('div')`
  width: 10.5em;
  margin: 0 auto;
`;

 export const DropDownHeader = styled('div')`
  margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;


 export const Link = styled('div')`
   background: black;
 `;

 export const Image = styled.img`
   height: 30%;
   width: 52%;
   object-fit: contain;
   margin-top: 21px;
   margin-left: 15px;
 `;



import styled from 'styled-components';

export const Grid = styled.div`
  
`;

export const Heading = styled.div`
  margin-left: 15px;
  margin-bottom:15px;
  font-size: 25px;
`;
export const Paragraph = styled.div`
  margin-left: 15px
`;
export const Pg = styled.div`
  margin-top: 10px;
  margin-left: 15px;
`;

export const Image = styled.img`
  height: 67%;
  width: 82%;
  object-fit: contain;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Col = styled.div`
  flex: ${props => props.size};
  width: 33%;
  min-width: 33%;
  max-width: 33%;

  a {
    color: black;
    text-decoration: none;
  }

  a:hover {
    color: #00d100;
    text-decoration: underline;
  }
`;

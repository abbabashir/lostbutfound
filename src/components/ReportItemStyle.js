import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--medGrey);
    padding: 0 20px;
`;
export const Content = styled.div`
    //display: flex;
    //align-items: center;
    //justify-content: center;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
`;
export const Image = styled.img`
    width: 200px;
  
    @media screen and (max-width: 500px){
      width: 150px;
    }
`;

export const userInput = styled.input`
    border-style: dashed;
    border-color: coral;
    border-width: 3px;
`;

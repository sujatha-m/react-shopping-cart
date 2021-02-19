import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid lightblue;
  border-radius:20px;

  button{
      border-radius: 0 0 20px 20px;
      background-color: #000;
      color: #fff;
      
      :hover{
        background-color: gray;
        color:#000;
      }
  }
 
  img{
      max-height: 300px;
      object-fit: cover;
      border-radius: 20px 20px 0 0; 
  }

  div{
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;

    h3{
      text-align: center;
    }
  }
`; 
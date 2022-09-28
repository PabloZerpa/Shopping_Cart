import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 2px solid #2C76EE;
  border-radius: 10px;
  box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.71);

  button {
    border-radius: 3px;
    background-color: #1953E6;
    color: black;
    font-weight: bold;
    border: none;
    width: 50%;
    margin-bottom: 10px;
  }
  button:hover
  {
    background-color: #2C76EE;
    transition: 0.8s;
  }

  img {
    max-width: 300px;
    height: 200px;
    object-fit: cover;
    padding: 10px;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    padding: 0px 16px 0 16px;
    margin: 0;
    height: 100%;
    font-size: 14px;
    text-align: justify;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  div h3
  {
    text-align: center;
  }
  div p
  {
    text-overflow: Ellipsis; /* will make [...] at the end */
    width: 320px; /* change to your preferences */
    height: 50px;
    overflow:hidden; /* older browsers */
  }
`;
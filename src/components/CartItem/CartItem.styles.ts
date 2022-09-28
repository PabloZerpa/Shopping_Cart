import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  font-size: 16px;

  h3
  {
    text-align: center;
    font-size: 16px;
  }

  .information,
  .buttons {
    display: flex;
    justify-content: space-between;
    width: 320px;
  }

  .buttons{
    background-color: rgb(220,220,220);
    border-radius: 5px;
  }

  button
  {
    width: 60px;
    background-color: #1953E6;
    font-size: 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover
  {
    background-color: #2C76EE;
  }

  img {
    height: 150px;
    object-fit: cover;
    margin: 20px;
  }
`;
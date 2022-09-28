import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 2px solid rgba(27,168,97,1);
  border-radius: 10px;
  box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.71);

  button {
    border-radius: 3px;
    background: rgb(60,199,129);
    background: linear-gradient(180deg, rgba(60,199,129,1) 0%, rgba(27,168,97,1) 70%);
    color: black;
    font-weight: bold;
    border: none;
    width: 50%;
    margin-bottom: 10px;
  }
  button:hover
  {
    opacity: .7;
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
    text-overflow: Ellipsis; 
    width: 300px; 
    height: 50px;
    overflow:hidden; 
  }

  @media screen and (max-width: 1240px)
  {
    div p
    {
      width: 200px; 

    }
  }

  @media screen and (max-width: 500px)
  {
    img {
      height: 80px;
    }
    button {
      width: 90%;
    }
    div h3
    {
      width: 100px; 
    }
    div p
    {
      display: none;
    }
  }
`;
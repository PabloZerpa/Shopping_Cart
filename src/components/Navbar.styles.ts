import styled from 'styled-components';

export const Container = styled.div`

  font-family: Arial, Helvetica, sans-serif;

    .nav
    {
      position: fixed;
      z-index: 99;
      left: 0px;
      top: 0px;
      width: 100%;
      height: 80px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      font-size: 20px;
      list-style: none;
      background-color: #fff;
      box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.71);
    }

    ul
    {
      display: flex;
      list-style: none;
      gap: 64px;
    }

    ul a
    {
      color: #000;
      text-decoration: none;
    }

    .other
    {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 32px;
    }

    input
    {
      width: 250px;
      height: 20px;
      padding: 10px;
      border-radius: 20px;
      border: none;
      outline: none;
      background-color: lightgray;
      color: black;
      font-size: 16px;
    }

    .logo *, .menu *
    {
      font-size: 48px;
      color: #2C76EE;
      cursor: pointer;
    }

    .menu
    {
      display: none;
      position: fixed;
      z-index: 100;
      left: 30px;
      top: 15px;
    }

    .darkMode *
    {
      font-size: 40px;
      color: gold;
      cursor: pointer;
    }

    @media screen and (max-width: 1000px){
      .menu
      {
        display: block;
      }

      .nav
      {
        display: none;
      }

      .navActive
      {
        position: fixed;
        z-index: 99;
        left: 0px;
        top: 0px;
        width: 50%;
        height: 72vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 96px;
        background-color: #fff;
        font-size: 20px;
        list-style: none;
        box-shadow: -1px 0px 5px 0px rgba(0,0,0,0.71);
      }
    }

`;
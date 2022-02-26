import styled from "styled-components";

export const Container = styled.section`

`

export const Content = styled.div`
  max-width: 1080px;
  margin: auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  
  width: 100%;
  
  margin-top: 47px;
  
  p {
    font-family: "Sen", sans-serif;
    font-weight: 700;
    font-size: 32px;
  }
  div {
    button {
      cursor: pointer;
    }
    .btn-login {
      font-family: "Inter", sans-serif;
      font-weight: 500;
      font-size: 16px;
      
      background: #FFF;
      border: none;
      border: 2px solid #EAEAEA;
      width: 183px;
      height: 49px;
      border-radius: 100px;
      
      position: relative;
      bottom: 6px;
      
      text-align: center;
      transition: 300s;
    }
    .btn-search {
      background: #FFF;
      border: none;
      border: 2px solid #EAEAEA;
      border-radius: 50%;
      margin-right: 45px;
      
      width: 50px;
      height: 50px;
      transition: 300s;
    }
  }
`



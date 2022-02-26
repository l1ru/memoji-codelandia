import styled from "styled-components";

export const Container = styled.section`
  
`

export const Content = styled.div`
  max-width: 1080px;
  margin: auto;
  
  padding-top: 173px;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  
  .memojis {
    z-index: 1;
    
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    &.second {
      top: 400px;
      justify-content: space-evenly;
    }
    
    .memoji1 {
      position: relative;
      right: 100px;

      display: flex;
      justify-content: center;
      align-items: center;

      img {
        position: absolute;
      }

      ::before {
        content: "";
        width: 200px;
        height: 200px;
        top: 0;
        left: 0;

        background: linear-gradient(136.92deg, #2DC7ED 3.14%, rgba(45, 199, 237, 0) 100%);
        transform: rotate(45deg);
      }
    }
    .memoji2 {
      position: relative;
      left: 100px;
      bottom: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        position: absolute;
      }
      
      ::before {
        content: "";
        width: 200px;
        height: 200px;
        border-radius: 50%;
        top: 0;
        left: 0;
        
        background: linear-gradient(270deg, #F2C94C 0%, rgba(242, 201, 76, 0) 100%);
      }
    }
    
    .memoji4 {
      position: relative;
      left: 100px;
      bottom: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        position: absolute;
      }

      ::before {
        content: "";
        width: 200px;
        height: 200px;
        top: 0;
        left: 0;
        background: linear-gradient(136.92deg, #EF7C89 3.14%, rgba(239, 124, 137, 0) 100%);
        border-radius: 30px;
      }
    }

    .memoji5 {
      position: relative;
      left: 100px;
      top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        position: absolute;
      }

      ::before {
        content: "";
        width: 200px;
        height: 200px;
        border-radius: 50%;
        top: 0;
        left: 0;

        background: linear-gradient(270deg, #7248EC 0%, rgba(114, 72, 236, 0) 100%);
      }
    }

    .memoji3 {
      position: relative;
      left: 100px;
      bottom: 110px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        position: absolute;
        bottom: 10px;
      }

      ::before {
        content: "";
        width: 200px;
        height: 200px;
        top: 0;
        left: 0;

        background: linear-gradient(180deg, #00E861 0%, rgba(0, 232, 97, 0) 100%);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      }
    }
    
    
    
    
    
    padding-top: 263px;
    width: 100%;
  }
  
  p {
    z-index: 2;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #2F2F2F;
    text-transform: uppercase;
  }
  h1 {
    padding-top: 40px;
    z-index: 2;
    font-family: "Sen", sans-serif;
    font-weight: 700;
    font-size: 72px;
    line-height: 70px;
    
    max-width: 900px;
    text-align: center;
    color: #2F2F2F;
  }
  div {
    z-index: 2;
    display: flex;
    align-items: center;
    
    padding-top: 82px;
    button {
      cursor: pointer;
      margin: 0 52px;
      padding: 15px 40px;
      border-radius: 10px;
      border: none;
      
      font-family: "Inter", sans-serif;
      font-size: 20px;
    }
    .first {
      background-color: #6610F2;
      font-weight: 600;
      color: #F9F9F9;
    }
    .second {
      border: 2px solid #EAEAEA;
      font-weight: 500;
      color: #2F2F2F;
    }
  }
`
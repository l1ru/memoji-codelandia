import styled from "styled-components";

export const Container = styled.div`
  height: 250px;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 390px;
  
  div {
    text-align: left;
    color: #2F2F2F;
    h2 {
      padding-left: 12px;
      margin-bottom: 27px;
      border-left: 3px solid #6610F2;
      font-family: "Sen", sans-serif;
      font-weight: 400;
      size: 20px;
      text-transform: uppercase;
    }
    p {
      max-width: 400px;
      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 16px;
      font-style: italic;
    }
  }
`
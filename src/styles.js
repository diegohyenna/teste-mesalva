import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: "Nunito", sans-serif;
  };
  
  img, input, select {
    width: 100%
  }

  button {
    outline: 0;
  }

  input { 
    height: 40px;
    border-radius: 4px;
    margin: 10px 0;
    color: gray;
    font-size: 16px;
    padding: 0 10px;
    outline: 0;
    background-color: #EEE;
  }

  input::placeholder {
    color: gray;
    font-weight: bold;
  }

  input:focus {
    border: 2px solid orange;
  }

  select {
    height: 40px;
    border-radius: 4px;
    margin: 10px 0;
    color: gray;
    font-size: 16px;
    padding: 0 10px;
    outline: 0;
    background-color: #EEE;
  }

  hr {
    border-top: 1px solid gainsboro;
  }
`;

export const Global = styled(GlobalStyle)``;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const Row = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Col = styled.div`
  padding: 0 10px;
`;

export const Colx1 = styled(Col)`
  width: 8.33%;
`;

export const Colx2 = styled(Col)`
  width: 16.66%;
`;

export const Colx3 = styled(Col)`
  width: 25%;
`;

export const Colx4 = styled(Col)`
  width: 33.33%;
`;

export const Colx5 = styled(Col)`
  width: 41.66%;
`;

export const Colx6 = styled(Col)`
  width: 50%;
`;

export const Colx7 = styled(Col)`
  width: 58.33%;
`;

export const Colx8 = styled(Col)`
  width: 58.33%;
`;

export const Colx9 = styled(Col)`
  width: 66.66%;
`;

export const Colx10 = styled(Col)`
  width: 83.33%;
`;

export const Colx11 = styled(Col)`
  width: 91.66%;
`;

export const Colx12 = styled(Col)`
  width: 100%;
`;

export const Jumbotron = styled.div`
  /* background-color: gainsboro; */
  padding: 60px 0;
`;

export const Title = styled.h1`
  font-size: ${(props) =>
    (props.type === "title" ? "40px" : props.type === "subtitle")
      ? "24px"
      : "12px"};
  text-align: ${(props) =>
    props.align === "center"
      ? "center"
      : props.align === "left"
      ? "left"
      : props.align === "right"
      ? "right"
      : "left"};
  color: blueviolet;
  margin-top: 10px;
`;

export const Button = styled.a`
  ${(props) => (props.block ? "width: 100%;" : "")}
  ${(props) =>
    props.type === "primary"
      ? "background-color: dodgerblue; color: white;"
      : "background-color: white; color: gray; border: 1px solid gainsboro;"}
  width: 100%;
  margin-top: 10px;
  text-align: center;
  padding: 10px;
  display: block;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  border-radius: 4px;
`;

export const SearchButton = styled.button`
  width: 100%;
  height: calc(100% - 20px);
  padding: 5px;
  margin: 10px 0px;
  background-color: blueviolet;
  color: white;
  font-size: 17px;
  font-weight: 800;
  letter-spacing: 2px;
  border-radius: 5px;
`;

export const Date = styled.p`
  font-weight: bold;
  font-size: 12px;
  color: dodgerblue;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 14px;
  margin-top: 20px;
  color: gray;
`;

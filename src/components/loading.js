import React from "react";
import styled from "styled-components";

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
`;

export const Loader = styled.div`
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  border-top: 6px solid #3498db;
  width: 30px;
  height: 30px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default ({ props }) => {
  return (
    <ContainerLoading>
      <Loader></Loader>
    </ContainerLoading>
  );
};
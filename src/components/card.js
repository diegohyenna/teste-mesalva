import React, { Fragment } from "react";
import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid gainsboro;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
`;

export default ({ children }) => {
  return <Card>{children}</Card>;
};

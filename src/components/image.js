import React from "react";
import styled from "styled-components";

export const Image = styled.img`
  max-width: 400px;
`;

export default ({ props, imageUrl }) => {
  return <Image src={imageUrl}></Image>;
};

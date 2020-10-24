import React from "react";
import styled from "styled-components";

export const Image = styled.img`
  max-width: 400px;
  transform: translateX(-50%);
  position: relative;
  top: 0;
  left: 50%;
`;

export default ({ props, imageUrl }) => {
  return <Image src={imageUrl}></Image>;
};

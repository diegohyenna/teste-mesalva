import styled from "styled-components";

export const Title = styled.h1`
  text-align: ${(props) =>
    props.align === "center"
      ? "center"
      : props.align === "left"
      ? "left"
      : props.align === "right"
      ? "right"
      : "left"};
  color: orange;
  font-size: 40px;
  margin: 20px 0;
`;

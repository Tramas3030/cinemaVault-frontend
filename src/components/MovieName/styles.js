import styled from "styled-components";

export const Container = styled.h1`
  width: 100%;

  font-size: ${({ isLarge }) => isLarge? "36px" : "24px" };
`;
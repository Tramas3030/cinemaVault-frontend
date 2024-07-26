import styled from "styled-components";

export const Container = styled.h1`
  font-size: ${({ $islarge }) => $islarge? "36px" : "24px" };
`;
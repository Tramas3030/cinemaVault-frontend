import styled from "styled-components";

export const Container = styled.h1`
  font-size: ${({ $islarge }) => $islarge != "false" ? "36px" : "24px" };
`;
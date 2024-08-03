import styled from "styled-components";

export const Container = styled.p`
  text-align: justify;

  text-overflow: ${({ $textpreview }) => $textpreview != "false" ? "ellipsis" : "normal"};
  white-space: ${({ $textpreview }) => $textpreview != "false" ? "nowrap" : "pre-line"};
  overflow: ${({ $textpreview }) => $textpreview != "false" ? "hidden" : "normal"};
`;
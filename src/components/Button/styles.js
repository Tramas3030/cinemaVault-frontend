import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;

  background-color: ${({ theme, highlight }) => highlight ? theme.COLORS.BLACK : theme.COLORS.PINK};
  color: ${({ theme, highlight }) => highlight ? theme.COLORS.PINK : theme.COLORS.BLACK};

  border: none;
  padding: 0;
  margin-top: 16px;

  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    filter: saturate(2.0);
  }
`;
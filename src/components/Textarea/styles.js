import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 400px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GREY};

  border: none;
  resize: none;

  margin: 40px 0;
  border-radius: 10px;
  padding: 16px;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GREY};
  }
`;
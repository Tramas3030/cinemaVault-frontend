import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GREY};

  border-radius: 10px;

  > input {
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.GREY};

    background: transparent;
    border: 0;
    
    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GREY};
    }
  }

  > svg {
    margin-left: 16px;
  }
`;
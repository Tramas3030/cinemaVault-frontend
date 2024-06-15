import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  
  align-items: center;
  text-align: center;

  width: 15%;
  padding: 16px;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GREY}` : "none"};

  border-radius: 10px;

  > input {
    width: 100%;
    
    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GREY};
    }
  }

  > button {
    border: none;
    background: none;

    color: ${({ theme }) => theme.COLORS.PINK};

    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

`;
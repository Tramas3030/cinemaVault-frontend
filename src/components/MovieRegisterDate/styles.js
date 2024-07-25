import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 6px;

  font-size: 16px;

  align-items: center;

  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  > svg {
    margin-left: 6px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;
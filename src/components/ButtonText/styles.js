import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  gap: 8px;
  
  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 16px;

  text-align: center;
  align-items: center;
`;
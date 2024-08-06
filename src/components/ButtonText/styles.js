import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  gap: 8px;
  
  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.PINK};
  font-size: 16px;

  text-align: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  .home-header & {
    padding: 16px 32px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
`;
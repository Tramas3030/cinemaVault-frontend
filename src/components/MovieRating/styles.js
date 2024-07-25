import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  
  display: flex;
  gap: 6px;

  padding-top: 10px;
`;

export const Star = styled.button`
  border: none;
  background: none;

  cursor: ${({ disabled }) => disabled ? "pointer" : "default"};

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    height: ${({ isLarge }) => isLarge ? "20px" : "12px"};
    fill: ${({ theme, active }) => active ? theme.COLORS.PINK : 'transparent'};

    transition: transform 0.2s ease;
  }

  > svg:hover {
    transform: ${({ disabled }) => disabled ? "scale(1.2)" : "none"};
  }
`;
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

  cursor: ${({ $disabled }) => $disabled != "false" ? "pointer" : "default"};

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    height: ${({ $islarge }) => $islarge != "false" ? "20px" : "12px"};
    fill: ${({ theme, $active }) => $active != "false" ? theme.COLORS.PINK : 'transparent'};

    transition: transform 0.2s ease;
  }

  > svg:hover {
    transform: ${({ $disabled }) => $disabled != "false" ? "scale(1.2)" : "none"};
  }
`;
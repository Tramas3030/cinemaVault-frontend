import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 116px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BORDER_GREY};

  display: flex;
  justify-content: space-around;
  align-items: center;

  gap: 64px;

  padding: 0 80px;

  > a {
    font-size: 32px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: center;
  
  gap: 14px;
  
  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 14px;
      white-space: nowrap;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    a {
      font-size: 14px;

      text-align: end;
      text-decoration: none;
      
      color: ${({ theme }) => theme.COLORS.GREY};
    }
  }
`;
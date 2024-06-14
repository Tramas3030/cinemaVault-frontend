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

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Profile = styled.div`
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
    }

    a {
      font-size: 14px;

      text-align: end;
      text-decoration: none;
      
      color: ${({ theme }) => theme.COLORS.GREY};
    }
  }
`;
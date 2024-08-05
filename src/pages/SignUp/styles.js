import backgroundImg from "../../assets/background.png";

import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 134px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 48px;
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GREY_P};
  }

  > h2 {
    font-size: 24px;
    margin: 40px 0;
  }

  > h1, h2, p {
    align-self: flex-start;
  }

  > .form-fields {
    width: 100%;
    
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  > Button {
    margin: 24px 0 42px;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;
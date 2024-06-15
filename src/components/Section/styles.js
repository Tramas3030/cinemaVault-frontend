import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  margin-bottom: 40px;

  > h2 {
    margin-bottom: 24px;

    font-size: 20px;
    font-weight: normal;

    color: ${({ theme }) => theme.COLORS.GREY_H2};
  }
`;
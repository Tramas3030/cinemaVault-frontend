import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 222px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  background-color: ${({ theme }) => theme.COLORS.BROWN};

  > .header {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  > p {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GREY_H2}
  }
`;
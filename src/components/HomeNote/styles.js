import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 222px;

  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: 32px;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.COLORS.BROWN};

  > .header {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  > p {
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GREY_H2};

    height: 52px;
  }
`;
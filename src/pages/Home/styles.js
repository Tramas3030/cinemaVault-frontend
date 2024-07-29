import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    /* overflow-y: auto; */
    padding: 50px 80px;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  > .home-header {
    display: flex;
    justify-content: space-between;
  }

  > .home-header h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > .home-header button {
    padding: 16px 32px;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 8px;
  }
`;
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
    padding: 50px 80px;
    overflow-y: auto;
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 38px;

  > .home-header {
    display: flex;
    justify-content: space-between;
  }

  > .home-header h1 {
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > .movies {
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow-y: auto;
  }
`;
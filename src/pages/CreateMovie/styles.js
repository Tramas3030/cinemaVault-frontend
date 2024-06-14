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
    overflow-y: auto;
    padding: 50px 80px;

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 6px;
    }

  }
`;

export const Content = styled.div`
  width: 100%;
  
  > h1 {
    margin-top: 24px;
    margin-bottom: 40px;
  }

  > .title-and-rating {
    display: flex;
    gap: 40px;
  }
`;
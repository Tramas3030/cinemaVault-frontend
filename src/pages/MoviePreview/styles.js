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
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;

  > .content-header {
    display: flex;
    flex-direction: column;
    gap: 24px;

    > .movieName-and-rating {
      display: flex;

      align-items: center;
      
    }

    > .movieName-and-rating h1 {
      margin-right: 20px;
    }
  }
`;
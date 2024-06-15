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
  
  > h1 {
    margin-top: 24px;
    margin-bottom: 40px;
  }

  > .title-and-rating {
    display: flex;
    gap: 40px;
  }

  > Section .markers-note-item {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    gap: 16px;
    flex-wrap: wrap;
    
    padding: 16px;
    width: 100%;
    height: auto;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.BLACK};
  }

  > footer {
    display: flex;
    width: 100%;
    gap: 40px;
  }
`;
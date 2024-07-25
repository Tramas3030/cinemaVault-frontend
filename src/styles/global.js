import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    _-webkit-font-smoothing_: antialiased;
    _-moz-osx-font-smoothing_: grayscale;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  body, input, button, textarea {
    font-family: 'Roboto slab', serif;
    font-size: 16px;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  a:hover {
    filter: brightness(0.9);
  }

  main {
    scrollbar-width: auto; /* Pode ser 'auto', 'thin', ou 'none' */
    scrollbar-color: ${({ theme }) => theme.COLORS.PINK} ${({ theme }) => theme.COLORS.BACKGROUND_900}; /* thumb color track color */

    &::-webkit-scrollbar {
      width: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 6px;
    }
  }
`;
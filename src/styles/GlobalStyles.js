import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    --blue-100: #EEF3FF;
    --blue-200: #d1deff;
    --blue-300: #a8c0ff;
    --blue-400: #6993ff;
    --blue-500: #3069fe;
    --blue-600: #1252f7;
    --blue-700: #0846e4;

    --red-100: #fdf2f2;
    --red-200: #f8d4d7;
    --red-300: #f8b0b4;
    --red-400: #f57f86;
    --red-500: #ec5962;
    --red-600: #d45058;
    --red-700: #c2434b;

    --green-100: #ebfae2;
    --green-200: #d9f0ca;
    --green-300: #b3e494;
    --green-400: #85d348;
    --green-500: #68c132;
    --green-600: #57ad23;
    --green-700: #4f9c20;

    --orange-100: #fff2e4;
    --orange-200: #ffddb9;
    --orange-300: #ffc382;
    --orange-400: #ffa849;
    --orange-500: #ff921b;
    --orange-600: #ed810c;
    --orange-700: #d87407;

    --gray-100: #f3f3f5;
    --gray-150: #ececec;
    --gray-200: #e5e5e5;
    --gray-300: #c0c0c0;
    --gray-400: #a5a5a5;
    --gray-500: #858585;
    --gray-600: #6f6f6f;
    --gray-700: #4a4a4a;
    --gray-800: #333333;
    --gray-900: #252525;
    --gray-950: #191919;

    --white: #ffffff;

    --transition-time: 0.2s;
    --border-radius: 9px;
  }

  html {
    font-size: 62.5%;
  }
  @media (max-width: 720px) {
    html {
      font-size: 50%;
    }
  }

  body, input, button {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a:link,
  a:visited {
    text-decoration: none;
  }

  a:hover,
  a:active {
    text-decoration: underline;
  }

  button:not(:disabled):hover {
    cursor: pointer;
  }

  .container {
    max-width: 1200px;
    margin-inline: auto;
    padding-inline: 1.6rem;
  }
`;

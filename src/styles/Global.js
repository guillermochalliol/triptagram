import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --primary: #efb6b2;
  --secondary: #4e4e4e;
  --error: #ff4a4a;
}

/* base styles & title */
body {
  font-family: "Noto Serif";
  color: var(--secondary);

  .app {
    max-width: 960px;
    margin: 0 auto;
  }
}
`
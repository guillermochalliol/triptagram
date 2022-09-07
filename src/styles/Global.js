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

    /* modal styles */
    .backdrop{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      img{
        display: block;
        max-width: 60%;
        max-height: 80%;
        margin: 10rem auto;
        box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
      }
    }
    /* progress bar styles */
    .progress-bar{
      height: 5px;
      background: var(--primary);
      margin-top: 20px;
    }

    /* image grid styles */
    .img-grid{
      margin: 20px auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 40px;
      .img-wrap{
        overflow: hidden;
        height: 0;
        padding: 50% 0;
        /* padding controls height, will always be perfectly square regardless of width */
        position: relative;
        opacity: 0.8;
        img{
          min-width: 100%;
          min-height: 100%;
          max-width: 150%;
          position: absolute;
          top: 0;
          left: 0;
          &:hover{
            cursor:pointer;
          }
        }
      }
    }
  }
}
`
import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
      ${reset}
      * {
        box-sizing: border-box;
      }
      html{
        overflow-y: overlay;
      }
      body{
        font-family:'Noto Sans KR', -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
      
        /* NOTE: 삭제 */
        background-color: #353535;
      }
      a {
        color: inherit;
        text-decoration: none;
      }
      input, button {
        background-color: transparent;
        border: none;
        outline: none;
      }
      h1, h2, h3, h4, h5, h6{
        font-family:'Maven Pro', sans-serif;
      }

      @media only screen and (max-width: 768px) {
        body {
          font-size: 12px;
        }
      }

      @media only screen and (max-width: 576px) {
        body {
          font-size: 10px;
        }
      }
    `;

export default GlobalStyle;

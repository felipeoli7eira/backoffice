import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body::before, body::after {
      content: '';
      position: absolute;
      opacity: 0.7;
      width: 447px;
      height: 445px;
      border-radius: 50%;
      background: radial-gradient(70% 70% at 49% 50%, #6ACC32 2%, rgba(106, 204, 50, 0) 101%);
      box-shadow: rgb(95 182 47) 0px 0px 232px -23px;
    }

  body {
    background: ${(props) => props.theme.colors.gray900};
    color: ${(props) => props.theme.colors.white};
    font-family: ${(props) => props.theme.fontFamily.sans};
    background: linear-gradient(72.44deg, #1D1D1D 0%, #3F3F3F 100%);



    &::before {
      top: 32%;
      left: -124px;
    }

    &::after {
        right: 10px;
        bottom: 1rem;
    }
  }
`;

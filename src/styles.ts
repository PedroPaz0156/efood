import { createGlobalStyle } from 'styled-components'

export const Cores = {
  bege: '#fff8f2',
  salmao: '#FFEBD9',
  vermelho: '#E66767',
  branco: '#fff'
}

export const GlobalCss = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Roboto, sans-serif;
      list-style: none;
  }

  body {
    background-color: ${Cores.bege};
    color: ${Cores.vermelho};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

import { styled } from 'styled-components'

import fundo from '../../assets/images/fundo.png'

export const HeroBack = styled.div`
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 380px;
  padding: 40px 0;
  display: flex;

  img {
    width: 124px;
    height: 56px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1 {
      max-width: 540px;
      text-align: center;
      font-size: 36px;
    }
  }
`

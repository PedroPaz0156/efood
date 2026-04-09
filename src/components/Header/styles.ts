import styled from 'styled-components'

import fundo from '../../assets/images/fundo.png'

export const HeaderBox = styled.header`
  background-image: url(${fundo});
  background-size: cover;
  height: 180px;
  padding: 40px 0 60px;
`

export const NavBar = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: bold;

  img {
    width: 124px;
    height: 56px;
  }
`

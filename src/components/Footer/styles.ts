import styled from 'styled-components'
import { Cores } from '../../styles'

export const FooterBox = styled.footer`
  background-color: ${Cores.salmao};

  div {
    margin: 40px 0px;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    p {
      max-width: 480px;
      font-size: 10px;
      text-align: center;
    }

    > img {
      width: 124px;
      height: 56px;
    }
  }
`

export const Social = styled.ul`
  list-style: none;
  display: flex;
  padding-top: 20px;
  padding-bottom: 40px;

  li {
    margin-right: 8px;
  }
`

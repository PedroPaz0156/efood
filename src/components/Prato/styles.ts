import styled from 'styled-components'
import { Cores } from '../../styles'

export const PratoCard = styled.div`
  height: 340px;
  width: 320px;
  background-color: ${Cores.vermelho};
  color: ${Cores.bege};
  padding: 8px;

  img {
    object-fit: cover;
    width: 100%;
    height: 160px;
  }

  h3 {
    font-size: 16px;
  }

  p {
    margin: 8px 0;
    font-size: 14px;
  }
`

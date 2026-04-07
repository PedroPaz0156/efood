import styled from 'styled-components'
import { Cores } from '../../styles'
import { BotaoLink } from '../Botao/styles'

export const RestauranteCard = styled.div`
  height: 440px;
  border: 2px solid ${Cores.vermelho};
  width: 480px;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 216px;
  }

  ${BotaoLink} {
    margin: 8px;
  }

  > div {
    padding: 8px;
  }
`

export const Cabecalho = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 20px;
    height: 20px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  padding: 8px 0px;
`

export const Tag = styled.div`
  background-color: ${Cores.vermelho};
  color: ${Cores.bege};
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
  margin: 8px;
`

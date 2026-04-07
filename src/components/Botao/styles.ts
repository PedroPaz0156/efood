import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Cores } from '../../styles'

export const BotaoAction = styled.button`
  background-color: ${Cores.bege};
  color: ${Cores.vermelho};
  border: none;
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
  display: block;
`

export const BotaoLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  background-color: ${Cores.vermelho};
  color: ${Cores.bege};
  font-size: 14px;
  font-weight: bold;
  padding: 8px;
`

import styled from 'styled-components'
import { Cores } from '../../styles'

export const Fundo = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
  color: ${Cores.bege};
  font-size: 32px;
  display: flex;
  position: relative;

  .container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px 0px;
    z-index: 1;
  }

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    content: '';
  }
`

export const TipoRestaurante = styled.h2`
  font-weight: 100;
`

export const NomeRestaurante = styled.h2`
  font-weight: bold;
`

import styled from 'styled-components'
import { Cores } from '../../styles'
import { BotaoAction } from '../Botao/styles'

export const PratoCard = styled.div`
  height: 340px;
  width: 320px;
  background-color: ${Cores.vermelho};
  color: ${Cores.bege};
  padding: 8px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    object-fit: cover;
    border-radius: 8px;
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalCard = styled.div`
  max-width: 960px;
  background-color: ${Cores.vermelho};
  color: ${Cores.branco};
  display: flex;
  flex-direction: column;
  align-items: end;
  position: relative;
  z-index: 1;

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    margin: 12px 0px;
  }

  div {
    margin: 0 32px 32px 32px;
  }

  > ${BotaoAction} {
    max-height: 32px;
    background-color: ${Cores.vermelho};
    padding: 8px;
  }
`

export const ModalConteudo = styled.div`
  display: flex;

  h4 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
  }

  div {
    margin: 0px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const FotoModal = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
`

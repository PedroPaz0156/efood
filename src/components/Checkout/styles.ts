import styled from 'styled-components'

import excluir from '../../assets/images/lixeira-de-reciclagem 1.png'

import { Cores } from '../../styles'
import { BotaoAction } from '../Botao/styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${Cores.preto};
  opacity: 0.7;
`

export const SideContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const CheckoutSideContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.delivery {
    display: flex;
  }

  &.payment {
    display: flex;
  }

  &.success {
    display: flex;
  }
`

export const Precos = styled.div`
  color: ${Cores.bege};
  padding: 24px 8px 16px;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`

export const Sidebar = styled.aside`
  max-width: 360px;
  width: 100%;
  color: ${Cores.bege};
  z-index: 1;
  background-color: ${Cores.vermelho};
  padding: 24px 8px 0 8px;

  ${BotaoAction} {
    max-width: 100%;
    width: 100%;
    margin-bottom: 16px;
  }

  > h3 {
    font-size: 16px;
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  > p {
    font-size: 14px;
    margin-bottom: 24px;
  }

  > button {
    background-color: ${Cores.bege};
    color: ${Cores.vermelho};
    border: none;
    font-size: 14px;
    font-weight: bold;
    padding: 8px;
    display: block;
    cursor: pointer;
    max-width: 100%;
    width: 100%;
    margin-bottom: 8px;
  }
`

export const CarrinhoItem = styled.li`
  display: flex;
  background-color: ${Cores.salmao};
  color: ${Cores.vermelho};
  padding: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    color: ${Cores.vermelho};
  }

  span {
    font-size: 14px;
    color: ${Cores.vermelho};
  }

  button {
    background-image: url(${excluir});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 0;
  }
`

export const InputRow = styled.div`
  display: block;

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${Cores.bege};
  }

  input {
    color: ${Cores.preto};
    background-color: ${Cores.bege};
    border: none;
    width: 100%;
    height: 32px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`

export const MicroInputRow = styled.div`
  justify-content: space-between;
  display: flex;

  label {
    font-size: 14px;
    font-weight: bold;
    color: ${Cores.bege};
  }

  input {
    color: ${Cores.preto};
    background-color: ${Cores.bege};
    border: none;
    height: 32px;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`

export const ErrorWarning = styled.span`
  color: ${Cores.branco};
  font-size: 12px;
  margin-bottom: 4px;
  display: block;
  font-style: italic;
`

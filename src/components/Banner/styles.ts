import styled from 'styled-components'

export const Fundo = styled.div`
  width: 100%;
  height: 280px;
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 32px;
  position: relative;

  .container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
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

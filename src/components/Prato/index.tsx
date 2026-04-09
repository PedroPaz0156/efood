import Botao from '../Botao'
import fechar from '../../assets/images/close 1.png'
import { FotoModal, Modal, ModalCard, ModalConteudo, PratoCard } from './styles'
import { useState } from 'react'

type Props = {
  id: number
  nome: string
  descricao: string
  foto: string
  porcao: string
  preco: number
}

interface ModalState {
  isVisible: boolean
}

const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Prato = ({ nome, descricao, foto, porcao, preco }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const getDescricao = (descricao: string) => {
    if (descricao.length > 190) {
      return descricao.slice(0, 187) + '...'
    }

    return descricao
  }

  const openModal = () => {
    setModal({
      isVisible: true
    })
  }

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <>
      <PratoCard>
        <img src={foto} />
        <div>
          <h3>{nome}</h3>
          <p>{getDescricao(descricao)}</p>
        </div>
        <Botao tipo={'botao'} onClick={() => openModal()}>
          Adicionar ao carrinho
        </Botao>
      </PratoCard>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalCard className="container">
          <Botao tipo={'botao'} onClick={() => closeModal()}>
            <img src={fechar} />
          </Botao>
          <ModalConteudo>
            <FotoModal src={foto} />
            <div>
              <h4>{nome}</h4>
              <p>{descricao}</p>
              <p> Serve de: {porcao}</p>
              <Botao tipo="botao">
                Adicionar ao carrinho - {formataPreco(preco)}
              </Botao>
            </div>
          </ModalConteudo>
        </ModalCard>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Prato

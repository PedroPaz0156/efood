import Botao from '../Botao'
import fechar from '../../assets/images/close 1.png'
import { FotoModal, Modal, ModalCard, ModalConteudo, PratoCard } from './styles'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { abrir, adicionar } from '../../store/reducers/carrinho'
import { Cardapio } from '../../pages/Home'

type Props = {
  prato: Cardapio
}

interface ModalState {
  isVisible: boolean
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Prato = ({ prato }: Props) => {
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

  const dispatch = useDispatch()

  const adicionarAoCarrinho = () => {
    dispatch(adicionar(prato))
    closeModal()
    dispatch(abrir())
  }

  return (
    <>
      <PratoCard>
        <img src={prato.foto} />
        <div>
          <h3>{prato.nome}</h3>
          <p>{getDescricao(prato.descricao)}</p>
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
            <FotoModal src={prato.foto} />
            <div>
              <h4>{prato.nome}</h4>
              <p>{prato.descricao}</p>
              <p> Serve de: {prato.porcao}</p>
              <Botao tipo="botao" onClick={adicionarAoCarrinho}>
                Adicionar ao carrinho - {formataPreco(prato.preco)}
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

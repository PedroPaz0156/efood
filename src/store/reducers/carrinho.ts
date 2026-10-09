import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DeliveryInfo } from '../../services/api'

type CarrinhoState = {
  pratos: Cardapio[]
  isOpen: boolean
  checkout: boolean
}

const initialState: CarrinhoState = {
  pratos: [],
  isOpen: false,
  checkout: false
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Cardapio>) => {
      const prato = state.pratos.find((item) => item.id === action.payload.id)

      if (!prato) {
        state.pratos.push(action.payload)
      } else {
        alert('Esse prato já está no carrinho')
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.pratos = state.pratos.filter((item) => item.id !== action.payload)
    },
    abrirCarrinho: (state) => {
      state.isOpen = true
    },
    abrirCheckout: (state) => {
      state.checkout = true
    },
    fecharCheckout: (state) => {
      state.checkout = false
    },
    fechar: (state) => {
      state.checkout = false
      state.isOpen = false
    },
    limpar: (state) => {
      state.pratos = []
    }
  }
})

export const {
  abrirCarrinho,
  abrirCheckout,
  adicionar,
  fechar,
  fecharCheckout,
  remover,
  limpar
} = carrinhoSlice.actions
export default carrinhoSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CarrinhoState = {
  pratos: Cardapio[]
  isOpen: boolean
}

const initialState: CarrinhoState = {
  pratos: [],
  isOpen: false
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
    abrir: (state) => {
      state.isOpen = true
    },
    fechar: (state) => {
      state.isOpen = false
    },
    limpar: (state) => {
      state.pratos = []
    }
  }
})

export const { abrir, adicionar, fechar, remover, limpar } =
  carrinhoSlice.actions
export default carrinhoSlice.reducer

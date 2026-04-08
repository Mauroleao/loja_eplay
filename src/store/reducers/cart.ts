import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Game[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state: CartState, action: PayloadAction<Game>) => {
      const game = state.items.find(
        (item: Game) => item.id === action.payload.id
      )

      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('O jogo já está no carrinho.')
      }
    },
    remove: (state: CartState, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item: Game) => item.id !== action.payload
      )
    },
    open: (state: CartState) => {
      state.isOpen = true
    },
    close: (state: CartState) => {
      state.isOpen = false
    },
    clear: (state: CartState) => {
      state.items = []
    }
  }
})

export const { add, open, close, remove, clear } = cartSlice.actions
export default cartSlice.reducer

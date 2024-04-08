import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICart } from '../modules/cart/interfaces'

type BuyCartState = {
  success: boolean
  data: [ICart[]]
  error: boolean
}
const initialState: BuyCartState = {
  success: false,
  data: [[]],
  error: false
}
const buyCartStateSlice = createSlice({
  name: 'buyCartState',
  initialState: initialState,
  reducers: {
    addBuyCart: (state, action: PayloadAction<ICart[]>) => {
      let shopIdArrays = action.payload.reduce((acc: any, curr: any) => {
        const shopId = curr.shopid
        if (acc[shopId]) {
          acc[shopId].push(curr)
        } else {
          acc[shopId] = [curr]
        }
        return acc
      }, {})
      shopIdArrays = Object.values(shopIdArrays)
      state.success = true
      state.data = shopIdArrays
    }
  }
})

export const buyCartActions = buyCartStateSlice.actions
export default buyCartStateSlice.reducer

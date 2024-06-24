import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  initialLetter?: string
}
const initialState: FilterState = { initialLetter: '*' }

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterByInitialLetter: (state, action: PayloadAction<string>) => {
      state.initialLetter = action.payload
    }
  }
})

export const { filterByInitialLetter } = filterSlice.actions

export default filterSlice.reducer

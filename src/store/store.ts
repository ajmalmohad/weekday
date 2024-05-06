import { configureStore } from '@reduxjs/toolkit'
import searchJobReducer from './searchJobSlice'

export const store = configureStore({
  reducer: {
    searchJob: searchJobReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
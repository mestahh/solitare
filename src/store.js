import { configureStore } from '@reduxjs/toolkit'
import solitareSlice from './solitareSlice'

export default configureStore({
    reducer: {
        solitare: solitareSlice
    }
})
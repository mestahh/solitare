import { configureStore } from '@reduxjs/toolkit'
import tableauSlice from './tableauSlice'

export default configureStore({
    reducer: {
        tableau: tableauSlice
    }
})
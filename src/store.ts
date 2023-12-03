import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './feature/counter/counter_reducer'
import darkModeReducer from './feature/darkmode/darkmode'
export default configureStore({
  reducer: {
    counter: counterReducer,
    darkmode: darkModeReducer,
  }
})
//https://redux.js.org/tutorials/quick-start
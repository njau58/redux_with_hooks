import {combineReducers} from 'redux'
import reducer from '../store/reducer'


const rootReducer = combineReducers({

    counterReducer:reducer
    
})

export default rootReducer
import { createStore } from 'redux'

import rootReducer from './reducers/index'

import { getCache } from '../utils/cache'

const startingState = getCache()

export default createStore(rootReducer, startingState)
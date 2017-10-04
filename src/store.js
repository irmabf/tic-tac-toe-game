import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { REHYDRATE } from 'redux-persist/constants'
import createActionBuffer from 'redux-action-buffer'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import app from './ducks/app'

const reducers = combineReducers({
	app
})

const store = createStore(reducers, compose(
	applyMiddleware(thunk, createLogger(), createActionBuffer(REHYDRATE)),
	autoRehydrate(),
	window.devToolsExtension ? window.devToolsExtension() : (f) => f
))

persistStore(store)

export default store

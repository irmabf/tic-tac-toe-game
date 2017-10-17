import { applyMiddleware, createStore, combineReducers, compose } from 'redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { REHYDRATE } from 'redux-persist/constants'
import createActionBuffer from 'redux-action-buffer'
import thunk from 'redux-thunk'

import game from './ducks/game'
import language from './ducks/language'

const reducers = {
	game,
	language
}

const store = createStore(combineReducers(reducers), compose(
	applyMiddleware(thunk, createActionBuffer(REHYDRATE)),
	autoRehydrate(),
	window.devToolsExtension ? window.devToolsExtension() : (f) => f
))

persistStore(store)

export default store

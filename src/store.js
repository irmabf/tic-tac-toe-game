import compose from 'redux/lib/compose'
import createStore from 'redux/lib/createStore'
import applyMiddleware from 'redux/lib/applyMiddleware'
import combineReducers from 'redux/lib/combineReducers'
import autoRehydrate from 'redux-persist/lib/autoRehydrate'
import persistStore from 'redux-persist/lib/persistStore'
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

import React from 'react'
import { render as DOMrender, unmountComponentAtNode } from 'react-dom'
import ConnectedRouter from 'react-router-redux/ConnectedRouter'
import Provider from 'react-redux/lib/components/Provider'
import createHistory from 'history/createBrowserHistory'

import LanguageProvider from 'containers/LanguageProvider'
import App from 'containers/App'
import store from './store'
import './global-styles'
import { translationMessages } from './i18n'

const history = createHistory()
const root = document.getElementById('root')

const render = (messages) => {
	DOMrender(
		<Provider store={store}>
			<LanguageProvider messages={messages}>
				<ConnectedRouter history={history}>
					<App />
				</ConnectedRouter>
			</LanguageProvider>
		</Provider>,
		root
	)
}


if (module.hot) {
	// Hot reloadable React components and translation json files
	// modules.hot.accept does not accept dynamic dependencies,
	// have to be constants at compile-time
	module.hot.accept(['./i18n', 'containers/App'], () => {
		unmountComponentAtNode(root)
		render(translationMessages)
	})
}


// Chunked polyfill for browsers without Intl support
if (!window.Intl) {
	(new Promise((resolve) => {
		resolve(import('intl'))
	}))
	.then(() => Promise.all([
		import('intl/locale-data/jsonp/en.js'),
		import('intl/locale-data/jsonp/de.js')
	]))
	.then(() => render(translationMessages))
	.catch((err) => {
		throw err
	})
} else {
	render(translationMessages)
}

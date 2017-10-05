import React from 'react'
import ReactDOM from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import 'sanitize.css/sanitize.css'

import LanguageProvider from 'containers/LanguageProvider'
import store from './store'
import App from './containers/App'
import './global-styles'
import { translationMessages } from './i18n'

const history = createHistory()
const root = document.getElementById('root')

const render = (messages) => {
	ReactDOM.render(
		<Provider store={store}>
			<LanguageProvider locale='en' messages={messages}>
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
		ReactDOM.unmountComponentAtNode(root)
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

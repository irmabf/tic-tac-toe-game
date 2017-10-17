import { actions as appActions } from './app'

const initialState = {
	locale: appActions.DEFAULT_LOCALE
}

export default function reducer(state = initialState, { payload, type }) {
	switch (type) {
		case actions.CHANGE_LOCALE:
			return { ...state, locale: payload.locale }
		default:
			return state
	}
}

export const actions = {
	CHANGE_LOCALE: 'tic-tac-toe/Language/CHANGE_LOCALE',

	changeLocale: (languageLocale) => ({
		type: actions.CHANGE_LOCALE,
		locale: { languageLocale }
	})

}

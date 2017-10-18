import reducer, { actions } from '../language'

describe('Language actions', () => {
	describe('Change Local Action', () => {
		it('has a type of CHANGE_LOCALE', () => {
			const expected = {
				type: actions.CHANGE_LOCALE,
				payload: { locale: 'de' }
			}
			expect(actions.changeLocale('de')).toEqual(expected)
		})
	})
})


describe('language Reducer', () => {
	it('returns the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			locale: 'en',
		})
	})

	it('changes the locale', () => {
		expect(reducer(undefined, { type: actions.CHANGE_LOCALE, payload: { locale: 'de' } })).toEqual({
			locale: 'de',
		})
	})
})

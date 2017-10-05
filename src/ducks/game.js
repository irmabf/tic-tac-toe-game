const initialState = {
	onePlayer: null,
	squares: Array(9).fill(null),
	firstPlayerSymbol: '',
	winner: false // 'X', 'O', 'draw'
}

export default function reducer(state = initialState, { payload, type }) {
	switch (type) {
		case actions.SET_ONE_PLAYER:
			return {...state, onePlayer: payload.bool}
		case actions.SET_FIRST_PLAYER_SYMBOL:
			return {...state, firstPlayerSymbol: payload.symbol}
		case actions.RESET:
			return initialState
		default:
			return state
	}
}

export const actions = {
	SET_ONE_PLAYER: 'tic-tac-toe/Game/SET_ONE_PLAYER',
	SET_FIRST_PLAYER_SYMBOL: 'tic-tac-toe/Game/SET_FIRST_PLAYER_SYMBOL',
	RESET: 'tic-tac-toe/Game/RESET',

	setOnePlayer: (bool) => ({
		type: actions.SET_ONE_PLAYER,
		payload: { bool }
	}),
	setFirstPlayerSymbol: (symbol) => ({
		type: actions.SET_FIRST_PLAYER_SYMBOL,
		payload: { symbol }
	}),
	resetGame: () => ({
		type: actions.RESET
	})
}

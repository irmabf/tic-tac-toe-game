const initialState = {
	onePlayer: true,
	squares: Array(9).fill(null),
	firstPlayerSymbol: '',
	secondPlayerSymbol: '',
	firstPlayerTurn: true,
	step: 1
}

export default function reducer(state = initialState, { payload, type }) {
	switch (type) {
		case actions.SET_ONE_PLAYER:
			return {
				...state,
				onePlayer: payload.bool,
				step: 2
			}
		case actions.SET_FIRST_PLAYER_SYMBOL:
			return {
				...state,
				firstPlayerSymbol: payload.symbol,
				secondPlayerSymbol: payload.symbol === 'X' ? 'Y' : 'X',
				step: 3
			}
		case actions.SET_SQUARE_VAL:
			return {
				...state,
				squares: payload.squares,
				firstPlayerTurn: payload.firstPlayerTurn
			}
		case actions.SET_WINNER:
			return { ...state, step: 4 }
		case actions.SET_DRAW:
			return { ...state, step: 5 }
		case actions.RESET:
			return initialState
		default:
			return state
	}
}

export const actions = {
	SET_ONE_PLAYER: 'tic-tac-toe/Game/SET_ONE_PLAYER',
	SET_FIRST_PLAYER_SYMBOL: 'tic-tac-toe/Game/SET_FIRST_PLAYER_SYMBOL',
	SET_SQUARE_VAL: 'tic-tac-toe/Game/SET_SQUARE_VAL',
	SET_WINNER: 'tic-tac-toe/Game/SET_WINNER',
	SET_DRAW: 'tic-tac-toe/Game/SET_DRAW',
	RESET: 'tic-tac-toe/Game/RESET',

	setOnePlayer: (bool) => ({
		type: actions.SET_ONE_PLAYER,
		payload: { bool }
	}),
	setFirstPlayerSymbol: (symbol) => ({
		type: actions.SET_FIRST_PLAYER_SYMBOL,
		payload: { symbol }
	}),
	setSquareVal: (squares, firstPlayerTurn) => ({
		type: actions.SET_SQUARE_VAL,
		payload: { squares, firstPlayerTurn }
	}),
	resetGame: () => ({
		type: actions.RESET
	}),
	setWinner: () => ({
		type: actions.SET_WINNER
	}),
	setDraw: () => ({
		type: actions.SET_DRAW
	}),
}

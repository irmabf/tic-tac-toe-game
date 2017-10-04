const initialState = {
	player: 'X',
	ai: 'O',
	turn: false,
	boxes: [],
	winner: false, // 'X', 'O', 'draw'
}

export default function reducer(state = initialState, { type }) {
	switch (type) {
		default:
			return state
	}
}

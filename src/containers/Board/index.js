import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import FormattedMarkdownMessage from 'components/FormattedMarkdownMessage'
import H2 from 'components/H2'
import Button from 'components/Button'
import Game from '../Game'
import { actions } from '../../ducks/game'
import BoardWrapper from './BoardWrapper'
import Status from './Status'
import messages from './messages'

class Board extends Component {

	getContent() {
		const { step } = this.props
		let content
		switch (step) {
			case 1:
				content = (
					<div>
						<H2>
							<FormattedMarkdownMessage {...messages.heading} />
						</H2>
						<Button onClick={() => this.props.handleSetOnePlayer(true)} bottom={10}>
							<FormattedMarkdownMessage {...messages.onePlayer} />
						</Button>
						<Button onClick={() => this.props.handleSetOnePlayer(false)} bottom={10}>
							<FormattedMarkdownMessage {...messages.twoPlayers} />
						</Button>
					</div>
				)
				break
			case 2:
				content = (
					<div>
						<H2>
							<FormattedMarkdownMessage
								{...messages.doYouWantPlay}
								values={{ X: messages.x.defaultMessage, Y: messages.y.defaultMessage }}
							/>
						</H2>
						<Button onClick={() => this.props.handleSetFirstPlayerSymbol(messages.x.defaultMessage)} xo bottom={10}>
							<FormattedMarkdownMessage {...messages.x} />
						</Button>
						<Button onClick={() => this.props.handleSetFirstPlayerSymbol(messages.y.defaultMessage)} xo bottom={10}>
							<FormattedMarkdownMessage {...messages.y} />
						</Button>
					</div>
				)
				break
			default:
				content = (
					<div>
						<Status {...this.props} />
						<Game computerTurn={() => this.computerTurn()} handleClick={() => this.handleClick()} />
						<Button top={20} onClick={() => this.props.handleResetGame()}>
							<FormattedMarkdownMessage {...messages.reset} />
						</Button>
					</div>
				)
		}
		return content
	}

	render() {
		return (
			<BoardWrapper>
				{this.getContent()}
			</BoardWrapper>
		)
	}
}

Board.propTypes = {
	handleSetFirstPlayerSymbol: PropTypes.func.isRequired,
	handleSetOnePlayer: PropTypes.func.isRequired,
	handleResetGame: PropTypes.func.isRequired,
	step: PropTypes.number.isRequired
}

const mapStateToProps = (state) => ({
	...state.game
})

const mapDispatchToProps = {
	handleSetOnePlayer: actions.setOnePlayer,
	handleSetFirstPlayerSymbol: actions.setFirstPlayerSymbol,
	handleResetGame: actions.resetGame
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)

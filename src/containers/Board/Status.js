import React, { Component } from 'preact-compat'
import PropTypes from 'prop-types'

import H2 from 'components/H2'
import FormattedMarkdownMessage from 'components/FormattedMarkdownMessage'
import messages from './messages'

class Status extends Component {

	getInfoMessage() {
		const { step, onePlayer, currentPlayer, firstPlayerSymbol, secondPlayerSymbol } = this.props
		let message
		switch (step) {
			case 4: {
				const onePlayerWinner =
					currentPlayer === firstPlayerSymbol ? messages.you.defaultMessage : messages.computer.defaultMessage
				const playerWinner =
					currentPlayer === firstPlayerSymbol ? firstPlayerSymbol : secondPlayerSymbol
				const winner = onePlayer ? onePlayerWinner : playerWinner
				message = (
					<FormattedMarkdownMessage
						{...messages.theWinneIs}
						values={{ winner: `<strong>${winner}</strong>` }}
					/>
				)
			}
				break
			case 5:
				message = (
					<FormattedMarkdownMessage {...messages.draw} />
				)
				break
			default:
				message = this.getTurn()
		}
		return message
	}

	getTurn() {
		const { onePlayer, currentPlayer, firstPlayerSymbol } = this.props
		return (
			onePlayer ? (
				<FormattedMarkdownMessage
					{...messages.turn}
					values={{ who:
						currentPlayer === firstPlayerSymbol ? messages.your.defaultMessage : messages.computer.defaultMessage
					}}
				/>
			) : (
				<FormattedMarkdownMessage
					{...messages.turn}
					values={{ who: currentPlayer }}
				/>
			)
		)
	}

	render() {
		return (
			<H2>{this.getInfoMessage()}</H2>
		)
	}
}

Status.propTypes = {
	step: PropTypes.number.isRequired,
	currentPlayer: PropTypes.string.isRequired,
	onePlayer: PropTypes.bool.isRequired,
	firstPlayerSymbol: PropTypes.string.isRequired,
	secondPlayerSymbol: PropTypes.string.isRequired
}

export default Status

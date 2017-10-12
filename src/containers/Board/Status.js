import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl'
import PropTypes from 'prop-types'

import H2 from 'components/H2'
import messages from './messages'

class Status extends Component {

	getInfoMessage() {
		const { step, currentPlayer } = this.props
		let message
		switch (step) {
			case 4:
				message = (
					<FormattedMessage
						{...messages.theWinneIs}
						values={{ winner: currentPlayer }}
					/>
				)
				break
			case 5:
				message = (
					<FormattedMessage {...messages.draw} />
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
				<FormattedMessage
					{...messages.turn}
					values={{ who: <b>
						{currentPlayer === firstPlayerSymbol ? messages.your.defaultMessage : messages.computer.defaultMessage}
					</b> }}
				/>
			) : (
				<FormattedMessage
					{...messages.turn}
					values={{ who: <b>{currentPlayer}</b> }}
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
	firstPlayerSymbol: PropTypes.string.isRequired
}

export default Status

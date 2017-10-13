import React from 'react'
import { injectIntl, intlShape } from 'react-intl'
import PropTypes from 'prop-types'
import Remarkable from 'remarkable'

const md = new Remarkable({
	html: true,
	xhtmlOut: true,
})

const FormattedMarkdownMessage = ({
	intl: { formatMessage },
	id,
	defaultMessage,
	values,
	...props,
}) => (
	<span
		dangerouslySetInnerHTML={{
			__html: md.renderInline(
				formatMessage({ id, defaultMessage }, values) || defaultMessage || id
			),
		}}
		{...props}
	/>
)

FormattedMarkdownMessage.propTypes = {
	id: PropTypes.string.isRequired,
	defaultMessage: PropTypes.string,
	values: PropTypes.object,
	intl: intlShape
}

export default injectIntl(FormattedMarkdownMessage)

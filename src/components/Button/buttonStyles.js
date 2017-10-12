import { css } from 'styled-components'
import { margin } from '../../style-utils'

const buttonStyles = css`
	position: relative;
	cursor: pointer;
	display: inline-block;
	transition: all 150ms;
	border: 2px solid transparent;
	border-radius: 3px;
	min-height: 33px;
	padding: 2px 18px;
	line-height: 30px;
	font-size: 30px;
	font-weight: 600;
	text-decoration: none;
	text-align: center;
	align-items: flex-start;
	user-select: none;
	white-space: nowrap;
	color: #444444;
	
	&:focus {
		outline: none;
	}
	
	&:hover {
		border: 2px solid palevioletred;
	}
	
	&:after {
		content: '';
		display: block;
		background: transparent;
		transition: all 150ms;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
	}
	${(props) => props.xo && `
		&:hover {
			border-color: transparent;
			border-bottom: 2px solid palevioletred;
		}
	`}
	
	${(props) => props.square && `
		border: 2px solid #999;
		border-radius: 0;
		height: 50px;
		line-height: 50px;
		display: flex;
		justify-content: center;
		flex: 1;
		padding: 0;
		
		&:hover {
			z-index: 999
		}
	`}
	
	${(props) => margin(props.top, props.right, props.bottom, props.left)}

`

export default buttonStyles

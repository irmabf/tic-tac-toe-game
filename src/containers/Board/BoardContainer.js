import styled from 'styled-components'

const BoardContainer = styled.div`
	padding: 15px;
	background-color: #FFFFFF;
	max-width: 100%;
	min-height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	
	@media (min-width: 480px) {
		width: 450px;
		border-radius: 4px;
	}
`

export default BoardContainer

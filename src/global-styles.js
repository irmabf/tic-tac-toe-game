import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
	html, body {
		box-sizing: border-box;
		height: 100%;
		min-height: 100%;
		padding: 0;
		margin: 0;
		overflow:hidden;
}
	html {
    cursor: default;
    font-family: sans-serif;
    line-height: 1.5;
	}
  body {
    font-family: 'Amatic SC', cursive;
  }
  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  #root {
   	background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
    color: white;
		background: linear-gradient(20deg,rgb(219,112,147),#daa357);
		box-shadow: 0 2px 20px rgba(0,0,0,0.17);
  }
`

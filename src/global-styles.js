import { injectGlobal } from 'styled-components'

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }
  body {
    font-family: 'Amatic SC', cursive;
  }
  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  #root {
    min-height: 100%;
    min-width: 100%;
    color: white;
		background: linear-gradient(20deg,rgb(219,112,147),#daa357);
		box-shadow: 0 2px 20px rgba(0,0,0,0.17);
  }
  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`

const express = require('express')
const open = require('open')
const path = require('path')

/* eslint-disable no-console */

const port = (process.env.PORT || 3000)
const indexPath = path.join(process.cwd(), 'dist/index.html')
const publicPath = express.static('dist')
const app = express()

app.get('*.js', (req, res, next) => {
	req.url += '.gz'
	res.set('Content-Encoding', 'gzip')
	next()
})

app.use(publicPath)
app.get('/', (req, res) => {
	res.sendFile(indexPath)
})


app.listen(port, (err) => {
	if (err) {
		console.log(err)
	} else {
		open(`http://localhost:${port}`)
	}
})

const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.sass/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	devServer: {
		contentBase: './dist'
	},
	performance: {
		hints: false
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.NamedModulesPlugin(),
		new CircularDependencyPlugin({
			exclude: /a\.js|node_modules/,
			failOnError: false
		}),
		new HtmlWebpackPlugin({
			title: 'Tic Tac Toe Game',
			template: 'public/index.html',
			favicon: 'public/favicon.ico',
			inject: true
		})
	]
})


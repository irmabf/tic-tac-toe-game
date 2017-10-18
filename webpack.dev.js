const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	devtool: 'inline-source-map',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[hash].js',
		publicPath: '/'
	},
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
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.NamedModulesPlugin(),
		new CircularDependencyPlugin({
			exclude: /a\.js|node_modules/,
			failOnError: false
		})
	]
})

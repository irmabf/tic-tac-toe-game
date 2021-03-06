const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	devtool: 'source-map',
	// Don't use hashes in dev mode for better performance
	output: {
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		compress: true,
		port: 8080
	},
	module: {
		rules: [
			{
				test: /\.sass/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			children: true,
			minChunks: 2,
			async: true,
		}),
		new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
			template: './public/index.html'
		}),
		new CircularDependencyPlugin({
			exclude: /a\.js|node_modules/,
			failOnError: false
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			children: true,
			minChunks: 2,
			async: true,
		})
	]
})

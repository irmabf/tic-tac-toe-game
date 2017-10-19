const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: ['babel-polyfill', path.resolve(__dirname, './src/index.js')],
	resolve: {
		modules: ['src', 'node_modules'],
		extensions: ['.js', '.jsx'],
		alias: {
			components: path.resolve(__dirname, 'src/components/'),
			containers: path.resolve(__dirname, 'src/containers/')
		}
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}, {
			// Preprocess 3rd party .css files located in node_modules
			test: /\.css$/,
			include: /node_modules/,
			loaders: ['style-loader', 'css-loader']
		}, {
			test: /\.(eot|ttf|woff|woff2)$/,
			loader: 'file-loader'
		}, {
			test: /\.(gif|png|jpe?g|svg)$/i,
			use: [
				{
					loader: 'file-loader',
					options: {
						name: '[sha512:hash:base64:7].[ext]'
					}
				},
				{
					loader: 'image-webpack-loader',
					options: {
						svgo: {
							plugins: [
								{ removeTitle: true },
								{ removeMetadata: true },
								{ removeUselessStrokeAndFill: true },
								{ cleanupIDs: true },
								{ removeUnknownsAndDefaults: true },
								{ removeEmptyText: true },
								{ removeHiddenElems: true },
								{ removeEmptyAttrs: true },
								{ removeComments: true }
							]
						}
					}
				}
			]
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Tic Tac Toe Game',
			template: path.resolve(__dirname, './public/index.html'),
			favicon: path.resolve(__dirname, './public/favicon.ico'),
			path: path.join(__dirname, 'dist'),
			filename: 'index.html',
			minify: {
				collapseWhitespace: true,
				collapseInlineTagWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true
			}
		})
	],
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	}
}

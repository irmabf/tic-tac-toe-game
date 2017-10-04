const path = require('path')

module.exports = {
	entry: ['babel-polyfill', './src/index.js'],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: /node_modules/
		}, {
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
	resolve: {
		modules: ['src', 'node_modules'],
		alias: {
			components: path.resolve(__dirname, 'src/components/'),
			containers: path.resolve(__dirname, 'src/containers/')
		},
		extensions: [
			'.js',
			'.jsx',
			'.react.js'
		]
	},
	node: {
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	}
}

var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
	output: {
    path: path.join(__dirname, 'dist'),
		publicPath: '/',
    filename: 'bundle.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: [
					'react-hot',
					'babel?cacheDirectory,presets[]=react,presets[]=es2015'
				],
				include: path.join(__dirname, 'src')
			}
		]
	}






}

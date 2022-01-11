const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ( env, arg ) => {
	return {
		mode: 'development',
		entry: {
			'project-nameproject-name': './src/index.tsx'
		},
		output: {
			filename: '[name].main.js',
			clean: true
		},
		devtool: 'source-map',
		devServer: {
			static: {
				directory: 'mocks'
			}
		},
		resolve: {
			extensions: [ '.ts', '.tsx', '.js', '.jsx' ]
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: "ts-loader",
				},
				{
					test: /\.(png|jpe?g|gif)$/i,
					type: 'asset/resource'
				},
				{
					test: /(?<!\.css).svg$/,  // prefix with .css.svg for files in url() css statements
					use: [
						'desvg-loader/react', // Add loader (use 'desvg-loader/react' for React)
						'svg-loader', // svg-loader must precede desvg-loader
					],
				},
				{
					test: /\.css$/,
					use: [
						arg.mode==='production'? MiniCssExtractPlugin.loader : 'style-loader',
						'css-loader'
					]
				},
				{
			    test: /\.scss$/,
			    use: [
						arg.mode==='production'? MiniCssExtractPlugin.loader : 'style-loader',
						{ loader: "css-loader", options: { sourceMap: true } },
						{ loader: 'sass-loader', options: {	sourceMap: true	} }
			    ],
			  },
			],
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].css'
			}),
			new HtmlWebpackPlugin({
				template: 'src/index.html',
				templateParameters: {
					title: 'Project Name'
				},
				hash: true,
			}),
		]
	}
}
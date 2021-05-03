const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ( env, arg ) => {
	return {
		mode: 'development',
		entry: {
			'project-nameproject-name': './src/index.tsx'
		},
		output: {
			filename: '[name].main.js'
		},
		devtool: 'source-map',
		resolve: {
			extensions: [ '.ts', '.tsx', '.js', '.jsx' ]
		},
		module: {
			rules: [
				{
					test: /\.(png|jpe?g|gif)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								outputPath: 'images',
								esModule: false,
							},
						},
					],
				},
				{
					test: /\.tsx?$/,
					loader: "ts-loader",
				},
				{
					test: /\.svg$/,
					use: [
						'desvg-loader/react', // Add loader (use 'desvg-loader/react' for React)
						'svg-loader', // svg-loader must precede desvg-loader
					],
				},
				{
					test: /\.css$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: "css-loader",
							options: {
								url: false
							}
						}
					]
				},
				{
			    test: /\.scss$/,
			    use: [
			      MiniCssExtractPlugin.loader,
						{
							loader: "css-loader",
							options: {
								url: false
							}
						},
			      "sass-loader"
			    ],
			  },
			],
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: 'project-name.css'
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
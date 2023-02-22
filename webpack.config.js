const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: `${__dirname}/docs`,
        filename: 'main.js',
    },
	module: {
		rules: [
			// { 
			// 	test: /\.tsx?$/, loader: "ts-loader" 
			// },
			{
				test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'fonts/'
						}
					}
				]
			},
			{
				test: /\.(svg|avif|png|jpg)$/,
				use: [
					{
						loader: 'file-loader',
						// options: {
						// 	name: '[name].[ext]',
						// 	outputPath: 'images/'
						// }
					}
				]
			}
		]
	},
    resolve: {
        extensions: [".js"],
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Josh Sideris Resume",
        favicon: "./src/assets/favicon.png"
    })],
};
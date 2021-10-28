const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        path: `${__dirname}/dist`,
        filename: 'main.js',
    },
    // module: {
    //     rules: [
    //         { test: /\.tsx?$/, loader: "ts-loader" }
    //     ],
    // },
    resolve: {
        extensions: [".js"],
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Josh Sideris Resume",
        favicon: "./src/assets/favicon.png"
    })],
};
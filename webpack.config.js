const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractTextPlugin = new ExtractTextPlugin({
    filename: 'style.css'
})

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: extractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins : [
        extractTextPlugin
    ]
}
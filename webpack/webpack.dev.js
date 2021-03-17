const common = require('./webpack.common.js');
const merge = require('webpack-merge');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    module:{
        rules: [        
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
});

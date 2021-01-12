const currentTask = process.env.npm_lifecycle_event
const path = require('path');
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


process.env.NODE_ENV = process.env.NODE_ENV || 'development'

if(process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: '.env.test'})
} else if(process.env.NODE_ENV === 'development'){
    require('dotenv').config({ path: '.env.development'})
}

const config = {
    entry:['babel-polyfill','./src/app.js'],
    output: {
        path:path.join(__dirname,'public', 'dist'),
        filename: 'bundle.[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({template: './index.html'}),
        new webpack.DefinePlugin({
            'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
            'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
            'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
            'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
            'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
            'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
            'process.env.FIREBASE_APP_ID': JSON.stringify(process.env.FIREBASE_APP_ID),
            'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(process.env.FIREBASE_MEASUREMENT_ID)
        })
],
    mode:'development',
    module: {
        rules:[{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test:/\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },  {
            test: /\.(png|svg|jpg|gif|pdf)$/,
            use: [
                    {
                        loader: "file-loader", 
                        options: {
                        name: '[name].[ext]',
                        outputPath: "/public/images",
                        }
                    },
                    {
                        loader: 'url-loader?limit=8192'
                    }
            ]
        }
        ]
    },
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public','dist'),
        historyApiFallback: true,
        compress: true,
        port: 9000
      } 
};

if(currentTask == "build"){
    config.mode = "production"
    config.devtool = "source-map"
    config.module.rules[1].use[0] = MiniCssExtractPlugin.loader
    config.plugins.push(new MiniCssExtractPlugin({filename: 'main.[hash].css'}), new CleanWebpackPlugin())
}
 
module.exports = config



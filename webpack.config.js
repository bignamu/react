const path = require('path');
const webpack = require('webpack');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name : 'wordrelay-setting',
    mode : 'development', // 실서비스 : production
    devtool : 'eval', // hidden-source-map
    resolve : {
        extensions:['.js','.jsx']
    }, // 확장자

    entry :{
        app : './client'
    }, // 입력

    module : {
        rules : [{
            test: /\.jsx?$/,
            loader : 'babel-loader',
            options : {
                presets:[['@babel/preset-env',{
                    targets : {
                        browsers:['> 5% in KR'],
                    },
                    debug: true,
                }],
                '@babel/preset-react'
                ],
                plugins:[
                    //'@babel/plugin-proposal-class-properties',
                    'react-refresh/babel'
                    
                ], // 최소한으로 하자 빌드할때 오래걸림
            }
        }]
    },
    plugins:[
        new RefreshWebpackPlugin()
    ],
    output:{
        path: path.join(__dirname,'dist'), //  실제주소 . C:\..
        filename: 'app.js',
        publicPath:'/dist/',
    }, // 출력

    devServer:{
        publicPath:'/dist/',
        hot:true
    }
};
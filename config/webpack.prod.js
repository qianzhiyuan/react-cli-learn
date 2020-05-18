process.env.NODE_ENV = 'production';

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: 'index.html',
			hash: true, // 添加hash值解决缓存问题
			minify: { // 对打包的html模板进行压缩
				removeAttributeQuotes: true, // 删除属性双引号
				collapseWhitespace: true // 折叠空行变成一行
			}
		})
	],
})

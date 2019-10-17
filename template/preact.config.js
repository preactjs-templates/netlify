const netlifyPlugin = require('preact-cli-plugin-netlify');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const imageminMozjpeg = require('imagemin-mozjpeg');

module.exports = (config) => {
	netlifyPlugin(config);
	config.plugins.push(new ImageminPlugin({
		from: './build/assets/**',
		pngquant: {
			quality: '60'
		},
		plugins: [
			imageminMozjpeg({
				quality: 50,
				progressive: true
			})
		]
	}));
	return config;
};

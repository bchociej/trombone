var fs = require('fs');
var lame = require('lame');
var path = require('path');
var Speaker = require('speaker');

module.exports = {
	play: function() {
		fs.createReadStream(path.resolve(__dirname, './trombone.mp3'))
			.pipe(new lame.Decoder())
			.on('format', function(format) {
				this.pipe(new Speaker(format));
			});
	}
};

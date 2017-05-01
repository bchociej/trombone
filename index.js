var fs = require('fs');
var path = require('path');
var Speaker = require('speaker');

module.exports = {
	play: function() {
		var format = {
			raw_encoding: 208,
			sampleRate: 44100,
			channels: 2,
			signed: true,
			float: false,
			ulaw: false,
			alaw: false,
			bitDepth: 16
		};
		var spk = new Speaker(format);
		fs.createReadStream(path.resolve(__dirname, './trombone.pcm')).pipe(spk);
	}
};

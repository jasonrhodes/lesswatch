var watch = require('node-watch'),
	exec = require('child_process').exec;

module.exports = function () {
	
	this.watch = function (options) {
		console.log("");
		console.log("Now watching .less files in " + options.watch);

		watch([options.watch, options.manifest], function (file) {
			exec("lessc " + options.manifest + " > style.css", function (err, stdout, stderr) {
				if (!err) {
					console.log(options.manifest + " recompiled due to a change in " + file);
				} else {
					console.log(arguments);
				}
			});
		});
	};
	
};
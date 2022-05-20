// Go to settings.js and levels.js for setting up the game
// This is the internal code that does some random stuff
let CHAPTERS = {
	0: '0',
}

function addChapter(options) {
	if (typeof options != 'object') return;

	if (options.id == undefined) options.id = Object.keys(CHAPTERS).length;
	if (options.name == undefined) options.name = `Chapter ${options.id}`;
	
	CHAPTERS[options.id] = options;
}
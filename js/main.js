// Go to settings.js and levels.js for setting up the game
// This is the internal code that does some random stuff
CHAPTERS = {
	0: '0',
}

function addChapter(options) {
	if (typeof options != 'object') return;

	if (options.id == undefined) options.id = Object.keys(CHAPTERS).length;
	
	CHAPTERS[options.id] = options;
}
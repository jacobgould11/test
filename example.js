const Bot = require('./bot.js');

// Chainable functions, send in one swipe
// send() returns a promise with the response
new Bot()
	.setId('your_bots_id_here')
	.setText('I love NY!')
	.setImage('https://i.groupme.com/2560x1920.jpeg.62682df5264d4a9fbb83eb5bd861b944')
	.setLocation('-74.0059', '40.7128', 'NYC')
	.send()
	.then(res => {
		console.log(res);
	});
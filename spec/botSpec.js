const Bot = require('../bot.js');

describe('Bot', function() {

	it('should set a structure in constructor', function() {

		let b = new Bot();
		let response = b.getMessage();
		let attachments = b.getMessage().attachments;
		expect(response).toEqual( { attachments: [] } );
		expect(attachments).toEqual( [] );
	});

	it('should set an id', function() {

		let b = new Bot().setId('fakeid');
		expect(b.getMessage().bot_id).toEqual('fakeid');
	});

	it('should set some text', function() {

		let b = new Bot().setText('Hello');
		expect(b.getMessage().text).toEqual('Hello');
	});

	it('should add an image', function() {

		let b = new Bot().setImage('https://i.groupme.com/somethingsomething.large');
		let type = b.getMessage().attachments[0].type;
		let url = b.getMessage().attachments[0].url;
		expect(type).toEqual('image');
		expect(url).toEqual('https://i.groupme.com/somethingsomething.large');
	});

	it('should add a location', function() {

		let b = new Bot().setLocation('-42', '40', 'Test Location');
		let type = b.getMessage().attachments[0].type;
		let lng = b.getMessage().attachments[0].lng;
		let lat = b.getMessage().attachments[0].lat;
		let name = b.getMessage().attachments[0].name;
		expect(type).toEqual('location');
		expect(lng).toEqual('-42');
		expect(lat).toEqual('40');
		expect(name).toEqual('Test Location');
	});
});
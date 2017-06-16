const requestify = require('requestify');

function Bot() {

	this.response = {};
	this.response.attachments = [];
	return this;
}

Bot.prototype.setId = function(id) {

	this.response.bot_id = id;
	return this;
}

Bot.prototype.setText = function(text) {

	this.response.text = text;
	return this;
}

Bot.prototype.setImage = function(url) {

	let a = { type: "image", url: url };
	this.response.attachments.push(a);
	return this;
}

Bot.prototype.setLocation = function(lng, lat, name) {

	let a = { type: "location", lng: lng, lat: lat, name: name };
	this.response.attachments.push(a);
	return this;
}

Bot.prototype.getMessage = function() {

	return this.response;
}

Bot.prototype.send = function() {

	const promise =
		requestify
			.post('https://api.groupme.com/v3/bots/post', this.response)
			.then(function(response) {

				return response;
			})
			.catch(function(reason) {

				return reason;
			});
	return promise;
}

module.exports = Bot;

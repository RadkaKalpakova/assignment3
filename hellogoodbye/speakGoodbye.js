(function(window){
var goodbyeSpeaker = {};
var speakWord = "Goodbye ";
//function speak(name) {
	goodbyeSpeaker.speak = function(name) {
	console.log(speakWord + " " + name);
	}

	window.goodbyeSpeaker = goodbyeSpeaker;
})(window);


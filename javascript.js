
function speak(){
	var voice = new SpeechSynthesisUtterance();
	voice.text = "This is awesome"
	speechSynthesis.speak(voice);
}

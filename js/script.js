// 1. Display at least one song on the page when the page loads.
// 2. Give the user the ability to play that song, without using the "built-in" play button. 
// This could be through a different button, through clicking or mousing over an image on the page, or any other device of your choosing.
// 3. Give the user the ability to stop that song without using the "built-in" stop button. 
// Once again, this could be through a different button, through clicking or mousing over an image on the page, or any other device of your choosing.
// 4. Give the user the ability to load at least one different song into the Jukebox besides the one that is loaded when the page initially renders
// The whole Jukebox should be backed by an object called Jukebox with methods to play, stop, and load songs.


var Song = function(location, artist, title) {
	this.location = location;
	this.artist = artist;
	this.title = title;
};

var Player = function() {
	var songs = [];
	var audioPlayer = new Audio();
	var currentSong = null;

	this.addSong = function(song) {
		if (!currentSong) {
			currentSong = 0;
		}
		songs.push(song);
	};

	this.play = function() {
		audioPlayer.src = songs[currentSong].location;
		audioPlayer.play();
		document.getElementById("song").innerText = songs[currentSong].title + " by " + songs[currentSong].artist;
	};

	this.stop = function() {
		audioPlayer.src = "";
	};

	this.nextSong = function() {
		currentSong++;
		if (currentSong == songs.length) {
			currentSong = 0;
		};
		audioPlayer.src = songs[currentSong].location;
		audioPlayer.play();
		document.getElementById("song").innerText = songs[currentSong].title + " by " + songs[currentSong].artist;
	};
	

	document.getElementById("play").addEventListener("click", this.play);
	document.getElementById("stop").addEventListener("click", this.stop);
	document.getElementById("next").addEventListener("click", this.nextSong);
	
};

var jukebox = new Player();

var song1 = new Song("songs/Brubecktakefive.m4a", "Dave Brubeck", "Take Five");
var song2 = new Song("songs/BSmywanderingdays.m4a", "Belle and Sebastian", "My Wandering Days Are Over");
var song3 = new Song("songs/Foxygensanfrancisco.m4a", "Foxygen", "San Francisco");
var song4 = new Song("songs/Guarldiginza.m4a", "Vince Guaraldi", "Ginza");
var song5 = new Song("songs/VUsundaymorning.m4a", "The Velvet Underground", "Sunday Morning");

jukebox.addSong(song1);
jukebox.addSong(song2);
jukebox.addSong(song3);
jukebox.addSong(song4);
jukebox.addSong(song5);


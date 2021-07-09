/*
Jinho Lee (jl5027)
Prof. Brian Smith
User Interface Design
HW2(main.js)
*/
//const holes = document.querySelectorAll('.hole');
const mole = document.getElementById("m1");
const score = document.querySelector('.score h1');
const reset = document.querySelector('.reset');
const timer = document.querySelector('.timer');
const start = document.querySelector('.start');
const first = document.querySelector('.firstResult');
const second = document.querySelector('.secondResult');
const third = document.querySelector('.thirdResult');
const fourth = document.querySelector('.fourthResult');
const fifth = document.querySelector('.fifthResult');
const sixth = document.querySelector('.sixthResult');
const seventh = document.querySelector('.seventhResult');
const eighth = document.querySelector('.eighthResult');
const nineth = document.querySelector('.ninethResult');
const tenth = document.querySelector('.tenthResult');
mole.style.visibility = "hidden";

var watch = new stopWatch(timer);
var disabled = false;
var counter = 0;
var bonked = false;
var prevx, prevy, x, y, wid, firstDistance, distance; 
// firstDistance is the distance between the first image and the start button!
var startx = 500 + 200 / 2;
var starty = 230 + 100 / 2;

function stopWatch(Timer){
	var time = 0;
	var interval;
	var offset;

	function update() {
		time += delta();
		var formattedTime = timeFormatter(time);
		time.textContent = formattedTime;
		Timer.textContent = formattedTime;
	}
	function delta() {
		var now = Date.now();
		var timePassed = now - offset;
		offset = now;
		return timePassed;
	}
	function timeFormatter(Millisec) {
		var time = new Date(Millisec);
		var minutes = time.getMinutes().toString();
		var seconds = time.getSeconds().toString();
		var milliseconds = time.getMilliseconds().toString();

		if(minutes.length < 2){
			minutes = '0' + minutes;
		}

		if(seconds.length < 2){
			seconds = '0' + seconds;
		}

		while(milliseconds.length < 3){
			milliseconds = '0' + milliseconds
		}

		return minutes + ':' + seconds + '.' + milliseconds;
	}

	running = false;

	this.start = function() {
		if(!this.running){
			interval = setInterval(update.bind(this), 10);
			offset = Date.now();
			this.running = true;
		}
	};
	this.stop = function() {
		if(this.running){
			clearInterval(interval);
			interval = null;
			this.running = false;
		}
	};
	this.reset = function(){
		time = 0;
		bonked = false;
	};
}
/*
function randomMole(moles){
	const idx = Math.floor(Math.random() * moles.length);
	const mole = moles[idx];
	return mole;
} // Random Mole Generator
*/
function peep(){
	mole.style.visibility = "visible";
	bonked = false;
	//const mole = randomMole(moles);
	mole.style.top = Math.round(Math.random() * (screen.height-mole.height)) + "px";
	mole.style.left = Math.round(Math.random() * (screen.width-mole.width)) + "px"; 
	mole.style.width = Math.floor((Math.random() * 400) + 30) + "px";
	wid = mole.style.width;
	getPositionAtCenter(mole);
	mole.classList.add('up');
	mole.addEventListener('click', bonk);
	firstDistance = Math.hypot(x-startx, y-starty); // From the start button
} // Peep

function startTest(){
	if(!watch.running && !disabled){
		start.textContent = "Test in progress";
		first.textContent = null;
		second.textContent = null;
		third.textContent = null;
		fourth.textContent = null;
		fifth.textContent = null;
		sixth.textContent = null;
		seventh.textContent = null;
		eighth.textContent = null;
		nineth.textContent = null;
		tenth.textContent = null;
		watch.reset();
		disabled = true;
		watch.start();
		counter = 0;
		peep();
	}
}

function bonk(e){
	if(!bonked){
		counter++;
		prevx = x;
		prevy = y;
		watch.reset();
		bonked = true;
		this.classList.remove('up');
		this.removeEventListener('click', bonk);
		switch(counter){
		case 1:
			first.textContent = "1. " + wid + ", " + firstDistance + ", "
			+ timer.textContent;
			break;
		case 2:
			second.textContent = "2. " + wid + ", " + distance + ", "
			+ timer.textContent;
			break;
		case 3:
			third.textContent = "3. " + wid + ", " + distance + ", "
			+ timer.textContent;
			break;
		case 4:
			fourth.textContent = "4. " + wid + ", " + distance + ", "
			+ timer.textContent;
			break;
		case 5:
			fifth.textContent = "5. " + wid + ", " + distance + ", "
			+ timer.textContent;
			break;
		case 6:
			sixth.textContent = "6. " + wid + ", " + distance + ", "
			+ timer.textContent;
			break;
		case 7:
			seventh.textContent = "7. " + wid + ", " + distance + ", "
			+ timer.textContent;
			break;
		case 8:
			eighth.textContent = "8. " + wid + ", " + distance + ", "
			+ timer.textContent;
			break;
		case 9:
			nineth.textContent = "9. " + wid + ", " + distance + ", "
			+ timer.textContent;
			break;
		case 10:
			tenth.textContent = "10. " + wid + ", " + distance + ", "
			+ timer.textContent;
			break;
		}
		if(counter < 10){
			peep();
			getDistanceBetweenElements(x, prevx, y, prevy);
		}
		else{
			watch.stop();
			mole.style.visibility = "hidden";
			start.textContent = "Start Test";
			disabled = false;
		}
	}
} // Bonk

function getPositionAtCenter(moles) {
	const {top, left, width, height} = moles.getBoundingClientRect();
	x = left + width / 2;
	y = top + height / 2;
 }

function getDistanceBetweenElements(x, prevx, y, prevy) {
	distance = Math.hypot(x - prevx, y - prevy); 
}

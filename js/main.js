// fire once in 3 seconds
// setTimeout(function(){
// 	console.log('set time out fired')
// },3000)

// fire every aecond
// setInterval(function(){
// 	console.log('set internal fired')
// },1000)


// give me the date --> 
// creates a new date object and stroe it in the variable date
// var date = new Date();
// console.log(date);

// // log date, year, time and month
// console.log(date.getDay()); // 0 = sunday
// console.log(date.getFullYear());
// console.log(date.getTime()); // # of miliseconds that passed since Jan 1 1970
// console.log(date.getMonth());

// // log hours, minutes, seconds
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// // rudimentary clock through setInterval function
// setInterval(function(){
// 	var date = new Date();

// terinary operator 
	// more straightforward logical approach
	// var hours = date.getHours();
	// var mins = date.getMinutes();
	// var sec = date.getSeconds();

	// if hours is more than12, then we subtract 12
	// if (hours > 12) {
	// 	hours = hours - 12;
	// }
	// if (sec < 10) {
	// 	sec = "0" + sec;
	// }
	// if (mins < 10) {
	// 	mins = "0" + mins;
	// }

	// terinary operator approach
	// var hours = date.getHours() > 12 ? (date.getHours() - 12) : date.getHours();
	// var mins = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	// var sec = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	// var time = hours + " : " + mins + " : " + sec
	// console.log(time);
	// },1000)

// Quiz Exercise

var array = [ 
{
	q: "What year was the first Harry Potter book published?",
	a: "1997"
} ,
{
	q: "What's the name of the actress who plays Herminoe Granger in the Harry Potter movies?",
	a: "Emma Watson"
} ,
{
	q: "What house is Ronald Weasley in?",
	a: "Gryffindor"
} ,
{
	q: "The four main houses are Ravenclaw, Slytherin, Gryffindor, and ____",
	a: "Hufflepuff"
} ,
{
	q: "Who was the Headmaster of Hogwarts when Harry Potter first started at Hogwarts?",
	a: "Albus Dumledore"
} ,
{
	q: "What is the shape of Harry Potter's patronus?",
	a: "Stag"
} ,
{
	q: "Harry Potter's wand is made of holly with a ___ as its core.",
	a: "phoenix feather"
} ]


    for (var i = 0; i<array.length; i++) {
    	let id = "ques" + i;
    	let elem = document.getElementById(id).innerHTML = array[i].q;
    	console.log(elem); 

    }





let ind4 = document.querySelector("#ind4");
let counter= document.querySelector("#counter");
let photo = document.querySelector("#photo");
let pl1 = document.querySelector("#pl1");
let pl2 = document.querySelector("#pl2");
let timer = document.querySelector("#timer");
let budget = document.querySelector("#budget")
let winner = document.querySelector("#winner");
let one_score=0;
let two_score=0;
let p1_score=100;
let p2_score=100;
let no = 5;
let timers = 20;
counter.innerText = no;
let connect;
function numb(){
	no--;
	counter.innerText = no;
	if(no<=0){
		counter.innerText = "BID!!!";
		clearInterval(connect);
	}
}

connect = setInterval(numb, 1000)
setTimeout(function(dets){
	ind4.innerText = "Bed"
	photo.style.visibility = "visible";
},5000)
setTimeout(function(){
	counter.innerText="";
},6000)
function let_one_score(e){
	if(e.key === "a" || e.key === "A"){
		one_score++;
		p1_score--;
		budget.innerText = `$${p1_score}`;
		pl1.innerText = `Player 1's bid:${one_score} $`;
	}
}
function let_two_score(e){
	if(e.key === "l" || e.key === "L"){
		two_score++;
	p2_score--;
	pl2.innerText = `Player 2's bid:${two_score}$`;
	budget2.innerText = `$${p2_score}`;
	}
}
function timing() {
	let countdown = setInterval(function ab(){
	timers--;
	timer.innerText = `${timers}s`
	if(timers<=0){
		clearInterval(countdown);
		timer.innerText = "Time's Up!"
	}
},1000)
}
let stopage = setTimeout(function(){
	window.addEventListener("keyup", let_one_score);
	window.addEventListener("keyup", let_two_score);
	timing();
},5000);

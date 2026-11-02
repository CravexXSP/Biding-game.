let ind4 = document.querySelector("#ind4");
let counter= document.querySelector("#counter");
let photo = document.querySelector("#photo");
let pl1 = document.querySelector("#pl1");
let one_score=0;
let no = 5;
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
window.addEventListener('Keyup', function(){
	if(key.value === a){
		one_score++;
		pl1.innerText=`Player 1's bid ${one_score}`
	}
})

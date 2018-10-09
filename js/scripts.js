var hamburger = document.getElementsByClassName("title")
hamburger.addEventListener("click", deploy);

function deploy() {
	console.log(hamburger);
}

var date = new Date();
console.log(date.getUTCHours());
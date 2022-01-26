const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
let url = "https://jokeapi-v2.p.rapidapi.com/joke/Any?type=single&format=json&idRange=0-150&blacklistFlags=religious%2Cracist%2Cpolitical";
let host = "jokeapi-v2.p.rapidapi.com";
let key = "73fca24707msh00e5c54fbc7dd20p15680fjsn9e57788ef38d";
let timeleft;

let getJoke = () => {
fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": host,
		"x-rapidapi-key": key
	}
})
.then(response => response.json())
.then(response => {
	console.log(response);
   jokeContainer.textContent = `${response.joke}`;
})
.catch(err => {
	console.error(err);
});
timeleft = 30;
};
getJoke();
btn.addEventListener("click", getJoke);

// Count down timer 
var downloadTimer = setInterval(function () {
  document.getElementById("next").innerHTML = `Next joke in ${timeleft}s.`;
  timeleft -= 1;
  if (timeleft <= 0) {
    //  clearInterval(downloadTimer);
    btn.click();
    console.clear();
    timeleft = 30;
   //  $("#btn").mouseenter();
  }
}, 1000);
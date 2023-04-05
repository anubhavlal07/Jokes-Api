const jokeContainer = document.getElementById("joke");
const genere = document.getElementById("genere");
const btn = document.getElementById("btn");

// let url = "https://jokeapi-v2.p.rapidapi.com/joke/Any?type=single&format=json&idRange=0-319&blacklistFlags=religious%2Cracist%2Cpolitical"; Single Jokes
//let url = "https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&idRange=0-319&blacklistFlags=religious%2Cracist%2Cpolitical"; All type of Jokes
let url = "https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&idRange=0-319&blacklistFlags=religious%2Cracist%2Cpolitical%2cnsfw";
let host = "jokeapi-v2.p.rapidapi.com";
let key = "73fca24707msh00e5c54fbc7dd20p15680fjsn9e57788ef38d";
let timeleft;

let getJoke = () => {
  fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": host,
      "x-rapidapi-key": key,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      if (response.type == "single") {
        // If type == "single", the joke only has the "joke" property
        jokeContainer.innerHTML = `${response.joke} <br><span id="genere" class="genere">Genere : ${response.category}</span>`;
      } else {
        jokeContainer.innerHTML = `${response.setup}<br>${response.delivery} <br><span id="genere" class="genere">Genere : ${response.category}</span>`;
      }
    })
    .catch((err) => {
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
    btn.click();
    console.clear();
    timeleft = 30;
  }
}, 1000);

// Disabled Input from keyboard
(document.onkeydown = function (event) {
  if (event.keyCode == 123) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 86) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 117) {
    return false;
  } else if (event.ctrlKey && event.keyCode == 85) {
    return false;
  }
}),
  false;

if (document.addEventListener) {
  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
    },
    false
  );
} else {
  document.attachEvent("oncontextmenu", function () {
    window.event.returnValue = false;
  });
}

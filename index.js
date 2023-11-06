const jokeContainer = document.getElementById("joke");
const genere = document.getElementById("genere");
const btn = document.getElementById("btn");
let url = "https://backend-omega-seven.vercel.app/api/getjoke";
let timeleft;

let getJoke = () => {
  fetch(url, {
    method: "GET",
    redirect: "follow",
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response[0]);
      jokeContainer.innerHTML = `${response[0].question}<br>${response[0].punchline}`;
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
    getJoke();
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

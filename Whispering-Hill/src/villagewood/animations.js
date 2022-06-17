let current_cloud_left = 0;
let current_cloud1_left = 0;

let bird_flying_stage = 1;
let bird_left = 0;

let day = true;
let isDisabled = false;
let setUser = Math.floor(Math.random() * 100000);
let locationType = "suburb";

function fireFlyAnimation () {
  if (day === true) {
    // Return none
  }

  else {
    $("#fireflies").fadeOut(3000);

    setTimeout(function () {
      fireflies.style.left = Math.floor(Math.random() * 450) + "px";

      setTimeout(function () {
        $("#fireflies").fadeIn(3000);
      }, 1000);
    }, 4000);
  }
}

function dayAndNight () {
  if (day === true) {
    day = false;
    fishbowl.style.backgroundColor = "black";
  }

  else {
    day = true;

    fireflies.style.left = Math.floor(Math.random() * 450) + "px";

    fishbowl.style.backgroundColor = "#dafffd";
    $("#fireflies").fadeOut(5000);
  }
}

function weather () {
  let flashWeather = Math.floor(Math.random() * 5);

  switch (flashWeather) {
    case 0:
      $("hr").fadeIn(1200);
      fishbowl.style.backgroundColor = "darkgray";
      break;
    case 1:
    case 2:
    case 3:
    case 4:
      $("hr").fadeOut(1200);
      if (day === true) {
        fishbowl.style.backgroundColor = "dafffd";
      }

      else {
        fishbowl.style.backgroundColor = "black";
      }
      break;
  }
}

let hrElement;
let counter = 100;

for (let i = 0; i < counter; i++) {
  hrElement = document.createElement("HR");
  hrElement.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
  hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
  hrElement.style.animationDelay = Math.random() * 5 + "s";
   
  document.body.appendChild(hrElement);
}

function animateCloud () {
  current_cloud_left += 0.05;
  current_cloud1_left += 0.001;

  clouds.style.left = current_cloud_left + "px";
  clouds1.style.left = current_cloud1_left + "px";

  if (current_cloud_left > 510) {
    current_cloud_left = -500;
  }

  if (current_cloud1_left > 510) {
    current_cloud_left = -500;
  }
}

/*
function animateBird () {
  bird_left += 5;
  bird.style.left = bird_left + "px";
  
  if (bird_flying_stage === 1) {
    bird_flying_stage = 2;
    bird.src = "/src/www/image/bird/flying2.png";
  }

  else {
    bird_flying_stage = 1;
    bird.src = "/src/www/image/bird/flying1.png";
  }
}
*/

try {
  setInterval(animateCloud, 10);
  setInterval(dayAndNight, 180000);
  setInterval(weather, 80000);
}

catch (error) {
  alert(error);
}

$("#new").click(function () {
  if (isDisabled === true) {
    return false;
  }
  
  $("#title").fadeOut(1200);
  isDisabled = true;

  setTimeout(function () {
    $("#window").fadeIn(1200);
    isDisabled = false;
  }, 1200);
});

$("#farm").click(function () {
  if (isDisabled === true) {
    return false;
  }
  
  $("#ground").fadeOut(1200);
  isDisabled = true;

  setTimeout(function () {
    document.getElementById("ground").src = "/src/www/image/farm.png";
    locationType = "farm";
  }, 1000);

  setTimeout(function () {
    $("#ground").fadeIn(1200);
    isDisabled = false;
  }, 1200);
});

$("#clo").click(function () {
  if (isDisabled === true) {
    return false;
  }
  
  $("#ground").fadeOut(1200);
  isDisabled = true;

  setTimeout(function () {
    document.getElementById("ground").src = "/src/www/image/clouds.png";
    locationType = "clouds";
  }, 1000);

  setTimeout(function () {
    $("#ground").fadeIn(1200);
    isDisabled = false;
  }, 1200);
});

$("#sub").click(function () {
  if (isDisabled === true) {
    return false;
  }
  
  $("#ground").fadeOut(1200);
  isDisabled = true;

  setTimeout(function () {
    document.getElementById("ground").src = "/src/www/image/grass.png";
    locationType = "suburb"
  }, 1000);

  setTimeout(function () {
    $("#ground").fadeIn(1200);
    isDisabled = false;
  }, 1200);
});

$("#field").click(function () {
  if (isDisabled === true) {
    return false;
  }
  
  $("#ground").fadeOut(1200);
  isDisabled = true;

  setTimeout(function () {
    document.getElementById("ground").src = "/src/www/image/field.png";
    locationType = "field";
  }, 1000);

  setTimeout(function () {
    $("#ground").fadeIn(1200);
    isDisabled = false;
  }, 1200);
});

$("#mailbox-btn").click(function () {
  if (isDisabled === true) {
    return false;
  }
  
  $("#window").fadeOut(1200);
  isDisable = true;

  setTimeout(function () {
    $("#mailbox").fadeIn(1200);
    isDisable = false;
  }, 1200);
});

$("#go-home").click(function () {
  if (isDisabled === true) {
    return false;
  }
  
  $("#mailbox").fadeOut(1200);
  isDisable = true;

  setTimeout(function () {
    $("#window").fadeIn(1200);
    isDisable = false;
  }, 1200);
});

$("#mail-form").submit(function () {
  event.preventDefault();

  let http = new XMLHttpRequest();
  let url = 'https://WHISPERING-HILL-CONTROLS.codesalvageon.repl.co/mail';
  let params = 'user=' + setUser + '&msg=' + document.getElementById("tag").value;
  http.open('POST', url, true);

  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        // do nothin
    }
  }
  http.send(params);
  document.getElementById("tag").value = "";
});

$("#save-key").click(function () {
  let saveDraft = "-" + setUser + "-" + locationType;
  let finalKey = btoa(saveDraft);

  alert("Here's your key! Key: " + finalKey);
});

$("#load-key").click(function () {
  if (isDisabled === true) {
    return false;
  }
  let keyinit = prompt("Key: ");

  if (atob(keyinit) === undefined || atob(keyinit) === null || atob(keyinit) === "") {
    alert("Not a valid key.");
  }

  else {
    let keyArray = atob(keyinit).split("-");
    setUser = keyArray[1];

    if (keyArray[2] === "suburb") {
      document.getElementById("ground").src = "/src/www/image/grass.png";
    }

    else if (keyArray[2] === "field") {
      document.getElementById("ground").src = "/src/www/image/field.png";
    }

    else if (keyArray[2] === "clouds") {
      document.getElementById("ground").src = "/src/www/image/clouds.png";
    }

    else if (keyArray[2] === "farm") {
      document.getElementById("ground").src = "/src/www/image/farm.png";
    }

    else {
      alert("What in the goddamn?");
      console.log(keyArray[2]);
      console.log(keyArray);
    }

    locationType = keyArray[2];
  
    $("#title").fadeOut(1200);
    isDisabled = true;

    setTimeout(function () {
      $("#window").fadeIn(1200);
      isDisabled = false;
    }, 1200);
  }
});

let prevText = "";

setInterval(function () {
  function reqListener () {
    if (this.responseText === prevText) {
      // Do nothing 
    }

    else {
      document.getElementById("mail-cont").innerHTML = this.responseText;
    }
  }

  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "https://WHISPERING-HILL-CONTROLS.codesalvageon.repl.co/box");
  oReq.send();
}, 500);
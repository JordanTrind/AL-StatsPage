var boxLastValue = "";
var path = window.location.pathname;
var page = path.split("/").pop();

setInterval(function() {
  var boxNoValue = document.getElementById("rpuksba");
  var box = document.getElementById("rpuksba").value;

  var name = document.getElementById("selector--name");
  var playerId = document.getElementById("selector--steamid");
  var guid = document.getElementById("selector--guid");
  var form = document.getElementById("search");

  var type = "empty";

  var playerIdExpression = new RegExp("765611[0-9]{11}$");
  var guidExpression = new RegExp("[a-f0-9]{32}$");

  if (boxNoValue == document.activeElement) {
    if (box != boxLastValue) {
      if (box.length == 17 || box.length == 32) {
        if (playerIdExpression.test(box)) {
          type = "playerId";
          boxLastValue = box;
          console.log(type);
          form.action = "player.html";
          if (page == "index.html") {
            name.style.color =  "rgba(255,255,255,0.8)";
            playerId.style.color =  "rgba(255,255,255,1)";
            guid.style.color =  "rgba(255,255,255,0.8)";
          }
        }

        if (box.length == 32) {
          if (guidExpression.test(box)) {
            type = "guid";
            console.log(type);
            boxLastValue = box;
            form.action = "player.html";
            if (page == "index.html") {
              name.style.color =  "rgba(255,255,255,0.8)";
              playerId.style.color =  "rgba(255,255,255,0.8)";
              guid.style.color =  "rgba(255,255,255,1)";
            }
          }
        }
      } else if (box.length < 3) {
        type = "";
        console.log("empty");
        boxLastValue = box;
        form.action = "#";
        if (page == "index.html") {
          name.style.color =  "rgba(255,255,255,0.8)";
          playerId.style.color =  "rgba(255,255,255,0.8)";
          guid.style.color =  "rgba(255,255,255,0.8)";
        }
      } else {
        type = "name";
        console.log(type);
        boxLastValue = box;
        form.action = "search.html";
        if (page == "index.html") {
          name.style.color =  "rgba(255,255,255,1)";
          playerId.style.color =  "rgba(255,255,255,0.8)";
          guid.style.color =  "rgba(255,255,255,0.8)";
        }
      }
    }
  }
}, 1);

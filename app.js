
//Time Handler
function updateTime(){
    const time = new Date;
//    console.log(event.toLocaleTimeString("en-US"));
    document.getElementById("clock").textContent = time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function updateDate(){
    const date = new Date;
//    console.log(new Intl.DateTimeFormat("en-US").format(date));
    document.getElementById("date").textContent = Intl.DateTimeFormat("en-US").format(date);
}
updateTime();
updateDate();
setInterval(updateTime, 1000)
setInterval(updateDate, 1000)


//Dom Handler
function lightMode() {
    const body = document.getElementById("dom");
    body.classList.remove("darkmode");
    body.classList.add("lightmode");
  }
  
  function darkMode() {
    const body = document.getElementById("dom");
    body.classList.remove("lightmode");
    body.classList.add("darkmode");
  }


//Ajax Handler
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("reveal").innerHTML = this.responseText;
      }
    xhttp.open("GET", "Ajax.txt", true);
    xhttp.send();
  }
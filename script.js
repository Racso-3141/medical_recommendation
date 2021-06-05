function reqListener () {
    console.log(this.responseText);
}

document.querySelector("#generate").onclick = function() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://us-central1-safedrug-315515.cloudfunctions.net/prediction?diagnosis=0-1&procedure=1-2");
    oReq.send();
};

document.querySelector("#reset").onclick = function() {
    document.querySelector("#reset_output").innerHTML = "Reset"
}
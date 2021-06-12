function reqListener () {
    console.log(this.responseText);
}

document.querySelector("#generate").onclick = function() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "https://us-central1-safedrug-315515.cloudfunctions.net/prediction");
    oReq.send();
};

document.querySelector("#reset").onclick = function() {
    document.querySelector("#reset_output").innerHTML = "Reset"
}
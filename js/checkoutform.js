function toggleText() {
  var x = document.getElementById("cardInfo");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function toggleTextCod() {
  var x = document.getElementById("cardInfo");
  if (x.style.display === "none") {
    return;
  } else {
    x.style.display = "none";
  }
}

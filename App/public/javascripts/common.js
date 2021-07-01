function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
        selectElement.remove(i);
    }
}

function closeWindow(id){
    var x = document.getElementById(id);
    if (x.style.display != "none") {
      x.style.display = "none";
    }
  }
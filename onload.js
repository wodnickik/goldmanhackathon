console.log(sessionStorage.getItem("x"));
if(sessionStorage.getItem("offer1") === "nie") {
    document.getElementById("box1").checked = true;
    document.getElementById("box2").checked = true;
    document.getElementById("box3").checked = true;
    document.getElementById("box4").checked = true;
}
else{
    document.getElementById("box1").checked = true;
    document.getElementById("box3").checked = true;
    let elem = document.getElementById("job2");
    elem.style.height = 0 + "px";
    elem.style.visibility = "hidden";
    let elem2 = document.getElementById("job4");
    elem2.style.height = 0 + "px";
    elem2.style.visibility = "hidden";
}
function save_form() {
    let x = document.getElementById("python").checked;
    if(x == false){
        sessionStorage.setItem("x", "nie");
    }
    else{
        sessionStorage.setItem("x", "tak");
    }
    console.log(sessionStorage.getItem("x"));
    // if(x === false){
    //     localStorage.setItem("offer1", "nie");
    // }
    // console.log(localStorage.getItem("offer1"));
    // window.location.href = "./jobs/jobs.html";
}
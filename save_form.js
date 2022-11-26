function save_form() {
    let x = document.getElementById("uni_name").value;
    sessionStorage.setItem("uni", x);
}
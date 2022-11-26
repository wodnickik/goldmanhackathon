function changeOutput(){
    // window.alert("checked");
    let elements = [];

    if(document.getElementById("box1").checked) {
        // window.alert("checked1");
        elements.push("job1");
    }

    if(document.getElementById("box2").checked) {
        // window.alert("checked2");
        elements.push("job2");
    }

    if(document.getElementById("box3").checked) {
        // window.alert("checked3");
        elements.push("job3");
    }

    if(document.getElementById("box4").checked) {
        elements.push("job4");
    }

    console.log(elements);

    arr1 = [ "job1", "job2", "job3", "job4" ];
    arr2 = elements;
    let difference = arr1.filter(x => !arr2.includes(x));

    console.log(difference);

    for (let i = 0; i < difference.length; i++){
        let el_name = difference[i];
        var elem = document.getElementById(el_name);
        elem.style.height = 0 + "px";
        elem.style.visibility = "hidden";
        // elem.style.top = -9999;
    }

    for (let i = 0; i < elements.length; i++){
        let el_name = elements[i];
        var elem = document.getElementById(el_name);
        elem.style.height = "auto";
        elem.style.visibility = "visible";
        // elem.style.top = 1;
    }
}
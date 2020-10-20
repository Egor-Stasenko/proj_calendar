let inputs_color = document.getElementsByClassName("input_color");

onInput_cercleClick = function(num_of_element){
    let element = inputs_color[num_of_element-1];
    element.click();
};

function f() {
    //alert("1");
    /*
    var root = document.getElementById("infoChild");
    root.innerHTML = '<p class="name underlined underlined--gradient">Название</p>';
    var d = document.createElement("div");
    d.innerHTML = "qwer";
    root.appendChild(d);
*/

    Array.prototype.forEach.call(document.querySelectorAll(".s1"), function(e){
        e.style.color = "red";

        //e.classList.toggle("class_name"); //add remove

    });
    //. - class
    //# - id
    //div - element type
    // -> direct child



}

document.addEventListener('DOMContentLoaded', function(){

});
let inputs_color = document.getElementsByClassName("input_color");
let inputs_colorCercle = document.getElementsByClassName("input-cercle")

inputCircle_onClick = function(num_of_element){
    let element = inputs_color[num_of_element-1];
    element.click();
};


for(let i = 0; i < inputs_color.length; i++){
    let inp = inputs_color[i];
    let cer = inputs_colorCercle[i];

    inp.addEventListener("input", function() {
        cer.style.backgroundColor = inp.value;
    }, false);
};


// Array.prototype.forEach.call(document.querySelectorAll(".s1"), function(e){
//     e.style.color = "red";
//     //e.classList.toggle("class_name"); //add remove
//     //. - class
//     //# - id
//     //div - element type
//     // -> direct child
// });
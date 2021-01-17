let changeable_style_of_elements = ["b", "b", "b", "c", "c"];
let changeable_elements = [document.querySelector("body"), document.querySelector(".cal_header"), document.querySelector(".cal_body"), document.querySelector(".date time"), document.querySelector(".cal_body")];

let inputs_color = document.getElementsByClassName("input_color");
let inputs_colorCercle = document.getElementsByClassName("input-cercle")
inputCircle_onClick = function(num_of_element){
    let element = inputs_color[num_of_element-1];
    element.click();
};
for(let i = 0; i < inputs_color.length; i++){
    let inp = inputs_color[i];
    let cer = inputs_colorCercle[i];
    let el = changeable_elements[i];
    let st_of_el = changeable_style_of_elements[i];

    inp.addEventListener("input", function() {
        cer.style.backgroundColor = inp.value;
        if(st_of_el == "b"){
            el.style.backgroundColor = inp.value;
        }else{
            el.style.color = inp.value;
        };
    }, false);
};
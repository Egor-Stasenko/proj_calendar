let checkBoxT = document.getElementsByClassName("zoomCheck_true")[0];
checkBoxT.click();

zoomCheckClick = function(){
    let checkBoxF = document.getElementsByClassName("zoomCheck_false")[0];
    let lever = document.getElementsByClassName("checkLever")[0];
    let lever_footprint = document.getElementsByClassName("lever_footprint")[0];
    let rLight = document.getElementsByClassName("greenLight")[0];
    let gLight = document.getElementsByClassName("redLight")[0];
    let footprint_gradient = document.getElementsByClassName("lever_footprint_gradient")[0];

    footprint_gradient.classList.remove("anim_of");
    checkBoxT.click();
    checkBoxF.click();
    lever.classList.toggle("elem_reverse");
    lever_footprint.classList.toggle("elem_reverse");
    rLight.classList.toggle("my_disable");
    gLight.classList.toggle("my_disable");
    footprint_gradient.classList.toggle("lever_footprint_gradient_anim_right");
    footprint_gradient.classList.toggle("lever_footprint_gradient_anim_left");
};
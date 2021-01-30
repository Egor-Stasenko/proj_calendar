var params = [];
setSettings = function(RawSettings){
    let Settings = RawSettings.data;
    let p1 = Settings.param1;
    let p2 = Settings.param2;
    let p3 = Settings.param3;
    let p4 = Settings.param4;
    let p5 = Settings.param5;
    params = [p1, p2, p3, p4, p4, p5];
    for(let i = 0; i < inputs_color.length; i++){
        let inp = inputs_color[i];
        let val = params[i]
        inp.value = val;
        inputs_colorCercle[i].style.backgroundColor = val;
    };
};
getData('/_api/Settings/Get', (data) => setSettings(JSON.parse(data)), (err) => console.log(err));

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
        params[i] = inp.value;
    }, false);
};

submit_settings = function(){
    let data = {"param1":params[0],"param2":params[1],"param3":params[2],"param4":params[3],"param5":params[4]};
    data = JSON.stringify({data});
    postData('/_api/Settings/Set', data, () => showNotification('', 'posted'), () => showNotification('warning', 'Error during post request'));
    console.log("submited");
    console.log(data);
};
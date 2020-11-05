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


let sidebar = document.getElementsByClassName("side_settings_content_container")[0];
prettyGear_onClick = function(){
    sidebar.classList.toggle("my_disable");
};

// Array.prototype.forEach.call(document.querySelectorAll(".s1"), function(e){
//     e.style.color = "red";
//     //e.classList.toggle("class_name"); //add remove
//     //. - class
//     //# - id
//     //div - element type
//     // > direct child
// });


let now_i = 119;
let forward = false;

svg_checkmark_animate = function(now_i, forvard){
    let i = now_i;

    let iPlus = -1;
    let stopi = 0;
    if(forvard){
        iPlus = 1;
        stopi = 120;
    };

    let delay = 0.01 * 1000 / 120;

    var timerID = setInterval( ()=>{ let svg_svg = document.querySelectorAll('.my_svg_anim > svg')[0]; svg_svg.outerHTML = svg_animation_frames[i]; i+=iPlus; if (i == stopi) { clearInterval(timerID)}}, delay); 
};

    
let this_svg = document.querySelectorAll('.my_svg_anim > svg')[0];
if(!forward){
    this_svg.outerHTML = svg_animation_frames[0];
}else{
    this_svg.outerHTML = svg_animation_frames[119];
};

let anim_svg_div = document.getElementsByClassName("my_svg_anim")[0];
let check_zoom_calendar = document.getElementsByClassName("check_zoom_calendar")[0];
button_svg_anim_ckick = function(){
    forward = !forward;
    if(forward){
        now_i = 0;
    }else{
        now_i = 119;
    };
    svg_checkmark_animate(now_i, forward);
        
    anim_svg_div.classList.toggle("back_color_green");
    anim_svg_div.classList.toggle("back_color_red");

    check_zoom_calendar.click();
};

getReformedDay_of_week = function(day_of_week){
    if(day_of_week == "Mon"){
        return "1";
    }else if(day_of_week == "Tue"){
        return "2";
    }else if(day_of_week == "Wed"){
        return "3";
    }else if(day_of_week == "Thu"){
        return "4";
    }else if(day_of_week == "Fri"){
        return "5";
    }else if(day_of_week == "Sat"){
        return "6";
    }else{
        return "7";
    };
};
getReformedMon_arr = function(mon){
    if(mon == "Jan"){
        return ["Январь", "1"];
    }else if(mon == "Feb"){
        return ["Февраль", "2"];
    }else if(mon == "Mar"){
        return ["Март", "3"];
    }else if(mon == "Apr"){
        return ["Апрель", "4"];
    }else if(mon == "May"){
        return ["Май", "5"];
    }else if(mon == "Jun"){
        return ["Июнь", "6"];
    }else if(mon == "Jul"){
        return ["Июль", "7"];
    }else if(mon == "Aug"){
        return ["Август", "8"];
    }else if(mon == "Sep"){
        return ["Сентябрь", "9"];
    }else if(mon == "Oct"){
        return ["Октябрь", "10"];
    }else if(mon == "Nov"){
        return ["Ноябрь", "11"];
    }else{
        return ["Декабрь", "12"];
    }
};
getReformedDate = function(){
    let date_arr = String(new Date()).split(" ");
    let day_of_week = date_arr[0];
    let mon = date_arr[1];
    
    let day = date_arr[2];
    let year = date_arr[3];
    day_of_week = Number(getReformedDay_of_week(day_of_week));
    mon_str = getReformedMon_arr(mon)[0];
    mon_num = Number(getReformedMon_arr(mon)[1]);

    let fin_arr = [day, mon_num, year, mon_str, day_of_week];
    return fin_arr;
};

date = getReformedDate();

let day = date[0];
let mon_num = date[1];
let year = date[2];
let mon_str = date[3];
let day_of_week = date[4];

let visible_date = document.querySelector("time");
let visible_mon = document.querySelector(".mon > span");

visible_mon.textContent = mon_str;
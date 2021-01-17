let sidebar = document.getElementsByClassName("side_settings_content_container")[0];
prettyGear_onClick = function(){
    sidebar.classList.toggle("my_disable");
};

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
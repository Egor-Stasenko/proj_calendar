let months_name_arr = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let active_Day = "";

get_today = function(){
    let today_date = new Date();
    return today_date;
};
day_of_week_of_date = function(day1, mon1, year1){
    let this_date = new Date(year1, mon1, day1);
    ret = this_date.getDay();
    if(ret == 0){
        ret = 7;
    };
    return ret;
};
visible_days_in_this_mon = function(){
    let arr_pr = [];
    let arr = [];
    let arr_next = [];

    for(let i = 2 - day_of_week_of_date(1, mon_num-1, year); i <= 0; i++){
        let new_date = new Date(year, mon_num-1, i);
        let new_day = Number(String(new_date).split(" ")[2]);
        arr_pr.push(new_day);
    };
    
    let new_date = new Date(year, mon_num, 0);
    let new_day = Number(String(new_date).split(" ")[2]);
    for(let i = 1; i <= new_day; i++){
        arr.push(i);
    };

    let brake_next_i = 7 - day_of_week_of_date(new_day, mon_num-1, year);
    for(let i = 1; i <= brake_next_i; i++){
        arr_next.push(i);
    };

    let ret = [arr_pr, arr, arr_next];
    return ret;
};
get_day_button = function(column, line){
    line += 2;
    selector = ".days tr:nth-of-type(" + line + ") td:nth-of-type(" + column + ") button";
    obj = document.querySelector(selector);
    return obj;
};
reforge_nums_for_gdb_func = function(column, line){
    line_plus = Math.floor(column / 7);
    line += line_plus;
    column -= line_plus * 7;

    if(column == 0){
        line--;
        column = 7;
    };

    ret = [column, line]
    return ret;
};
get_button_by_text = function(text){
    text = String(Number(text));
    let i = visible_days_in_this_mon()[0].length - 1;
    let stop = i + visible_days_in_this_mon()[1].length;
    for(i; i < stop; i++){
        let col = reforge_nums_for_gdb_func(i+1, 1)[0];
        let l = reforge_nums_for_gdb_func(i+1, 1)[1];
        let but = get_day_button(col, l);
        if(but.textContent == text){
            return but;
        };
    };
};
cicle_of_painting_visible_days_of_month = function(){
    arr_p = visible_days_in_this_mon()[0];
    arr_c = visible_days_in_this_mon()[1];
    arr_n = visible_days_in_this_mon()[2];
    for(let i = 0, num = 0; i < arr_p.length; i++){
        num = arr_p[i];
        but = get_day_button(i+1, 1);
        but.classList.add("disabled");
        but.textContent = num;
    };
    for(let i = 0, num = 0; i < arr_c.length; i++){
        num = arr_c[i];
        col = reforge_nums_for_gdb_func(i+1+arr_p.length, 1)[0];
        l = reforge_nums_for_gdb_func(i+1+arr_p.length, 1)[1];
        but = get_day_button(col, l);
        but.textContent = num;
    };
    for(let i = 0, num = 0; i < arr_n.length; i++){
        num = arr_n[i];
        col = reforge_nums_for_gdb_func(i+1+arr_p.length+arr_c.length, 1)[0];
        l = reforge_nums_for_gdb_func(i+1+arr_p.length+arr_c.length, 1)[1];
        but = get_day_button(col, l);
        but.classList.add("disabled");
        but.textContent = num;
    };

    if(mon_num == get_today().getMonth()+1 && year == get_today().getFullYear()){
        col = reforge_nums_for_gdb_func(Number(day)+arr_p.length, 1)[0];
        l = reforge_nums_for_gdb_func(Number(day)+arr_p.length, 1)[1];
        but = get_day_button(col, l);
        but.classList.add("active");

        today_button.classList.add("my_disable");
    }else{
        today_button.classList.remove("my_disable");
    };

    if(mon_num == Number(active_Day.split("-")[1]) && year == Number(active_Day.split("-")[2])){
        get_button_by_text(active_Day.split("-")[0]).classList.add("used");
    };
};
clear_calendar = function(){
    for(let i = 0; i < 42; i++){
        col = reforge_nums_for_gdb_func(i+1, 1)[0];
        l = reforge_nums_for_gdb_func(i+1, 1)[1];
        but = get_day_button(col, l);
        but.classList.remove("disabled");
        but.classList.remove("active");
        but.classList.remove("used");
        but.textContent = "";
    };
};
clear_calendar_from_used = function(){
    for(let i = 0; i < 42; i++){
        col = reforge_nums_for_gdb_func(i+1, 1)[0];
        l = reforge_nums_for_gdb_func(i+1, 1)[1];
        but = get_day_button(col, l);
        but.classList.remove("used");
    };
};

let info_block = document.getElementsByClassName("info")[0];
let cards = document.getElementsByClassName("info-card");
destroy_cards = function(){
    for(i = 0; i < cards.length; i++){
        cards[i].classList.remove("card_anim");
        cards[i].classList.add("card_anim_reverse");
    };
    let t = setTimeout( () => {
        info_block.innerHTML = '';
    }, 1600);
};
create_cards = function(content){
    content = content.holidays;
    let tout = 0;
    if(cards.length != 0){
        destroy_cards();
        tout = 2800;
    };
    let t = setTimeout( () => {
        if(!content){
            //пустая "праздников нет"
            return;
        };
        for(i = 0; i < content.length; i++){
            let name = content[i].name;
            let disc = "";
            if(content[i].official){
                disc += "Оффициальный ";
            }else{
                disc += "Неоффициальный ";
            };
            if(content[i].holiday){
                disc += "с выходными ";
            }else{
                disc += "без выходных ";
            };
            disc += content[i].cat;
            disc += " ";
            disc += content[i].country;
            disc += ".\n";
            disc += content[i].descr;
            
            info_block.innerHTML += '<div class="info-card card_anim"><div class="name"><p> </p></div><div class="horizontal_line"><div class="line"></div></div><div class="discription"><p> </p></div></div>';
            let name_obj = document.querySelector(".info-card:nth-of-type(" + String(Number(i+1)) +") > .name > p");
            let disc_obj = document.querySelector(".info-card:nth-of-type(" + String(Number(i+1)) +") > .discription > p");
            
            name_obj.textContent = name;
            disc_obj.textContent = disc;
        };
    }, tout);
};
show_day_info = function(year, month, day){
    getData('/_api/getHoliday/' + year+"/"+month+"/"+day, (data) => create_cards(JSON.parse(data)), (err) => console.log(err));
};

let today_button = document.getElementsByClassName("today_button")[0];

let date_obj = new Date();
let day = String(date_obj).split(" ")[2]; //[01;31]  //не number
let mon_num = date_obj.getMonth() + 1;    //[1;12]
let year = date_obj.getFullYear();
let mon_str = months_name_arr[mon_num - 1];
let day_of_week = date_obj.getDay();      //[1;7]
if(day_of_week == 0){
    day_of_week = 7;
};

let visible_date = document.querySelector("time");
let visible_mon = document.querySelector(".mon > span");

let visible_mon_num = mon_num;
if(visible_mon_num < 10){
    visible_mon_num = "0" + visible_mon_num;
};
visible_date.textContent = day + "-" + visible_mon_num + "-" + year;
visible_mon.textContent = mon_str + " " + year;

cicle_of_painting_visible_days_of_month();
let usedBut = document.getElementsByClassName("active")[0];
usedBut.classList.add("used");
active_Day = visible_date.textContent; 
show_day_info(year, visible_mon_num, day);

///////////////////////////////////////////
next_month = function(){
    clear_calendar();

    date_obj.setFullYear(year, mon_num);
    day = String(date_obj).split(" ")[2]; //[01;31]  //не number
    mon_num = date_obj.getMonth() + 1;    //[1;12]
    year = date_obj.getFullYear();
    mon_str = months_name_arr[mon_num - 1];
    day_of_week = date_obj.getDay();      //[1;7]
    if(day_of_week == 0){
        day_of_week = 7;
    };
    visible_mon_num = mon_num;
    if(visible_mon_num < 10){
        visible_mon_num = "0" + visible_mon_num;
    };

    visible_mon.textContent = mon_str + " " + year;
    
    cicle_of_painting_visible_days_of_month();
};
priveous_month = function(){
    clear_calendar();

    date_obj.setFullYear(year, mon_num-2);
    day = String(date_obj).split(" ")[2]; //[01;31]  //не number
    mon_num = date_obj.getMonth() + 1;    //[1;12]
    year = date_obj.getFullYear();
    mon_str = months_name_arr[mon_num - 1];
    day_of_week = date_obj.getDay();      //[1;7]
    if(day_of_week == 0){
        day_of_week = 7;
    };
    visible_mon_num = mon_num;
    if(visible_mon_num < 10){
        visible_mon_num = "0" + visible_mon_num;
    };
    
    visible_mon.textContent = mon_str + " " + year;
    
    cicle_of_painting_visible_days_of_month();
};
today_button_click = function(){
    if(year > get_today().getFullYear()){
        //мотаем назад пока не год == и месяц ==
        while(mon_num > get_today().getMonth()+1 || year > get_today().getFullYear()){
            priveous_month();
        };
    }else if(year < get_today().getFullYear()){
        //мотаем вперёд пока не год == и месяц ==
        while(mon_num < get_today().getMonth()+1 || year < get_today().getFullYear()){
            next_month();
        };
    }else{
        //год ==; сравн месяц и мотаем пока не месяц ==
        if(mon_num > get_today().getMonth()+1){
            while(mon_num > get_today().getMonth()+1){
                priveous_month();
            };
        }else{
            console.log("8");
            while(mon_num < get_today().getMonth()+1){
                next_month();
            };
        };
    };
};

for(let i = 0; i < 42; i++){
    col = reforge_nums_for_gdb_func(i+1, 1)[0];
    l = reforge_nums_for_gdb_func(i+1, 1)[1];
    but = get_day_button(col, l);
    but.onclick = function(){
        but.addEventListener("input", function() {
            clear_calendar_from_used();
            but.classList.add("used");
        }, false);
    };
};

let table = document.getElementsByClassName("days")[0];
table.onclick = function(event) {
    let target = event.target;
    if(target.tagName != "BUTTON")  return;
    day_button_onclick(target);
};
day_button_onclick = function(but){
    if(usedBut == but){
        return;
    };

    if(but.classList.contains("disabled")){
        if(Number(but.textContent) > 15){
            priveous_month();
        }else{
            next_month();
        };
        return;
    };

    if(usedBut){
        usedBut.classList.remove("used");
    };
    usedBut = but;
    usedBut.classList.add("used");

    let UB_text = usedBut.textContent;
    if(Number(UB_text) < 10){
        UB_text = "0" + UB_text;
    };
    visible_date.textContent = UB_text + "-" + visible_mon_num + "-" + year;
    active_Day = visible_date.textContent; 
    show_day_info(year, visible_mon_num, UB_text);
};



//общение с сервером
function getData(addr, onSuccess, onError, timeout){ 
    var xhr = new XMLHttpRequest(); 
    if(timeout){
        xhr.timeout = timeout;
    }else{
        xhr.timeout = 20000;
    };
    xhr.ontimeout = function(){
        alert('timeout');
    };

    xhr.onreadystatechange = function(){ 
        if(xhr.readyState != 4) return; 
        if(xhr.status != 200){ 
            onError(xhr.status + ': ' + xhr.statusText);
        }else{ 
            onSuccess(xhr.responseText);
        };
    };
    xhr.open('GET', addr, true); 
    xhr.send();
};

onClick_postData = function(){
    postData('/_api/postSomeData', 'my own data', () => showNotification('', 'posted'), () => showNotification('warning', 'Error during post request'));
};

createGuid = function(){ 
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(c) { 
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 > c / 4).toString(16) 
    });
};
showNotification = function(cssClass, text){
    var notify = document.createElement('div');
    notify.className = 'notify';
    if (cssClass.length > 0) notify.classList.add(cssClass);
    notify.id = createGuid();
    notify.innerHTML = '<div class="notify-text al-c prs-header2">' + text + '</div>';
    document.body.appendChild(notify);
    setTimeout(function(){
                    document.getElementById(notify.id).style.opacity = "1";
                    setTimeout(function(){
                                    document.getElementById(notify.id).remove();
                    }, 1200);
    }, 2000);
};

function postData(addr, data, onSuccess, onError){ 
    var xhr = new XMLHttpRequest(); 
    xhr.timeout = 20000; 
    xhr.ontimeout = function(){ 
        showNotification("warning", "timeout occured"); 
    };
    xhr.onerror = function(){ 
        showNotification("warning", "error occured"); 
    }; 
    
    xhr.open('POST', addr, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(data);

    xhr.onreadystatechange = function(){ // (3) 
        if(xhr.readyState != 4) return;
        if(xhr.status != 200){ 
            onError(xhr.status + ': ' + xhr.statusText);
        }else{ 
            onSuccess(xhr.responseText); 
        };
    };
};
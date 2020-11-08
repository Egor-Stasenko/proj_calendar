let months_name_arr = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
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
visible_date.textContent = day + "-" + mon_num + "-" + year;
visible_mon.textContent = mon_str;

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
console.log(visible_days_in_this_mon()[0]);
console.log(visible_days_in_this_mon()[1]);
console.log(visible_days_in_this_mon()[2]);
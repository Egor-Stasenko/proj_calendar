var express = require('express');
var app = express();
var fs = require("fs");
var dbHelper = require('./db')

dbHelper.createDatabase();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

var settings = JSON.parse(fs.readFileSync("settings.json"));
console.log(settings);

app.use(function(req, res, next) {
  next();
});

app.use(express.static(__dirname + '/public'));

////////////livereload
var livereload = require("livereload");
var lrServer = livereload.createServer();
lrServer.watch(__dirname+"/public");
////////////livereload

//обработки
app.get("/_api/getHoliday/:year/:month/:day", function (req, res){
  /*
  getHolidays(req.params["year"], req.params["month"], req.params["day"]).then((data) => {
    res.end(JSON.stringify({"holidays": data}));
  });
*/
  (async () => {
    try {
      var data = await dbHelper.getHolidays(req.params["year"], req.params["month"], req.params["day"]);
      res.end(JSON.stringify({"holidays": data}));
      //[{"name": data.name, "day": data.day, "month": data.month, "official": data.official=="1", "holiday": data.holiday=="1", "cat": data.cat, "country": data.country, "descr": "Официальный с 1995 года. День воинской славы России"}, {"name": "День разгорма фашистских войск под Сталинградом", "day": 2, "month": 2, "official": true, "holiday": false, "cat": "памятный день", "country": "Россия", "descr": "Официальный с 1995 года. День воинской славы России"}]});
    }
    catch (e) {
      console.log(e);
      res.end("error");
    }
  })();


  // res.end(req.params["dateParam"]);
});
app.get("/_api/Settings/Get", function (req, res){
  (async () => {
    try {
      var data = await settings;
      res.end(JSON.stringify({data}));
    }
    catch (e) {
      console.log(e);
      res.end("error");
    }
  })();
});
// учётки
// app.get("/_api/get_settings/:login/:password", function (req, res) { 
//  
// });
// app.get("/_api/write_settings/:login/:password/:params", function (req, res) { 
//  
// });
// учётки
app.use(bodyParser.urlencoded({extended: true}));
app.post('/_api/Settings/Set', (req, res, next) => {
  let data = req.body;
  console.log(data);
  
  // fs.writeFileSync("settings.json", req.body)
  

  res.end("ok");
});
//обработки

///запуск
app.listen(3000);
console.log("listening 3000 (http://localhost:3000/)");
///запуск
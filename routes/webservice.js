var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get("/flights",function(req,res){
//  res.sendFile("/work_files/all_flights");
//});
router.get('/', function(req, res, next) {
  res.sendFile("/work_files/all_flights");
});
module.exports = router;
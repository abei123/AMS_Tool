var station = require('../public/js/beans/StationPrototype.js');
var flights = require('../public/js/beans/Flights.js');
var equipment = require('../public/js/beans/EquipmentPrototype.js');
var stationAlerts = require('../public/js/beans/StationAlert.js');
var fs = require('fs')


module.exports = {
    getAllStations: function (e, callback) {
        getAllStationsFN(e, 'work_files/all_stations', callback);
    },

    getDispatcherStations: function (e, dispatcherId, callback) {
        getDispatcherStationsFN(e, 'work_files/stations_for_' + dispatcherId, dispatcherId, callback);
    },

    getAllFlights: function (e, callback) {
        getAllFlightsFN(e, 'work_files/all_flights', callback);
    },

    getAllAlerts: function (e, callback) {
        getAllAlertsFN(e, 'work_files/all_alerts', callback);
    },

    getAllStationsWithFileName: function (e, filename, callback) {
        getAllStationsFN(e, filename, callback);
    },

    getDispatcherStationsWithFileName: function (e, filename, dispatcherId, callback) {
        getDispatcherStationsFN(e, filename, dispatcherId, callback);
    },

    getAllFlightsWithFileName: function (e, filename, callback) {
        getAllFlightsFN(e, filename, callback);
    },

    getAllEquipments: function getAllEquipments(e, callback) {
        fs.readFile('work_files/all_equipments', 'utf8', function (err, data) {
			callback(JSON.parse(data));
        });
    },
    saveDataFilter: function saveDataFilter(arrValues, fileName) {
    	fs.writeFile('work_files/'+fileName, JSON.stringify(arrValues), null);
    },
    readDataFilter: function readDataFilter(fileName, callback) {
    	fs.readFile('work_files/'+fileName, function (err, data) {
    	    if(err == null) {
                console.log('File exists');
                try {
                    callback(JSON.parse(data));
                } catch (error) {
                    console.log(error);
                }
    	    } else if(err.code == 'ENOENT') {
    	    	console.log('No ' + fileName + ' created yet.');
    	    } else {
    	        console.log('Some other error: ', err.code);
    	    }

   		});
    }
}

var getAllStationsFN = function (e, filename, callback) {
    fs.readFile(filename, 'utf8', function (err, data) {
		callback(JSON.parse(data));
    });
}

var getDispatcherStationsFN = function (e, filename, dispatcherId, callback) {
    fs.readFile(filename, 'utf8', function (err, data) {
		callback(JSON.parse(data));
    });
}

var getAllFlightsFN = function (e, filename, callback) {
    fs.readFile(filename, 'utf8', function (err, data) {
		var flights = JSON.parse(data);
		
		flights.forEach(function(f) {
			var curDate = new Date();
			var schDep = new Date(f.schGMTDepTime);
			var schArr = new Date(f.schGMTArrTime);
			var latDep = new Date(f.latGMTDepTime);
			var latArr = new Date(f.latGMTArrTime);
			var prjDep = new Date(f.prjGMTDepTime);
			var prjArr = new Date(f.prjGMTArrTime);
			
			f.schGMTDepTime = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() , schDep.getHours(), schDep.getMinutes(), schDep.getSeconds(),schDep.getMilliseconds());
			f.schGMTArrTime = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() , schArr.getHours(), schArr.getMinutes(), schArr.getSeconds(),schArr.getMilliseconds());
			f.latGMTDepTime = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() , latDep.getHours(), latDep.getMinutes(), latDep.getSeconds(),latDep.getMilliseconds());
			f.latGMTArrTime = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() , latArr.getHours(), latArr.getMinutes(), latArr.getSeconds(),latArr.getMilliseconds());
			f.prjGMTDepTime = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() , prjDep.getHours(), prjDep.getMinutes(), prjDep.getSeconds(),prjDep.getMilliseconds());
			f.prjGMTArrTime = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() , prjArr.getHours(), prjArr.getMinutes(), prjArr.getSeconds(),prjArr.getMilliseconds());
		});
		
		callback(flights);
    });
}


var getAllAlertsFN = function (e, filename, callback) {
    fs.readFile(filename, 'utf8', function (err, data) {
		callback(JSON.parse(data));
    });
}

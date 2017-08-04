var socketio = require('socket.io');
var dao = require("./dao/dao");


function init(server) {
    var io = socketio(server);

    io.on('connection', function (socket) {
        console.log("Received socket connection with ID " + socket.id);

        socket.on('please update station data', function (data) {
            console.log('[' + socket.id + ']Received request to update stations');
            dao.getAllStations(null, function (r) {
                socket.emit('updated station data', r);
            });
        });

        socket.on('please provide dispatcher station data', function (data) {
            console.log('[' + socket.id + ']Received request for stations of dispatcher ' + data.dispatcherId);
            dao.getDispatcherStations(null, data.dispatcherId, function (r) {
                socket.emit('dispatcher station data', r);
            });
        });

        socket.on('please update flights data', function (data) {
            console.log('Received flights request to update ' + data.station);
            dao.getAllFlights(null, function (r) {
                r = r.filter(function (flight) {
                    return ((flight.depSta == data.station) || (flight.arrSta == data.station));
                });
                
                socket.emit('updated flights data', r);
            });
        });

        socket.on('please update filter data', function (data) {
        	console.log('Received equipment data');
            dao.getAllEquipments(null, function (r) {
                socket.emit('updated equipment data', r);
            });

        });

        socket.on('saving-filter-data', function (data, filterName) {
        	console.log('Saving Filter Data');
        	dao.saveDataFilter(data, filterName);
        });

        socket.on('reading-filter-data', function (data, filterName) {
        	console.log('Reading Filter Data - ' + filterName);
        	dao.readDataFilter(filterName, function(r) {
        		socket.emit('retrieved-filter-data', r);
        	});

        });

        socket.on('read-station-alerts', function (data, stationName) {
            console.log('Reading station alerts - ' + stationName);
            dao.getAllAlerts(stationName, function (r) {
                socket.emit('retrieved-alerts-data', r);
            });
        });

    });

    return io;
}

module.exports = init;

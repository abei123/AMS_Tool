module.exports = function (alertId, alertTime, status, type, station, title, message) {
    this.alertId = alertId;
    this.alertTime = alertTime;
    this.status = status;
    this.type = type;
    this.station = station;
    this.title = title;
    this.message = message;
}

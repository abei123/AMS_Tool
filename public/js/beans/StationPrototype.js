module.exports = function (id, aname, sname, timeAdj, timeZone) {
    this.ata_id = id;
    this.airportName = aname;
    this.stationName = sname;
    this.timeAdjustInMin = timeAdj;
    this.timeZone = timeZone;
}

module.exports = function (fltKey, fltNum, prbType,airlineCode, metalInd,fltLegStat,depStat,arrStat, depSta, arrSta, arrGate,depGate, schGMTDepTime, schGMTArrTime,
  latGMTDepTime,latGMTArrTime, prjGMTDepTime, prjGMTArrTime, GMTAdjDepSta, tailNum,asgEqpCode,eqpType,fleetType,fleetBodyType,GMTAdjArrSta,paxCount,domIntCode,fosUpdTime,groundTime,schEqpCode,turnTime) {
    this.fltKey = fltKey;
    this.fltNum = fltNum;

    this.prbTypes = [];
    this.prbTypes.push(prbType);

    this.airlineCode = airlineCode;
    this.metalInd = metalInd;
    this.fltLegStat = fltLegStat;
    this.depStat = depStat;
    this.arrStat = arrStat;
    this.depSta = depSta;
    this.arrSta = arrSta;
    this.arrGate = arrGate;
    this.depGate = depGate;
    this.schGMTDepTime = schGMTDepTime;
    this.schGMTArrTime = schGMTArrTime;
    this.latGMTDepTime = latGMTDepTime;
    this.latGMTArrTime = latGMTArrTime;
    this.prjGMTDepTime = prjGMTDepTime;
    this.prjGMTArrTime = prjGMTArrTime;
    this.GMTAdjDepSta = GMTAdjDepSta;
    this.tailNum = tailNum;
    this.asgEqpCode = asgEqpCode;
    this.eqpType = eqpType;
    this.fleetType = fleetType;
    this.fleetBodyType = fleetBodyType;
    this.GMTAdjArrSta = GMTAdjArrSta;
    this.paxCount = paxCount;
    this.domIntCode = domIntCode;
    this.fosUpdTime = fosUpdTime;
    this.groundTime = groundTime;
    this.schEqpCode = schEqpCode;
    this.turnTime = turnTime;
}

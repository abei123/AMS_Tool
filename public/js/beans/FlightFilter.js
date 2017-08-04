function FlightFilter() {
    this.station = 'DFW';
    this.byFlightDirection = 'ALL';
	this.flightType = 'ALL'; //ALL, PROBLEMATIC, REGULAR
    this.prbTypes = [];
    this.fleetBodyType = [];
    this.fleetType = [];
    this.eqpType = [];
    this.asgEqpCode = [];
    this.airlineCode = [];
	this.fltLegStat = [];
    this.probArr = [];

    var self = this;

    this.filterFlights = function (fltArray) {
        var retFltArray = fltArray;
        logSettings(this);

        if (this.byFlightDirection != '') {
            retFltArray = filterFlightDirection(retFltArray, this.station, this.byFlightDirection);
        }

        retFltArray = this.filterFlightTypeData(retFltArray);
        retFltArray = this.filterData(retFltArray);

        if ((this.probArr != null) && (this.probArr.length > 0)) {
            retFltArray = filterFlightProblemType(retFltArray, this.probArr);
        }

        return retFltArray;
    }

    this.filterFlightTypeData = function(fltArray) {
  var retFltArray = [];

  if (this.flightType == 'ALL') {
    retFltArray = fltArray;
  }else if (this.flightType == 'REGULAR') {
      retFltArray = fltArray.filter(function(el) {
      if(jQuery.inArray('REGULAR ', el.prbTypes) != -1) {
        return el;
        };
      });
  } else if (this.flightType == 'PROBLEMATIC') {

    retFltArray = fltArray.filter(function(el) {
    if(jQuery.inArray('REGULAR ', el.prbTypes) == -1) {
      return el;
      };
    });
  }

  return retFltArray;
}

    this.filterData = function(fltArray) {
      var retFltArray = [];
      //alert(self.station+'#'+self.byFlightDirection+'#'+self.flightType+'#'+self.prbTypes+'#'+self.fleetBodyType+'#'+self.fleetType+'#'+self.eqpType+'#'+self.asgEqpCode+'#'+self.airlineCode+'#'+self.byProbType+'#'+self.fltLegStat);
      jQuery.each(fltArray, function(){

        if( (self.fleetBodyType.length === 0 || jQuery.inArray(this.fleetBodyType,self.fleetBodyType) !== -1)
          && (self.fleetType.length === 0 || jQuery.inArray(this.fleetType,self.fleetType) !== -1)
          && (self.eqpType.length === 0 || jQuery.inArray(this.eqpType,self.eqpType) !== -1)
          && (self.asgEqpCode.length === 0 || jQuery.inArray(this.asgEqpCode,self.asgEqpCode) !== -1)
          && (self.fltLegStat.length === 0 || jQuery.inArray(this.fltLegStat,self.fltLegStat) !== -1)
          && (self.airlineCode.length === 0 || jQuery.inArray(this.airlineCode,self.airlineCode) !== -1)
        ){
          retFltArray.push(this);
        }
      });
      return retFltArray;
    }
}

function filterFlightDirection(fltArray, station, direction) {
    return fltArray.filter(function (flight) {
        switch (direction) {
            case 'OUTBOUND':
                return (flight.depSta == station);
                break;
            case 'INBOUND':
                return (flight.arrSta == station);
                break;
            default:
                return ((flight.depSta == station) || (flight.arrSta == station));
                break;
        }
    });

}

function filterFlightProblemType(fltArray, probArr) {
    return fltArray.filter(function (flight) {
        for (var i = 0; i < probArr.length; i++) {
          if(jQuery.inArray(probArr[i],flight.prbTypes) !== -1){
            return true;
          }
        }

        return false;
    });
}

function logSettings(ff) {
    console.log('----------------------------------------------');
    console.log(' STATION     : ' + ff.station);
    console.log(' DIRECTION   : ' + ff.byFlightDirection);
	console.log(' FLIGHT TYPE : ' + ff.flightType);
    console.log(' PRB TYPES   : (' + ff.prbTypes.length + ') ' + ff.prbTypes);
    console.log(' BODY TYPE   : (' + ff.fleetBodyType.length + ') ' + ff.fleetBodyType);
    console.log(' FLEET TYPE  : (' + ff.fleetType.length + ') '  + ff.fleetType);
    console.log(' EQP TYPE    : (' + ff.eqpType.length + ') '  + ff.eqpType);
    console.log(' ASG EQP CODE: (' + ff.asgEqpCode.length + ') '  + ff.asgEqpCode);
    console.log(' AIRLINE     : (' + ff.airlineCode.length + ') '  + ff.airlineCode);
	console.log(' FLT LEG STAT: (' + ff.fltLegStat.length + ') '  + ff.fltLegStat);
    console.log(' PROB ARRAY  : (' + ff.probArr.length + ') '  + ff.probArr);
    console.log('----------------------------------------------');
}

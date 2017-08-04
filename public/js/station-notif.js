function getStationAlerts(station) {
    var socket = io.connect();
    socket.emit('read-station-alerts', {stationName:station});

    socket.on('retrieved-alerts-data', function(newData) {
        console.log('Received updated dispatcher data');
        if (!newData) {
          $('div.notifAlerts-container').html('<div class="notifBellAlerts">No active alerts.</div>');
          setStationAlertCount(0);
        } else {
          var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          var alertCount = 0;
          $('div.notifAlerts-container').html('');
          for (i = 0; i < newData.length; i++) {
            if(newData[i].status==1){ alertCount++;}
            var d = new Date(newData[i].alertTime);
            var current = new Date();
            var displayDate = (d.getHours()<10?'0':'') + d.getHours() + ":" + (d.getMinutes()<10?'0':'')+d.getMinutes();
            d.setHours(0,0,0,0);
            current.setHours(0,0,0,0);
            if(d<current){
              displayDate = displayDate + "<br>" + (d.getDate()<10?'0':'') + d.getDate() + " " +  monthNames[d.getMonth()]
            }
            $('div.notifAlerts-container').append(
              '<div class="notifBellAlerts' + (newData[i].status==1 ? ' notifBellAlertsWarning': '') + '" id="notifAlert'+newData[i].alertId + '" onclick="markAlertUnread(this)">'
                + '<div class="col-sm-10 col-md-10 notifWarningCol">'
                + '<h4 class="notifWarningTitle"><strong>'+newData[i].title+'</strong></h4>'
                + '<p class="notifWarningText">'+newData[i].message+'</p>'
                + '</div>'
                + '<div class="col-sm-2 col-md-2 notifTimeCol">'
                + '<p class="text-right notifTime">'+displayDate+'</p>'
                + '</div>'
              +'</div>'
            )
          }
          setAlertCount(alertCount, 'notifBellNum');
        }
    });
}

//call to initialize by default
getStationAlerts('DFW');

function markAlertUnread(el){
  var alertId = $(el).attr('id').replace('notifAlert', '');

  if($(el).hasClass('notifBellAlertsWarning')){
    $(el).removeClass('notifBellAlertsWarning');
    //TODO: send request to update alert status
    updateMessageAlertCount(-1)
  } else {
      $(el).addClass('notifBellAlertsWarning');
      //TODO: send request to update alert status
      updateMessageAlertCount(1)
  }
}

function updateMessageAlertCount(increase){
  var count = $('#notifBellNum').find('label').text();
  if(count=='') count=0;
  count = parseInt(count)+parseInt(increase);
  setAlertCount(count, 'notifBellNum');
}

function setAlertCount(count, spanId){
  if(count>0){
    $('#'+spanId).removeClass('icon-hidden');
    $('#'+spanId).find('label').text(count>99?'99+':count);
  } else {
    $('#'+spanId).find('label').text('');
    if(!$('#'+spanId).hasClass('icon-hidden')){
      $('#'+spanId).addClass('icon-hidden');
    }
  }
}

function setProblemAlertCount(fltArr, station){
  var crewLegality = 0;
  var ooType = 0;
  var layOver = 0;
  var taxi = 0;
  var intlMis = 0;
  var diversion = 0;
  var missingCrew = 0;
  var missingFA = 0;
  var failingCont = 0;
  var missingTail = 0;
  var totalAlert = 0;
  for (i = 0; i < fltArr.length; i++) {
    var withAlert = false;
    //if(station==fltArray[i].station){
      if($.inArray('INTERNATIONAL MISCONNECTS', fltArr[i].prbTypes)){ intlMis++; withAlert=true;}
      if($.inArray('DIVERSION', fltArr[i].prbTypes)){ diversion++; withAlert=true; }
      if($.inArray('MISSING FA', fltArr[i].prbTypes)){ missingFA++; withAlert=true; }
      if($.inArray('MISSING TAIL', fltArr[i].prbTypes)){ missingTail++; withAlert=true; }
      if($.inArray('OUT OF TYPE', fltArr[i].prbTypes)){ ooType++; withAlert=true; }
      if($.inArray('FAILING CONTINUITY', fltArr[i].prbTypes)){ failingCont++; withAlert=true; }
      if($.inArray('LAYOVER', fltArr[i].prbTypes)){ layOver++; withAlert=true; }
      if($.inArray('TAXI ALERT', fltArr[i].prbTypes)){ taxi++; withAlert=true; }
      if($.inArray('CREW LEGALITY', fltArr[i].prbTypes)){ crewLegality++; withAlert=true; }
      if($.inArray('MISSING CREW',fltArr[i].prbTypes)){ missingCrew++; withAlert=true; }
    //}
    if(withAlert){totalAlert++}
  }

  setAlertCount(crewLegality, 'crewLegalityAlerts');
  setAlertCount(ooType, 'ooTypeAlerts');
  setAlertCount(layOver, 'layoverAlerts');
  setAlertCount(taxi, 'taxiAlerts');
  setAlertCount(intlMis, 'intrntlMisAlerts');
  setAlertCount(diversion, 'diversionAlerts');
  setAlertCount(missingCrew, 'missingCrewAlerts');
  setAlertCount(missingFA, 'missingFAAlerts');
  setAlertCount(failingCont, 'failingContAlerts');
  setAlertCount(missingTail, 'missingTailAlerts');

  //var totalAlert = crewLegality+ooType+layOver+taxi+intlMis+diversion+missingCrew+missingFA+failingCont+missingTail;
  setAlertCount(totalAlert, 'alertNum');
}

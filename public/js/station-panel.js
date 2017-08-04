  ////*************PROBLEM TYPE BUTTONS*****************/////

  $('#crewLegalityIcon').click(function() {
      if ($('#crewLegalityIcon').attr('class') == "icon icon-problemType_crewLegality_default") {
          $('#crewLegalityIcon').attr('class', 'icon icon-problemType_crewLegality_selected');
      } else {
          $('#crewLegalityIcon').attr('class', 'icon icon-problemType_crewLegality_default');
      }
  });

  $('#ooTypeIcon').click(function() {
      if ($('#ooTypeIcon').attr('class') == "icon icon-problemType_OOType_default") {
          $('#ooTypeIcon').attr('class', 'icon icon-problemType_OOType_selected');
      } else {
          $('#ooTypeIcon').attr('class', 'icon icon-problemType_OOType_default');
      }
  });

  $('#layoverIcon').click(function() {
      if ($('#layoverIcon').attr('class') == "icon icon-problemType_layover_default") {
          $('#layoverIcon').attr('class', 'icon icon-problemType_layover_selected');
      } else {
          $('#layoverIcon').attr('class', 'icon icon-problemType_layover_default');
      }
  });

  $('#taxiAlertIcon').click(function() {
      if ($('#taxiAlertIcon').attr('class') == "icon icon-problemType_taxiAlert_default") {
          $('#taxiAlertIcon').attr('class', 'icon icon-problemType_taxiAlert_selected');
      } else {
          $('#taxiAlertIcon').attr('class', 'icon icon-problemType_taxiAlert_default');
      }
  });

  $('#intrntlMisIcon').click(function() {
      if ($('#intrntlMisIcon').attr('class') == "icon icon-problemType_intrntlMis_default") {
          $('#intrntlMisIcon').attr('class', 'icon icon-problemType_intrntlMis_selected');
      } else {
          $('#intrntlMisIcon').attr('class', 'icon icon-problemType_intrntlMis_default');
      }
  });

  $('#diversionIcon').click(function() {
      if ($('#diversionIcon').attr('class') == "icon icon-problemType_diversion_default") {
          $('#diversionIcon').attr('class', 'icon icon-problemType_diversion_selected');
      } else {
          $('#diversionIcon').attr('class', 'icon icon-problemType_diversion_default');
      }
  });

  $('#missingCrewIcon').click(function() {
      if ($('#missingCrewIcon').attr('class') == "icon icon-problemType_missingCrew_default") {
          $('#missingCrewIcon').attr('class', 'icon icon-problemType_missingCrew_selected');
      } else {
          $('#missingCrewIcon').attr('class', 'icon icon-problemType_missingCrew_default');
      }
  });

  $('#missingFAIcon').click(function() {
      if ($('#missingFAIcon').attr('class') == "icon icon-problemType_missingFA_default") {
          $('#missingFAIcon').attr('class', 'icon icon-problemType_missingFA_selected');
      } else {
          $('#missingFAIcon').attr('class', 'icon icon-problemType_missingFA_default');
      }
  });

  $('#failingContIcon').click(function() {
      if ($('#failingContIcon').attr('class') == "icon icon-problemType_failingCont_default") {
          $('#failingContIcon').attr('class', 'icon icon-problemType_failingCont_selected');
      } else {
          $('#failingContIcon').attr('class', 'icon icon-problemType_failingCont_default');
      }
  });

  $('#missingTailIcon').click(function() {
      if ($('#missingTailIcon').attr('class') == "icon icon-problemType_missingTail_default") {
          $('#missingTailIcon').attr('class', 'icon icon-problemType_missingTail_selected');
      } else {
          $('#missingTailIcon').attr('class', 'icon icon-problemType_missingTail_default');
      }
  });

/*********DATE PICKER***********/
$('#viewDate').click(function(){
  $('#viewDate').datepicker();
});
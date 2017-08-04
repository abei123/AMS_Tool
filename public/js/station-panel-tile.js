var stationArray = ["DFW", "LAX", "PHX"];
var stationTime = ["GMT -5","GMT -7","GMT -6"]


/**********TILE VIEW INIT***********/
$.fn.viewToggle = function(){
$("#stationPanelWrapper").toggleClass("hide");
$("#page-content-wrapper").toggleClass("hide");
$("#page-tile-wrapper").toggleClass("hide");
$('body').toggleClass("tabViewHeightProp");
$.fn.positionInit();
};


$.fn.positionInit = function(){
    $('.filterTab').each(function() {
    var $this = $(this);
    $this.css('margin-top', $this.parent().height() - $this.height());
});
    for (i = 0; i < stationArray.length; i++) {
    $('#station' + (i + 1)).find('h4').text(stationArray[i]);
    $('#station' + (i + 1)).find('#stationPanelTime').text('('+stationTime[i]+')');
    $('#station' + (i + 1)).find('h4').attr('id', 'stationPanel' + stationArray[i]);
};
};

/**********TILE VIEW INIT END***********/
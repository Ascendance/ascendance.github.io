// Homepage content height
var handleHomeContentHeight = function() {
    $('#home').height($(window).height());
};

// Hide Pace
var handlePaceLoad = function() {
    Pace.on('hide', function(){
        $('.pace').addClass('hide');
    });
};

// Have BS autofit background
var handleBackStrechBG = function(){
    $("#bg-home").backstretch("assets/img/poly.jpg");
}

// Main Application
var App = function () {
	"use strict";
	return {
		init: function () {
		    handleHomeContentHeight();
		    handlePaceLoad();
            handleBackStrechBG();
		}
  };
}();
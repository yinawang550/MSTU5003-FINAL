var theBtn = document.querySelector('#myBtn');

var myBtnA = jQuery('#myBtn');
var myBtnB = $('#myBtn');

$(document).ready(function() {
  $('#fullpage').fullpage({
		sectionsColor: ['#1bbc9b', 'transparent', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
				menu: '#menu',
				// scrollingSpeed: 1000
	});
});

console.log('full page loaded');

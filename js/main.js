var theBtn = document.querySelector('#myBtn');

var myBtnA = jQuery('#myBtn');
var myBtnB = $('#myBtn');

$(document).ready(function() {
  $('#fullpage').fullpage({
		sectionsColor: ['#1bbc9b', 'transparent', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'forthPage', 'fifthPage','lastPage'],
				menu: '#menu',
				// scrollingSpeed: 1000
	});
});

console.log('full page loaded');

//bloger video
$(document).ready(function() {
		$('#myContainer').fullpage({
			sectionsColor: ['#ff73a1', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff', '#ccc'],
			anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
			menu: '#menu',
			slidesNavigation: true,
			scrollHorizontally: true,
			scrollHorizontallyKey: 'YWx2YXJvdHJpZ28uY29tX01mU2MyTnliMnhzU0c5eWFYcHZiblJoYkd4NVNRcg==',
			afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
				console.log("slideLoad--" + "anchorLink: " + anchorLink + " index: " + index + " slideAnchor: " + slideAnchor + " slideIndex: " + slideIndex);

			},
			onSlideLeave: function(anchorLink, index, slideIndex, direction){
				console.log("----------------");
				console.log("onSlideLeave--" + "anchorLink: " + anchorLink + " index: " + index + " slideIndex: " + slideIndex + " direction: " + direction);
			}
		});
	});
//three bloger
$(function(){
  $('[data-toggle="popover"]').popover();
});


//post area

document.querySelector('#postButton1,postButton2').addEventListener('click', function(){
	userMsg=document.querySelector('#userText2').value;
	messageList.push(userMsg);

	var el = document.createElement("P"); //<p>
		el.innerHTML=userMsg;   //<p>message</p>
		document.querySelector('#area2').appendChild(el);
		document.querySelector('#userText2').value = "";
});

var messageList = [];
var userMsg = "xxx";
var userMsg = document.querrySelector('#userText2');

document.querySelector('#postButton2').addEventListener('click', function() {
var userMsg = document.querySelector('#userText2').value;
messageList.push(userMsg);

console.log(userMsg);
document.querySelector('#userText2').value="";
});

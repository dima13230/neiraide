var output = document.getElementById("output");

function detectmob() {
	return window.innerWidth <= 800 && window.innerHeight <= 600 ? true : false;
}

var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineNumbers: true,
  mode: "python"
});
editor.setSize(null, detectmob() ? 400 : 900);

var navtoggle = document.getElementById('nav-toggle');
var nav = document.getElementById('nav');

navtoggle.click(function() {
  nav.hide(450, function() {
    navtoggle.css('margin-left', '0');
    navtoggle.css('width', '1.6em');
  });
});

var hammertime = new Hammer(document.getElementById("nav-toggle"));
hammertime.on('swipe', function(ev) {
	togglenav();
});




function new_f() {
  editor.setValue("");
  document.activeElement = null;
}

function togglenav() {
  nav.toggle(450, function() {
    if(nav.css('display') == 'block') {
      navtoggle.css('margin-left', '210px');
      navtoggle.css('width', '100%');
    }
    else {
      navtoggle.css('margin-left', '0');
      navtoggle.css('width', '1.6em');
    }
  });
}




function openResultsTab(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
} 
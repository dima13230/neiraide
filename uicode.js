var output = document.getElementById("output");

function detectmob() {
   if(window.innerWidth <= 800 && window.innerHeight <= 600) {
     return true;
   } else {
     return false;
   }
}

var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  lineNumbers: true,
  mode: "python"
});
editor.setSize(null, 400);


function new_f() {
	editor.setValue("");
}

var navtoggle = $('.nav-toggle');
var nav = $('#nav');

function togglenav() {
  nav.toggle(450, function() {
    if(nav.css('display') == 'block') {
      navtoggle.css('margin-left', '180px');
      navtoggle.css('width', '100%');
    }
    else {
      navtoggle.css('margin-left', '0');
      navtoggle.css('width', '1.6em');
    }
  });
}

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
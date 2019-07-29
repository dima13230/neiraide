var output = document.getElementById("output");

function detectmob() {
	output.innerHTML = window.innerWidth + "x" + window.innerHeight;
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

//// Mobile adjust \\\\

if (detectmob()) {
	editor.getWrapperElement().style["font-size"] = 18+"px";
}


function new_f() {
	editor.setValue("");
}
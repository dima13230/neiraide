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

//// Mobile adjust \\\\

var output = document.getElementById("output");
if (detectmob()) {
	output.innerHTML = window.innerWidth + "x" + window.innerHeight;
	editor.getWrapperElement().style["font-size"] = 20+"px";
}



function new_f() {
	editor.setValue("");
}
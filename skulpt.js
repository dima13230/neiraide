// Load external libraries
var exLibsOk = false;

var exLibs;
$.getJSON("./exLib.json", function(json) {
	exLibs = json;
	exLibsOk = true;
});

function outf(text)
{
    var output = document.getElementById("output");
    text = text.replace(/</g, '&lt;');
    output.innerHTML = output.innerHTML + text;
}

function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
	{
		if(exLibsOk) {
			if (x.replace("./", "") in exLibs) {
				console.log("Seeking for " + x.replace("./", "") + " in external libs list");
				return Sk.misceval.promiseToSuspension(
					fetch(exLibs[x.replace("./", "")]["path"])
						.then(
						function(r) { return r.text(); }
						)
						.catch( console.log )
				);
			}
		}
	}
	
    return Sk.builtinFiles["files"][x];
}

function runit()
{
    var prog = editor.getValue();
    var output = document.getElementById("output");
    output.innerHTML = '';
	Sk.pre = "output";
	
    Sk.configure({output:outf, read:builtinRead});
	
	(Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'canvas';
	
    var myPromise = Sk.misceval.asyncToPromise(function() {
       return Sk.importMainWithBody("<stdin>", false, prog, true);
	});
	myPromise.then(function(mod) {
       console.log('success');
	},
    function(err) {
       output.innerHTML = err.toString();
   });
}
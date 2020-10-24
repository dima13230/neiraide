var getJSON = require('get-json')

// Load external libraries
var exLibsOk = false;
var exLibs;
getJSON("./exLib.json", function(error, json) {
	if(error != null){
		exLibs = json;
		exLibsOk = true;
	}
	else
	{
		console.error(error);
	}
});

function outf(text)
{
    var output = document.getElementById("Output");
    text = text.replace(/</g, '&lt;');
    output.value = output.value + text;
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
	if (detectmob())
	{
		togglenav();
		document.activeElement = null;
	}
    var prog = editor.getValue();
    var output = document.getElementById("Output");
    output.value = '';
	Sk.pre = "Output";
	
    Sk.configure({output:outf, read:builtinRead, __future__: Sk.python3});
	
	(Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'Canvas';
	
    var myPromise = Sk.misceval.asyncToPromise(function() {
       return Sk.importMainWithBody("<stdin>", false, prog, true);
	});
	myPromise.then(function(mod) {
       console.log('Script executed successfully');
	},
    function(err) {
       output.value = err.toString();
   });
}

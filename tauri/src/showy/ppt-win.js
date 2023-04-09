/*  main stdin/stdout processing loop  */
// while (!WScript.StdIn.AtEndOfStream) {
// 	/*  read the input request  */
// 	var line = WScript.StdIn.ReadLine();
// 	line = line.replace(/^{"command":"(.+?)"}$/, '$1');
// 	if (line === '' || line === 'EXIT') break;
// 	var argv = line.split(/\s+/);
// 	var cmd = argv[0];
// 	var arg = '';
// 	if (argv.length > 1) arg = argv[1];

// 	/*  write the output response  */
// 	WScript.StdOut.Write(cmd + '\n');
// }

var msoTrue = -1;
var msoFalse = 0;

var ppShowAll = 1;
var ppShowSlideRange = 2;
var ppShowNamedSlideShow = 3;

var stdin = WScript.StdIn;
var stdout = WScript.StdOut;
var input;

function print(name, text) {
	stdout.Write('response; { "' + name + '": "' + text + '" }\n');
}

function error(e) {
	stdout.Write('error; { "' + e.name + '": "' + e.message + '" }\n');
}

var app;
var pres;

var trimExp = /^\s+|\s+$/g;
var remQuote = /^"|"$/g;
var addSpace = /%20/g;

var cmdExp = /^> [A-Z]+/g;
// var argExp = /--([a-z0-9\.\/\\-_]+)(?: ([a-z0-9\.\/\\-_]+|"[a-z0-9\.\/\\-_ ]+"))?/g;

while (!stdin.AtEndOfStream) {
	try {
		var input = stdin.ReadLine().replace(trimExp, '');
		var command = input.match(cmdExp);
		if (command && command[0]) {
			command = command[0].replace('> ', '');
			var args = input.split(' ');
			var arg = args[2].replace(addSpace, ' ');
			if (command === 'SETUP') {
				var file = arg.replace(remQuote, '');
				app = new ActiveXObject('PowerPoint.Application');

				var fso = WScript.CreateObject('Scripting.FileSystemObject');
				fn = fso.GetAbsolutePathName(file);
				// print(fn);

				pres = app.Presentations.Open(fn, msoTrue, msoFalse, msoFalse);
				// pres.Final = true;

				var start = 1;
				var end = pres.Slides.Count;
				if (args[3]) {
					start = parseInt(args[3]);
					if (start < 1) start = 1;
					if (start > end) start = end;
					// if (start > 1) end = start - 1;
				}

				pres.SlideShowSettings.ShowPresenterView = false;
				pres.SlideShowSettings.RangeType = ppShowSlideRange;
				pres.SlideShowSettings.LoopUntilStopped = msoFalse;
				pres.SlideShowSettings.StartingSlide = start;
				pres.SlideShowSettings.EndingSlide = end;
				pres.SlideShowSettings.Run();
				// print('app setup');
				print('setup', start);
			} else if (command === 'GOTO') {
				if (args[3]) {
					var slide = parseInt(args[3]);
					pres.SlideShowWindow.View.GotoSlide(slide);
				} else {
					pres.SlideShowWindow.View.Next();
				}
			} else {
				error({ name: 'error', message: 'Unrecognized command' });
			}
		}
	} catch (e) {
		error(e);
	}
}

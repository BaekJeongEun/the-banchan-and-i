
var win= null;
function openBW(theURL,winName,w,h,scroll,resize){
	var winl = (screen.width-w)/2;
	var wint = (screen.height-h)/2;
	var setting  ='height='+h+',';
	setting +='width='+w+',';
	setting +='top='+wint+',';
	setting +='left='+winl+',';
	setting +='scrollbars='+scroll+',';
	setting +='resizable='+resize+'';
	win=window.open(theURL,winName,setting);
	if(parseInt(navigator.appVersion) >= 4){win.window.focus();}
}


function openBW2(theURL,winName,w,h,t,l,scroll,resize){
	var winl = t;
	var wint = l;
	var setting  ='height='+h+',';
	setting +='width='+w+',';
	setting +='top='+wint+',';
	setting +='left='+winl+',';
	setting +='scrollbars='+scroll+',';
	setting +='resizable='+resize+'';
	win=window.open(theURL,winName,setting);
	if(parseInt(navigator.appVersion) >= 4){win.window.focus();}
}
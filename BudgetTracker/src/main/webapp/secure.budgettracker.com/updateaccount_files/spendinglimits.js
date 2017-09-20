function addspendinglimits(acctid){
	jQuery('#addspendinglimitsid').show();
	spendinglimitsfrm.acctid.value=acctid;
	spendinglimitsfrm.spendinglimitsamount.value="";
	accountupdate_div.style.display='none';
	updateaccount.style.display='none';
	mainsection.style.display='none';
	//showBlackOverlay();
	spendinglimitsfrm.spendinglimitsamount.focus();
	spendinglimitsfrm.spendinglimitsamount.select();
}
function updatespendinglimits(acctid){	
	spendinglimitsfrm.style.display='none';
	accountupdate_div.style.display='none';
	updateaccount.style.display='none';
	mainsection.style.display='none';
	document.getElementById("updatespendinglimitsbody").innerHTML="Loading, please wait...";
	document.getElementById("updatespendinglimitsid").style.display='';
	if(window.XMLHttpRequest){
		http = new XMLHttpRequest();
	}
	else if (window.ActiveXObject){
		http = new ActiveXObject("Microsoft.XMLHTTP");
	}
	http.open("POST","spendinglimits_update.php",true);
	http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	http.onreadystatechange = handleInfo_spendinglimitsupdate;
	sendvar="spendinglimitsID="+acctid;
	http.send(sendvar);
	
}

function handleInfo_spendinglimitsupdate() {
	if(http.readyState == 1) {
		
	}
	if(http.readyState == 4) {
		var response = http.responseText;
		document.getElementById("updatespendinglimitsbody").innerHTML=response;
		spendinglimitsfrmupdate.spendinglimitsamount.focus();
		spendinglimitsfrmupdate.spendinglimitsamount.select();
		
	}
}


function cancelspendinglimits(){
	//hideBlackOverlay();
	document.getElementById("addspendinglimitsid").style.display='none';
	accountupdate_div.style.display='';
	updateaccount.style.display='none';
	mainsection.style.display='';
}
function cancelupdatespendinglimits(){
	document.getElementById("updatespendinglimitsid").style.display='none';
	spendinglimitsfrm.style.display='';
	accountupdate_div.style.display='';
	updateaccount.style.display='none';
	mainsection.style.display='';
}

function savespendinglimits(){
	//hideBlackOverlay();
	document.getElementById("addspendinglimitsid").style.display='none';
	openajax();
	if(window.XMLHttpRequest){
		http = new XMLHttpRequest();
	}
	else if (window.ActiveXObject){
		http = new ActiveXObject("Microsoft.XMLHTTP");
	}
	http.open("POST","save/newspendinglimits.php",true);
	http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	http.onreadystatechange = handleInfo_savespendinglimits;
	
	sendvar="ACCTID="+spendinglimitsfrm.acctid.value+"&spendinglimitsAMOUNT="+spendinglimitsfrm.spendinglimitsamount.value;
	http.send(sendvar);
	return false;
}
function handleInfo_savespendinglimits() {
	if(http.readyState == 1) {
		
	}
	if(http.readyState == 4) {
		var response = http.responseText;
		$("accountupdate_div").innerHTML=response;
		accountupdate_div.style.display='';
		updateaccount.style.display='none';
		mainsection.style.display='';
		getaccounts();
		closeajax();
		new Ajax.Updater('categorydropdownID', 'common/selcategories.php', {method:'post', postBody:'lastcat=1',asynchronous:true});
	}
}

function savespendinglimits_update(){
	openajax();
	if(window.XMLHttpRequest){
		http = new XMLHttpRequest();
	}
	else if (window.ActiveXObject){
		http = new ActiveXObject("Microsoft.XMLHTTP");
	}
	http.open("POST","save/updatespendinglimits.php",true);
	http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	http.onreadystatechange = handleInfo_savespendinglimits_update;

	sendvar="ACCTID="+spendinglimitsfrmupdate.acctid.value+"&spendinglimitsID="+spendinglimitsfrmupdate.spendinglimitsid.value+"&spendinglimitsAMOUNT="+spendinglimitsfrmupdate.spendinglimitsamount.value;
	http.send(sendvar);
	return false;
}
function handleInfo_savespendinglimits_update() {
	if(http.readyState == 1) {
		
	}
	if(http.readyState == 4) {
		var response = http.responseText;
		document.getElementById("updatespendinglimitsid").style.display='none';
		accountupdate_div.style.display='';
		updateaccount.style.display='';
		mainsection.style.display='';
		getaccounts();
		closeajax();
		accountupdate_div.innerHTML=response;
		new Ajax.Updater('categorydropdownID', 'common/selcategories.php', {method:'post', postBody:'lastcat=1',asynchronous:true});
	}
}

function deletespendinglimits(spendinglimitsid){
	if(window.XMLHttpRequest){
		http = new XMLHttpRequest();
	}
	else if (window.ActiveXObject){
		http = new ActiveXObject("Microsoft.XMLHTTP");
	}
	http.open("POST","save/deletespendinglimits.php",true);
	http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	http.onreadystatechange = handleInfo_savespendinglimits_update;
	sendvar="spendinglimitsID="+spendinglimitsid;
	http.send(sendvar);
	return false;
}

function checksavings(e){
	if(e=="-1"){
		document.location.href="updateaccounts.php";
	}
}

function CheckAccount(){
	if($('spendinglimitsbudgetID').checked==true){
		$('accountID')[0].selected=true;
		$('accountID').disabled=true;
	}
	else
	{
		$('accountID').disabled=false;
	}	
}
function CheckAccountU(){
	if($('spendinglimitsbudgetuID').checked==true){
		$('accountuID')[0].selected=true;
		$('accountuID').disabled=true;
	}
	else
	{
		$('accountuID').disabled=false;
	}	
}
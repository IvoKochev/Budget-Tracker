function showBlackOverlay(){
	jQuery('body').append('<div class=blackoverlay></div>');
	jQuery('.blackoverlay').css('height',document.height);
}
function hideBlackOverlay(){
	jQuery('.blackoverlay').remove();
}
function testDate(key){
	if(isNaN(key)!=-1&&key.indexOf('/')!=true){
		return false;
	}
}
function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}

function escapeChars(x){
	x=x.replace(/&/g,"%26");
	return x;
}



function replaceAllChars(fromstr,tostr,str){
	var intIndexOfMatch=0;
	while (intIndexOfMatch != -1){
		str = str.replace( fromstr, tostr );
		intIndexOfMatch = str.indexOf( fromstr );
	}
	
	return str;
}


function UpdateNav_Submit(){
	$('NavigationMain').innerHTML="<div class=\"white padding3\">Loading, please wait...</div>";
	new Ajax.Request('save/updatenav.php',{method:'post',onComplete:UpdateNavPopup_Submit_Compete,parameters:Form.serialize(formNavigation)});
	return false;
}
function UpdateNavPopup_Submit_Compete(e){
	Element.hide('NavigationMainPopup');
	Nav_Update();
}
function CancelNavPopup(){
	Element.hide('NavigationMainPopup');
}
function newbill(x,y,z,acctid,returnurl,deposit){
	for(i=0;i<transactionfrm.catid.length;i++){
		if(transactionfrm.catid[i].value==z){
			transactionfrm.catid[i].selected=true;
		}
	}
	if(deposit==1){
		transactionfrm.transactionselect.value="deposit";
	}
	transactionfrm.tpaytonew.value=x;
	transactionfrm.tamount.value=y;
	if(acctid!=0){
		transactionfrm.account.value=acctid;
		transactionfrm.returnurl.value=returnurl;
		transactionfrm.submit();
	}
	else
	{
		transactionfrm.account.value="";
	}
}

function openfav(x){
	window.open(x,"favwin");
}

function closetips(){
	document.getElementById("tipspopup").style.display='none';
}
function disabletips(){
	document.getElementById("tipspopup").style.display='none';
	http.open("POST","save/disabletips.php",true);
	http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	sendvar="";
	http.send(sendvar);
}

function closeajax(){
	Element.hide('ajax_wait');
	Element.hide('loadingsmall');
}
function openajax(){
	Element.show('ajax_wait');
	setTimeout("closeajax()",5000);
}
function opensmallajax(){
		Element.show('loadingsmall');
}
function debtpayoff2(){
	debtdiv=document.getElementById("debtlist");
	if(debtdiv.style.display==''){
		debtdiv.style.display='none';
	}
	else
	{
		debtdiv.style.display=''
	}
}
function transactionsmore(){
	if(document.getElementById("transactionsmoreid").style.display==''){
		document.getElementById("transactionsmoreid").style.display='none';
	}
	else
	{
		document.getElementById("transactionsmoreid").style.display='';
	}
}

function UpdateFontSchema(font,schematab){
	var params = 'fontfamily='+font+'&cattab='+schematab;
	new Ajax.Request('settings_save.php',{method:'post',parameters:params,onComplete:UpdateFontSchema_Completed});	
}
function UpdateFontSchema_Completed(){
	location.href=location.href;
}
	
function TmoveDownNavList() {
	var selected = tForm.navmodifylist.selectedIndex;
	if(selected!=-1){
	if(tForm.navmodifylist.length-1!=tForm.navmodifylist.selectedIndex&&tForm.navmodifylist.selectedIndex!=-1){
			var moveText1 = tForm.navmodifylist[selected+1].text;
			var moveText2 = tForm.navmodifylist[selected].text;
			var moveValue1 = tForm.navmodifylist[selected+1].value;
			var moveValue2 = tForm.navmodifylist[selected].value;
			tForm.navmodifylist[selected].text = moveText1;
			tForm.navmodifylist[selected].value = moveValue1;
			tForm.navmodifylist[selected+1].text = moveText2;
			tForm.navmodifylist[selected+1].value = moveValue2;
			tForm.navmodifylist.selectedIndex = selected+1;
		}
	}
}

function TmoveNavUpList() {
	var selected = tForm.navmodifylist.selectedIndex;
	
	if(selected!=-1){
		if(tForm.navmodifylist.selectedIndex!=0&&tForm.navmodifylist.selectedIndex!=-1){
			moveText1 =tForm.navmodifylist[selected-1].text;
			moveText2 = tForm.navmodifylist[selected].text;
			moveValue1 = tForm.navmodifylist[selected-1].value;
			moveValue2 = tForm.navmodifylist[selected].value;
			tForm.navmodifylist[selected].text = moveText1;
			tForm.navmodifylist[selected].value = moveValue1;
			tForm.navmodifylist[selected-1].text = moveText2;
			tForm.navmodifylist[selected-1].value = moveValue2;
			tForm.navmodifylist.selectedIndex = selected-1;
		}
	}
}
function TremoveList(){
	var selected = tForm.navmodifylist.selectedIndex;
	if(tForm.navmodifylist.length>0&&selected!=-1){
		tForm.removelist.length=tForm.removelist.length+1;
		tForm.removelist[tForm.removelist.length-1].value=tForm.navmodifylist[selected].value;
		tForm.removelist[tForm.removelist.length-1].text=tForm.navmodifylist[selected].text;
		
		for(i=0;i<tForm.navmodifylist.length;i++){
			if(selected<i){
				tForm.navmodifylist[i-1].value=tForm.navmodifylist[i].value;
				tForm.navmodifylist[i-1].text=tForm.navmodifylist[i].text;
			}
		}
		tForm.navmodifylist.length=tForm.navmodifylist.length-1;
	}
}

function TaddList(){
	var selected = tForm.removelist.selectedIndex;
	if(tForm.removelist.length>0&&selected!=-1){
		tForm.navmodifylist.length=tForm.navmodifylist.length+1;
		tForm.navmodifylist[tForm.navmodifylist.length-1].value=tForm.removelist[selected].value;
		tForm.navmodifylist[tForm.navmodifylist.length-1].text=tForm.removelist[selected].text;
		
		
		for(i=0;i<tForm.removelist.length;i++){
			if(selected<i){
				tForm.removelist[i-1].value=tForm.removelist[i].value;
				tForm.removelist[i-1].text=tForm.removelist[i].text;
			}
		}
		tForm.removelist.length=tForm.removelist.length-1;
	}
}

function updatetabs(){
	document.getElementById("updatetabsid").style.display='';
}
function closetabs(){
	document.getElementById("updatetabsid").style.display='none';
}

function savetabs(){
	tForm.orderlist.value="";
	
	for(i=0;i<tForm.navmodifylist.length;i++){
		tForm.orderlist.value=tForm.orderlist.value+tForm.navmodifylist[i].value+",";
	}
	http.open("POST","save/updatetabs.php",true);
	http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	http.onreadystatechange = handleInfo_tabs;
	sendvar="TABORDER="+tForm.orderlist.value;
	http.send(sendvar);
}

function handleInfo_tabs() {
	if(http.readyState == 1) {
		
	}
	if(http.readyState == 4) {
		var response = http.responseText;
		document.getElementById("updatetabsid").style.display='none';
		alert("Success! Your new Tab settings have been saved.");
	}
}

function updatemods(){
	document.getElementById("updatemodsid").style.display='';
}
function closemods(){
	document.getElementById("updatemodsid").style.display='none';
}

function savemods(){
	tForm.orderlist.value="";
	
	for(i=0;i<mForm.navmodifylist.length;i++){
		mForm.orderlist.value=mForm.orderlist.value+mForm.navmodifylist[i].value+",";
	}
	http.open("POST","save/updatemods.php",true);
	http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	http.onreadystatechange = handleInfo_mods;
	sendvar="MODORDER="+mForm.orderlist.value;
	http.send(sendvar);
}

function handleInfo_mods() {
	if(http.readyState == 1) {
		
	}
	if(http.readyState == 4) {
		var response = http.responseText;
		document.getElementById("updatemodsid").style.display='none';
		alert("Success! Your new Module settings have been saved.");
	}
}
function hideLeftNav(){
	if($("leftbodyid").style.display==''){
		$("leftbodyid").style.display='none';
		$("leftnavTxtID").innerHTML="show&nbsp;&raquo;";
		savenavigation("leftnav","hide");
	}
	else
	{
		$("leftbodyid").style.display='';
		$("leftnavTxtID").innerHTML="&laquo;&nbsp;hide";
		savenavigation("leftnav","show");
	}
}
function hideRightNav(){
	if($("rightbodyid").style.display==''){
		$("rightbodyid").style.display='none';
		$("rightnavTxtID").innerHTML="&laquo;&nbsp;show";
		savenavigation("rightnav","hide");
	}
	else
	{
		$("rightbodyid").style.display='';
		$("rightnavTxtID").innerHTML="hide&nbsp;&raquo;";
		savenavigation("rightnav","show");
	}
}

function savenavigation(side,hide){
	if(window.XMLHttpRequest)
		http = new XMLHttpRequest();
	else if (window.ActiveXObject)
		http = new ActiveXObject("Microsoft.XMLHTTP");
	http.open("POST","settings_save.php",true);
	http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	sendvar="noredir=1&"+side+"="+hide;
	http.send(sendvar);
}

function testcheck(x){
	if(x=="check"){
		document.getElementById("checknumberval").style.display='';
	}
	else
	{
		document.getElementById("checknumberval").style.display='none';
	}
}

Tasks = {
	additem_save: function(){
		var sendvar="TASKNAME="+escapeChars(newtaskfrm.taskname.value)+"&TASKDESC="+escapeChars(newtaskfrm.taskdesc.value)+"&STATUS="+escapeChars(newtaskfrm.status.value)+"&NEWCATNAME="+escapeChars(newtaskfrm.newcatname.value)+"&DUEDATE="+escapeChars(newtaskfrm.duedate.value)+"&SHOWCAL="+newtaskfrm.newcalcheck.checked+"&COLOR="+newtaskfrm.color.value;
		if(newtaskfrm.catid){
			sendvar+="&CATID="+escapeChars(newtaskfrm.catid.value);
		}
		var url = "save/newtask.php";
		new Ajax.Request(url, {asynchronous:true,method:'post',parameters:sendvar,onSuccess:Tasks.additem_save_success});
		return false;
	},
	checknewcal: function(x){
		if(x==true){
			Element.show('newtaskID');
		}
		else
		{
			Element.hide('newtaskID');
		}
	},
	newtask: function(){
		Element.toggle('taskbody');
	},
	additem_save_success: function(){
		$('tasksuccessmsgID').innerHTML="<font color=red>Success! Your task has been saved.</font>";
		newtaskfrm.taskname.value='';
		newtaskfrm.taskdesc.value='';
		p=setTimeout("Tasks.closesuccess()",3000);
	},
	closesuccess: function(){
		$('tasksuccessmsgID').innerHTML="";
	}
}

Shop = {
	additem_save: function(){
		sendvar="GROCERYITEM="+newgroceryfrm.groceryitem.value+"&QUANTITY="+newgroceryfrm.quantity.value+"&SECTION="+newgroceryfrm.section.value+"&PRICE="+newgroceryfrm.price.value+"&NOTES="+newgroceryfrm.notes.value+"&NEWSTORENAME="+newgroceryfrm.newstorename.value;
		if(newgroceryfrm.storeid){
			sendvar+="&STOREID="+newgroceryfrm.storeid.value;
		}
		var url = "save/newgrocery.php";
		new Ajax.Request(url, {asynchronous:true,method:'post',parameters:sendvar,onSuccess:Shop.additem_save_success});
		return false;
	},
	additem_save_success: function(t){
		$('shopMessage').innerHTML=t.responseText;
		setTimeout("Shop.CloseSuccess()",3000);
		newgroceryfrm.groceryitem.value="";
		newgroceryfrm.quantity.value="";
		newgroceryfrm.price.value="";
		newgroceryfrm.notes.value="";
	},
	CloseSuccess: function(){
		$('shopMessage').innerHTML="";
	}
}

function LoadContainer(container,url){
	new Ajax.Updater(container,url, {asynchronous:true,onComplete:LoadContainer_success});
}

function LoadContainer_success(t){
	var response = t.responseText;
	Element.hide('ajax_wait');
}
function LoadContainerParams(container,url,params){
	new Ajax.Updater(container,url, {asynchronous:true,parameters:params,onComplete:LoadContainerParams_Complete});
}

function LoadContainerParams_Complete(){
	jQuery('.datetest').datepicker({
		dateFormat:jQuery('#jdateFormat').val(),
	});
	jQuery('input[type=text]').addClass('textbox');
	jQuery('input[type=button]').addClass('button');
	jQuery('input[type=submit]').addClass('button');
}

function SaveContainer(url,params){
	new Ajax.Request(url, {asynchronous:true,method:'post',parameters:params});
}
function SaveContainerUpdater(container,url,params){
	new Ajax.Updater(container,url, {asynchronous:true,method:'post',parameters:params});
}

function ToggleTransToolbar(toolbar){
	
	Element.toggle('transtoolID');
	if($('transtoolID').style.display!='none'){
		new Ajax.Request('save/closetranstoolbar.php',{asynchronous:true,method:'post',parameters:'toolbar=show'});
	}
	else
	{
		new Ajax.Request('save/closetranstoolbar.php',{asynchronous:true,method:'post',parameters:'toolbar=hide'});
	}
	if($('innerTransToolbar')!=null&&$('innerTransToolbar').innerHTML=='Loading, please wait...'){
		LoadTransToolbar();
	}

	//jQuery("html, body").animate({ scrollTop: jQuery('#transtoolID').offset().top }, 500);
}
Navigation = {
	addcurrent: function(url,alias){
		$('NavigationMain').innerHTML="<div class=\"white padding3\">Loading, please wait...</div>";
		var sendurl = "save/updatenavigation.php";
		var params = "add=1&alias="+escape(alias)+"&url="+escape(url);
		new Ajax.Request(sendurl, {asynchronous:true,method:'post',parameters:params,onSuccess:Navigation.current_success});
	},
	removecurrent: function(url){
		$('NavigationMain').innerHTML="<div class=\"white padding3\">Loading, please wait...</div>";
		var sendurl = "save/updatenavigation.php";
		var params = "add=0&url="+url;
		new Ajax.Request(sendurl, {asynchronous:true,method:'post',parameters:params,onSuccess:Navigation.current_success});
	},
	current_success: function(){
		Nav_CurrentUpdate();
	}
}

QuickSettings = {
	currency: function(currency){
		if(currency=="new"){
			location.href="settings.php?curr=new";
		}
		else
		{
			var sendurl = "settings_save.php";
			var params = "noredir=1&currency="+currency;
			new Ajax.Request(sendurl, {asynchronous:true,method:'post',parameters:params,onSuccess:QuickSettings.quick_success});
		}
	},
	dateformat: function(dateformat){
		var sendurl = "settings_save.php";
		var params = "noredir=1&dateformat="+dateformat;
		new Ajax.Request(sendurl, {asynchronous:true,method:'post',parameters:params,onSuccess:QuickSettings.quick_success});
	},
	resetacct: function(){
		var testconfirm = confirm("By reseting your account, all information except your profile will be deleted from the system and can not be recovered. Are you sure you want to reset your Account?");
		if(testconfirm==true){
			var sendurl = "save/resetuser.php";
			var params = "noredir=1&resetacct=1";
			new Ajax.Request(sendurl, {asynchronous:true,method:'post',parameters:params,onSuccess:QuickSettings.quick_success});
		}
	},
	quick_success: function(e){
		alert("Your settings have been saved. Please refresh to view changes.");
	}
}

function openhelp(){
	Element.show('tophelpid');
	Element.hide('tophelplnkid');
}
function closehelp(){
	Element.hide('tophelpid');
	Element.show('tophelplnkid');
}
function updatehelp(){
	
}

function mainbt(id){
	if(id=="1"){
		Element.hide('rightBudgetTracker');
		$('mainBudgetTracker').innerHTML="<iframe frameborder=0 width=100% height=100% src=\"http://google.com/calendar/\"></iframe>";
	}
}

function checkaddto(addto){
	Element.hide('budgetdateid');
	Element.hide('couponId');
	Element.hide('cashbackId');
	if(addto=="future"){
		Element.show('budgetdateid');
	}
	else if(addto=="coupon"){
		Element.show('couponId');
	}
	else if(addto=="cashback"){
		Element.show('cashbackId');
	}
}
function checkaddtou(addto){
	Element.hide('budgetdateuid');
	//Element.hide('ucouponId');
	
	if(addto=="future"){
		Element.show('budgetdateuid');
	}
	else if(addto=="coupons"){
		Element.show('ucouponId');
	}
}

function UpdateTheme(x){
	if(x=='simple'){
		location.href="settings_save.php?theme=5";
	}
	else if(x=="adv"){
		location.href="settings_save.php?theme=1";
	}
	else if(x=="kids"){
		location.href="settings_save.php?theme=10&returnurl=kids_budget.php";
	}
	else if(x=="emerald"){
		location.href="settings_save.php?theme=2";
	}
	else if(x=="rounded"){
		location.href="settings_save.php?theme=11";
	}
	else if(x=="business"){
		location.href="settings_save.php?theme=12";
	}
	else if(x=="setforlife"){
		location.href="settings_save.php?theme=13";
	}
}


function MmoveDownNavList() {
	var selected = mForm.navmodifylist.selectedIndex;
	if(selected!=-1){
	if(mForm.navmodifylist.length-1!=mForm.navmodifylist.selectedIndex&&mForm.navmodifylist.selectedIndex!=-1){
			var moveText1 = mForm.navmodifylist[selected+1].text;
			var moveText2 = mForm.navmodifylist[selected].text;
			var moveValue1 = mForm.navmodifylist[selected+1].value;
			var moveValue2 = mForm.navmodifylist[selected].value;
			mForm.navmodifylist[selected].text = moveText1;
			mForm.navmodifylist[selected].value = moveValue1;
			mForm.navmodifylist[selected+1].text = moveText2;
			mForm.navmodifylist[selected+1].value = moveValue2;
			mForm.navmodifylist.selectedIndex = selected+1;
		}
	}
}

function MmoveNavUpList() {
	var selected = mForm.navmodifylist.selectedIndex;
	
	if(selected!=-1){
		if(mForm.navmodifylist.selectedIndex!=0&&mForm.navmodifylist.selectedIndex!=-1){
			moveText1 =mForm.navmodifylist[selected-1].text;
			moveText2 = mForm.navmodifylist[selected].text;
			moveValue1 = mForm.navmodifylist[selected-1].value;
			moveValue2 = mForm.navmodifylist[selected].value;
			mForm.navmodifylist[selected].text = moveText1;
			mForm.navmodifylist[selected].value = moveValue1;
			mForm.navmodifylist[selected-1].text = moveText2;
			mForm.navmodifylist[selected-1].value = moveValue2;
			mForm.navmodifylist.selectedIndex = selected-1;
		}
	}
}

function savemodules(){
	mForm.orderlist.value="";
	for(i=0;i<mForm.navmodifylist.length;i++){
		mForm.orderlist.value=mForm.orderlist.value+mForm.navmodifylist[i].value+",";
	}
	return true;
}

function UpdateTabNavigation(page){
	var jscript="javascript";
	var printp="print";
	if(page!=""){
		if(jscript.indexOf(page)!=-1){
			eval(page);
		}
		else if(printp.indexOf(page)!=-1){
			window.open('print',page);
		}
		else
		{
			location.href=page;
		}
	}
}

function updatenavtype(type){
	$('NavigationMain').innerHTML="<div class=\"white padding3\">Loading, please wait...</div>";
	new Ajax.Request('save/updatenavtype.php',{method:'post',onComplete:UpdateNavPopup_Submit_Compete,parameters:'type='+type});
}

function addtags(tagname,count){
	$('tagsId').value+=tagname+",";
	Element.hide("transtags_"+count);
}

function addupdatetags(tagname,count){
	$('tagsupdateId').value+=tagname+",";
	Element.hide("updatetranstags_"+count);
}

function UpdateDateColor(dateid){
	dateid.style.color="#000000";
	
}

function UpdateSearchOptions(val){
	Element.hide('searchbycalendarId');
	Element.hide('searchbykeywordId');
	if(val=="daterange"){
		Element.show('searchbycalendarId');
	}
	else{
		Element.show('searchbykeywordId');
	}
}

function openbiztabs(){
	Element.toggle('tabchange');
}
function closebiztabs(){
	Element.hide('tabchange');
}
function updatebiztabs(obj){
	var tab1 = obj.tab1.value;
	var tab2=obj.tab2.value;
	var tab4=obj.tab4.value;
	var tab3=obj.tab3.value;
	var tab5=obj.tab5.value;

		var params="tab1="+tab1+"&tab2="+tab2+"&tab3="+tab3+"&tab4="+tab4+"&tab5="+tab5+"&tabhover="+obj.tabhover.value;
		new Ajax.Request('save/updatetabs.php',{asynchronous:true,method:'post',parameters:params,onComplete:updatebiztabs_complete});
		Element.hide('tabchange');
	
	return false;
}

function tabs_bizupdated(val){
	if(val==10)
		location.href='save/updatebrand.php?brand=2&customtab=2';	
}
function tabs_finupdated(val){
	if(val==10)
		location.href='save/updatebrand.php?brand=3&customtab=3';
}
function tabs_orgupdated(val){
	if(val==10)
		location.href='save/updatebrand.php?brand=1&customtab=1';	
}
function tabs_addonupdated(val){
	if(val==10)
		location.href='save/updatebrand.php?brand=4&customtab=4';
}
function tabs_supportupdated(val){
	if(val==10)
		location.href='save/updatebrand.php?brand=5&customtab=5';
}

function updatebiztabs_complete(){
	alert("Your tab settings have been saved. Please refresh to view.");
}
function openquickfeedback(type){
	Element.toggle('givefeedbackid');
	if(type=="suggestion"){
		jQuery('#givefeedbackid h2').html("Feature Request");
		jQuery('#qtypeid').val('feature');
	}
	else if(type=="employee"){
		jQuery('#givefeedbackid h2').html("Log Bug/Issue");
		jQuery('#qtypeid').val('employee');
		jQuery('#qsendbutton').val('Submit Issue');
	}
	else if(type=="needhelp"){
		jQuery('#givefeedbackid h2').html("I need help with...");
		jQuery('#qtypeid').val('needhelp');
	}
	else{
		jQuery('#givefeedbackid h2').html("Quick Feedback");
		jQuery('#qtypeid').val('feedback');
		jQuery('#qsendbutton').val('Send Feedback');
	}
}
function closequickfeedback(){
	Element.hide('givefeedbackid');
}
function sendquickfeedback(obj){
	new Ajax.Request('save/sendfeedback.php',{asynchronous:true,method:'post',parameters:Form.serialize(obj),onComplete:sendquickfeedback_complete});
	closequickfeedback();
	return false;
}
function sendquickfeedback_complete(){
	alert("Thank you, your feedback has been received.");
}

function IsLoggedIn(){
	new Ajax.Request('loggedin.php',{asynchronous:'true',parameters:'text=1',onComplete:IsLoggedIn_Complete});
}
function CheckLoginPage(){
	if(jQuery('#loginpage').val()=="1"&&location.href.indexOf('login.php')==-1)
		location.href="login.php";
	setTimeout("CheckLoginPage()",3000);
}
CheckLoginPage();
function IsLoggedIn_Complete(e){
	var response=e.responseText;
	if(response=="success"){
		setTimeout("IsLoggedIn()",3600000);
	}
	else if(response=="failed")
	{
		//location.href="login_secure.php?timeout=1";	
	}
}
function hidetips(){
	new Ajax.Request('settings_save.php',{method:'post',parameters:'noredir=1&helpfultips=1'});
	Element.hide('helpfultipmain');
	alert("To turn notifications back on, click Settings");
}
function openslider(){
	jQuery("#tabs").tabs();
	jQuery('#slider').toggle();
	if(jQuery('#slidepin').attr('class')=="appstaboff"){
		jQuery('#slidepin').attr('class','appstab');
	}
	else
	{
		jQuery('#slidepin').attr('class','appstaboff');
	}
	if($('tab_fav').innerHTML=="Loading, please wait..."){
		new Ajax.Updater('tab_fav','getfavs.php',{asynchronous:true});
	}

}
function closeslider(){
	jQuery('#slider').hide();

}
function savepage(){
	if($('star').src.indexOf('gstarLg.png')==-1){
		$('star').src="pics/icons/gstarLg.png";
	}
	else
	{
		$('star').src="pics/icons/starLg.png";
		alert('This page has been add to your Push Pin Favorites on the right.');
	}
	var pagename=escape($('pagename').value);
	var pagetitle=$('pagetitle').value;
	var url = escape(location.href);
	new Ajax.Request('save/newfav.php',{method:'post',parameters:'url='+url+'&pagename='+pagename+'&pagetitle='+pagetitle});
}

function googlesearch(){
	window.open('http://budgettracker.com/googlesearch.php?cs=partner-pub-8852055528408257:h6e23n85vu7&cof=FORID:10&ie=ISO-8859-1&q='+escape($('gq').value),'googlesearch');
	return false;
}
function openchat(){
	window.open('chat/index.php','chat','menubar=0,toolbar=0,location=1,width=750,height=475');
	chat.focus();
}
function UpdateColorSchema(colorid,schematab){
	if(colorid=="customize"){
		location.href='tabcustom.php?new=1&tab='+schematab;
	}else{
		var params = 'colorschema='+colorid+'&cattab='+schematab;
		new Ajax.Request('settings_save.php',{method:'post',parameters:params,onComplete:UpdateColorSchema_Completed});	
	}
	
}
function UpdateColorSchema_Completed(){
	location.href=location.href;
}

function checkWarning(){
	var catid = $('selcategoriesID').value;
	var acctid = $('accountId').value;
	var type = $('transactiontype').value;
	new Ajax.Request('warningmessage.php',{method:'post',parameters:'catid='+catid+'&acctid='+acctid+'&type='+type,onComplete:checkWarning_Completed});
}
function checkTransferWarning(){
	if(jQuery('#catid1').val() == jQuery('#catid2').val() && jQuery('#catid2').val() != "0"){
		jQuery('#samecatid').show();
	}
}
function checkWarning_Completed(data){
	var message = data.response;

	if(message=="" || !message)
		jQuery('.warningMessage').hide();
	else{
		jQuery('.warningMessage').show();
		jQuery('.warningMessage .body').html(message);
	}
}

jQuery(document).ready(function(){
	jQuery('.topnavigation td.more').click(function(e){
		jQuery('.morenavigation').show();
		e.stopPropagation();
		return false;
	});
	jQuery('html').live('click',function(){
		jQuery('.morenavigation').hide();
		closeSubHeaders();
	});
	jQuery('.placeholder').css('color','#ccc');
	jQuery('.placeholder').click(function(){
		jQuery(this).css('color','#000');
		jQuery(this).val('');
	});
	jQuery('.subheader').mouseleave(function() {
	  	closeSubHeaders();
	});
	jQuery('.headerSection').mouseover(function() {
	  	closeSubHeaders();
	});
	jQuery('input[type=text]').addClass('textbox');
	jQuery('input[type=button]').addClass('button');
	jQuery('.monthnavbuttons').removeClass('button');
	jQuery('input[type=button][value="Cancel"]').addClass('cancelbutton');
	jQuery('input[type=submit]').addClass('button');
	jQuery('input[type=password]').addClass('textbox');
	jQuery('textarea').addClass('textbox');
	jQuery('.placeholder').click(function(){
		jQuery(this).val("");
		jQuery(this).next().show();
	});
	var activefolder = jQuery('#sidelinksId #activefolder').val();
	jQuery('.folder'+activefolder).show();
	jQuery('.folder'+activefolder+'.isfolder .SidebarIcon').removeClass('iconarrowr').addClass('iconarrowd');	
});

function openTransMenu(){
	if(menuopen==false)
		jQuery('#transMenuId').animate({left:'+=205'},500);
	else
		jQuery('#transMenuId').animate({left:'-=205'},500);
	menuopen=!menuopen;
}

function UpdatePage(url){
	location.href=url;
}



function closeSubHeaders(){
	jQuery('#subheader1').hide();
	jQuery('#subheader2').hide();
	jQuery('#subheader3').hide();
	jQuery('#subheader4').hide();
	jQuery('#subheader5').hide();
	
}
function hidetips(){
	jQuery('#helpfultips').slideUp();
	jQuery('#showtips').show();
	new Ajax.Request('save/updatetips.php',{method:'post',parameters:'helpfultips=1'});
}
function showtips(){
	jQuery('#showtips').hide();
	jQuery('#helpfultips').slideDown();
	new Ajax.Request('save/updatetips.php',{method:'post',parameters:'helpfultips=0'});
}
function hideLeftPage(){
	if(jQuery('#leftnavpageinner').is(':visible')==true){
		jQuery('#leftnavpage').attr('style','width:100px');
		jQuery('#leftcolumnspacer').attr('width','100px');
		jQuery('#leftnavpageinner').hide();
		jQuery('#hidearrow').attr('src','pics/rightarrow.png');
		jQuery('.setupuser').hide();
	}else{
		showLeftPage();
	}
}
function showLeftPage(){
	jQuery('#leftnavpage').attr('style','width:250px');
	jQuery('#leftcolumnspacer').attr('width','250px');
	jQuery('#leftnavpageinner').show();
	jQuery('#hidearrow').attr('src','pics/leftarrow.png');
	jQuery('.setupuser').show();
}

function checkAchievements(filter){
	new Ajax.Request('xml/checkachievements.php',{asynchronous:true,method:'post',parameters:'filter='+filter,onComplete:checkAchievements_Complete});
	
}
function checkAchievements_Complete(e){
	var response = e.responseText;
	var showAchievement = false;
	if(response=="transcompleted"){
		showAchievement = true;
			jQuery('.achievementWrapper>div').html("Congratulations! You've just completed the achievement \"Daily Transactions\"");
	}
	else if(response=="gascompleted"){
		showAchievement = true;
			jQuery('.achievementWrapper>div').html("Congratulations! You've just completed the achievement \"Gas Mileage\"");
	}
	else if(response=="billscompleted"){
		showAchievement = true;
		jQuery('.achievementWrapper>div').html("Congratulations! You've just completed the achievement \"Pay Bill\"");
	}
	else if(response=="incomecompleted"){
		showAchievement = true;
		jQuery('.achievementWrapper>div').html("Congratulations! You've just completed the achievement \"Record Income\"");
	}
	else if(response=="newyearscompleted"){
		showAchievement = true;
		jQuery('.achievementWrapper>div').html("Congratulations! You've just completed the achievement \"New Years Resolution\"");
	}
	else if(response=="taskscompleted"){
		showAchievement = true;
		jQuery('.achievementWrapper>div').html("Congratulations! You've just completed the achievement \"Complete A Task\"");
	}
	if(showAchievement==true){
		jQuery('.achievementWrapper').show();
		jQuery('.achievementWrapper h1').html("Achievement Completed");
		jQuery('html').animate({scrollTop:0}, 'slow');//IE, FF
		jQuery('body').animate({scrollTop:0}, 'slow');
		jQuery('.achievementWrapper>div').append(", <a href=achievements.php>Click here</a> to view all achievements.");
	}
}
function scrollToTop(){
	jQuery('html').animate({scrollTop:150}, 'fast');//IE, FF
	jQuery('body').animate({scrollTop:150}, 'fast');
		
}

function closeAchievement(){
	jQuery('.achievementWrapper').hide();
}
function dismissRandomInfo(){
	new Ajax.Request('randominfo.php?redir=no');
	jQuery('#randominfo').hide();
}
function UpdateAdmin(val){
	location.href='save/adminupdate.php?type='+val;
}
function toggleLinks(folderid){
	jQuery('.folder'+folderid).toggle();
	jQuery('.folder'+folderid+'.isfolder .SidebarIcon').toggleClass('iconarrowr').toggleClass('iconarrowd').show();
	jQuery('.isfolder').show();
}
function closeMaintenance(){
	jQuery('#maintenanceId').hide();
	new Ajax.Request('save/maintenance.php?version=2');
	
}
function OpenGuide(){
	if(jQuery('.helpBody').is(':hidden')){
		jQuery('.rightHelp').css({'width':'650px','right':'50'});
		jQuery('.rightHelp').css({'display':'block'});
		jQuery('.helpBody').show();
		jQuery('.askquestion').show();
	}
	else{
		jQuery('.rightHelp').css({'display':'none'});
		jQuery('.helpBody').hide();
		jQuery('.askquestion').hide();
	}
	
}
function SubmitQuestion(){
	new Ajax.Request('save/newquestion.php',{method:'post',onComplete:SubmitQuestion_Complete,parameters:Form.serialize(SubmitQuestionForm)});
	jQuery('#question').val("");
}
function SubmitQuestion_Complete(){
	alert('Thank You!, Your question has been submitted. We\'ll be in contact soon with a response to your question.');
}

function PrinterOn(){
	jQuery('.setupWrapper').toggle();
	jQuery('#pagedesc').toggle();
	jQuery('.headerSection').toggle();
	jQuery('.tabNav').toggle();
	jQuery('#leftnavpage').toggle();
	jQuery('.footerRightColumn').toggle();
	jQuery('.subprenavigation').toggle();
	jQuery('#subnavcontainerId').toggle();
	jQuery('#CustomDates').toggle();
	jQuery('#hidearrow').toggle();
}
var menuopen = false;


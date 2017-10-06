function UpdateTrackU(track){
	if(track=="1"){
		Element.hide('occuranceIdU');
		Element.hide('budgetreccustomu');
		Element.show('weeklyoccuranceIdU');
		$('AmountId').disabled=false;
		$('weeklyoccuranceIdU')[0].selected=true;
		Element.show('weeklyStartDateIdU');
		Element.hide('monthlyStartDateIdU');
	}
	else
	{
		Element.hide('weeklyoccuranceIdU');
		Element.show('occuranceIdU');
		$('occuranceIdU')[1].selected=true;
		Element.hide('weeklyStartDateIdU');
		Element.show('monthlyStartDateIdU');
	}
}

function CheckGroup(val){
	if(val=="-1"){
		location.href="newbudgetgroup.php";
	}
	else
	{
		location.href="budget_updategroup.php?groupid="+val;
	}
}
function CheckAcct(val){
	location.href="budget_updateacctid.php?acctid="+val;
}
function UpdateStyle(val){

	if(val=="envelope"){
		location.href="envelope.php?default=1";
	}
	else if(val=='kids') {
		location.href='kidsbudget.php';
	}
	else
	{
		location.href="budget.php?default=1";
	}
}

function validateCharsUpdate(catname,subcatname,numberentered){
	
	if(subcatname==''){
		alert("Please enter a sub-category");
		return false;
	}
	
	if(catname==''){
		alert("Please enter a category");
		return false;
	}
	
	saveinfo_updatebudget();
	return false;
}
function saveinfo_updatebudget(){
	openajax();
	var months = "";
	if(document.updatesubfrm.occurance.value=="custom"){
		months+=document.updatesubfrm.jan.checked+"|"+document.updatesubfrm.jana.value+",";
		months+=document.updatesubfrm.feb.checked+"|"+document.updatesubfrm.feba.value+",";
		months+=document.updatesubfrm.mar.checked+"|"+document.updatesubfrm.mara.value+",";
		months+=document.updatesubfrm.apr.checked+"|"+document.updatesubfrm.apra.value+",";
		months+=document.updatesubfrm.may.checked+"|"+document.updatesubfrm.maya.value+",";
		months+=document.updatesubfrm.jun.checked+"|"+document.updatesubfrm.juna.value+",";
		months+=document.updatesubfrm.jul.checked+"|"+document.updatesubfrm.jula.value+",";
		months+=document.updatesubfrm.aug.checked+"|"+document.updatesubfrm.auga.value+",";
		months+=document.updatesubfrm.sep.checked+"|"+document.updatesubfrm.sepa.value+",";
		months+=document.updatesubfrm.oct.checked+"|"+document.updatesubfrm.octa.value+",";
		months+=document.updatesubfrm.nov.checked+"|"+document.updatesubfrm.nova.value+",";
		months+=document.updatesubfrm.dec.checked+"|"+document.updatesubfrm.deca.value+",";
		document.updatesubfrm.months.value=months;
	}
	
	new Ajax.Request('save/updatesubcategory_ajax.php',{asynchronous:true,method:'post',parameters:Form.serialize(document.updatesubfrm),onComplete:handleInfo_updatesubcategory});
	jQuery('#updatesubfrmId').hide();
	//http.send(sendvar);
}

function validateDeleteCat(catid,catName){
	delcheck = confirm("This will also delete all subcategories in this category. Are you sure want to proceed?");
	if(delcheck == true){
		urlpath = "save/deletecategory.php?catid=" + catid;
		document.location.href=urlpath;
	}
}

function cancelupdate(){
	updatesubcategory.style.display='none';
	mainsection.style.display='';
}
function gotocategories(){
	if(document.updatesubfrm.catid.length-1==document.updatesubfrm.catid.selectedIndex){
		location.href="categories.php";
	}
}


var currnum = 0;
function ThisWeek(){
	new Ajax.Updater('budgetmain','budget_ajax2.php',{asynchronous:true,parameters:'weeknum='+currnum,onComplete:closeajax});
	Element.show('loadingsmall');
}
function Twice(){
	new Ajax.Updater('budgetmain','budget_ajax2.php',{asynchronous:true,parameters:'twicenum='+currnum,onComplete:closeajax});
	Element.show('loadingsmall');
}
function NextTwice(){
	currnum++;
	new Ajax.Updater('budgetmain','budget_ajax2.php',{asynchronous:true,parameters:'twicenum='+currnum,onComplete:closeajax});
	Element.show('loadingsmall');
}
function LastTwice(){
	currnum--;
	new Ajax.Updater('budgetmain','budget_ajax2.php',{asynchronous:true,parameters:'twicenum='+currnum,onComplete:closeajax});
	Element.show('loadingsmall');
}
function NextWeek(){
	currnum++;
	new Ajax.Updater('budgetmain','budget_ajax2.php',{asynchronous:true,parameters:'weeknum='+currnum,onComplete:closeajax});
	Element.show('loadingsmall');
}
function LastWeek(){
	currnum--;
	new Ajax.Updater('budgetmain','budget_ajax2.php',{asynchronous:true,parameters:'weeknum='+currnum,onComplete:closeajax});
	Element.show('loadingsmall');
}

function updatebudget(x){
	scrollToTop();
	jQuery('#updatesubfrmId').show();
	$("budget_div").style.display='none';
	$("budgetmain").style.display='none';
	$("updatesubcategory").style.display='';
	$("updatesubcategory").innerHTML="<div class=loadingTxt align=center>Loading, please wait...</div>";
	if(window.XMLHttpRequest)
		http = new XMLHttpRequest();
	else if (window.ActiveXObject)
		http = new ActiveXObject("Microsoft.XMLHTTP");
	http.open("POST","budget_update.php",true);
	http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	http.onreadystatechange = handleInfo_updatebudget;
	sendvar="BUDGETID="+x;
	http.send(sendvar);
}
function handleInfo_updatebudget() {
  if(http.readyState == 1) {
	
  }
  if(http.readyState == 4) {
    var response = http.responseText;
	$("updatesubcategory").innerHTML=response;
	document.updatesubfrm.budget.focus();
	document.updatesubfrm.budget.select();
	jQuery('.datetest').datepicker({
		dateFormat:jQuery('#jdateFormat').val()
	});		

  }
}
function checkcategory(x){
	if(x==0){
		location.href="categories.php";
	}
}
function breaktie(subcatid){
	var getParameters = "subcatid="+subcatid;
	new Ajax.Request('save/breaktie.php', {asynchronous:true,method:'post',parameters:getParameters,onSuccess:breaktie_success});
	
}
function breaktie_success(t){
	location.href="budget.php";
}

function updatecustom(){
	if(budgetfrm.startdate.value!=""&&budgetfrm.enddate.value!=""){
		var locurl="budget.php?startdate="+budgetfrm.startdate.value+"&enddate="+budgetfrm.enddate.value;
		if($('printId')&&$('printId').value==1){
			locurl+="&print=1";
		}
		location.href=locurl;
	}
	else
	{
		alert("Please select a start and end date");
	}
}


function updateTotals(){
	divs = $('budgetmain').getElementsByTagName('div');
	for(i=0;i<divs.length;i++){
		if(divs[i].className=='topbudgetbar'){
			catid=divs[i].id.substring(6);
			buildtotal(catid);
		}
	}
	jQuery('.mediumTotal').html(jQuery('.largeTotal').html());
}
function checkbill(){
		if($('addtobill').checked==true){
			Element.show('addtobillmain');
		}
		else
		{
			Element.hide('addtobillmain');
		}
	}


function budgetdates(val){
	
	if(val=="custom"){
		Element.toggle('CustomDates');
	}
	else if(val=="yeartodate"){
		location.href="budget.php?yeartodate=1";
	}
	else if(val=="yeartodate2"){
		location.href="budget.php?yeartodate=2";
	}
	else if(val=="yeartodate3"){
		location.href="budget.php?yeartodate=3";
	}
	else if(val=="yeartodate4"){
		location.href="budget.php?yeartodate=4";
	}
	else if(val=="monthly"){
		location.href="budget.php";
	}
	else if(val=="weekly"){
		location.href="budget.php?weekly=1";
	}
	else if(val=="twice"){
		location.href="budget.php?twice=1";
	}
}

function CancelNewBudget(){
	Element.hide('budget_div');
}

function maincat(v){
	if(v=='hide'){
		Element.show('maincatshow');
		Element.hide('maincathide');
		new Ajax.Request('settings_save.php',{parameters:'hidemaincat=1'});
	}
	else
	{
		Element.hide('maincatshow');
		Element.show('maincathide');
		new Ajax.Request('settings_save.php',{parameters:'hidemaincat=0'});
	}
}

function UpdateWeekCount(startweek){
	var url = encodeURI("budget.php?weekly=1");
	location.href="settings_save.php?returnurl="+url+"&startweek="+startweek;
}

function getTransactions(subcatid,startdate,enddate){
	Element.toggle('transrow_'+subcatid);
	new Ajax.Updater('transactions_'+subcatid,'budget_transactions.php',{method:'post',parameters:'subcatid='+subcatid+'&startdate='+startdate+'&enddate='+enddate});
}
function UpdateBudgetDef(subcatid){
	var amount=$('amount_'+subcatid).value;
	new Ajax.Request('save/updatebudgetamount.php',{parameters:'subcatid='+subcatid+'&amount='+amount,onSuccess:function(){
			jQuery('.transAmount'+subcatid).css('color','blue');		
	}});
}
function UpdateType(type,subcatid){
	var getParameters = "type="+type+"&subcatid="+subcatid;
	new Ajax.Request('save/updatesubcattype.php', {asynchronous:true,method:'post',parameters:getParameters});
}
function updateEndDateU(){
	jQuery('#weeklyEndDateIdU').hide();
	jQuery('#monthlyEndDateIdU').hide();
	var tracktype = jQuery('#tracktypeid').val();
	var enddatechecked = jQuery('#doEndDateId').is(':checked');
	if(enddatechecked && tracktype==1)
		jQuery('#weeklyEndDateIdU').show();
	if(enddatechecked && tracktype!=1)
		jQuery('#monthlyEndDateIdU').show();
	
		
}
function showupdateforecast(){
	if(updateforecast.style.display==''){
		updateforecast.style.display='none';
	}
	else
	{
		updateforecast.style.display='';

	}
}
function confirmDelete(subcatid){
	var p =confirm("Would you also like to delete the category associated with this budget?");
	location.href='save/deletesubcategory.php?from=budget&subcatid='+subcatid+'&deletecat='+p;
}
function mouseoverrow(obj){
	jQuery(obj).find('.addtobill').show();
}
function mouseoutrow(obj){
	jQuery(obj).find('.addtobill').hide();
}
function addToBill(subcatid){
	scrollToTop();
	openajax();
	var params = 'budgetsubcatid='+subcatid;
	new Ajax.Request('xml/api_bills_new.php',{method:'post',parameters:params,onComplete:addToBill_Complete});
	
}
function addToExistingBill(subcatid){
	jQuery('#subcatid_bill').val(subcatid);
	jQuery( "#bills" ).dialog();
}
function UpdateBillCategory(billid){
	jQuery("#bills").dialog("close");
	jQuery('#mybills').val("0");
	var subcatid=jQuery('#subcatid_bill').val();
	var params = 'subcatid='+subcatid+'&billid='+billid;
	new Ajax.Request('save/bills_addsubcatid.php',{method:'post',parameters:params,onComplete:loadmain});
}
function addToBill_Complete(){
	loadmain();
}

function CheckCOType(cb,newfield){
	if(jQuery(cb).is(':checked')==true){
		jQuery('#'+newfield).show();
	}
	else{
		jQuery('#'+newfield).hide();		
	}
}

function addChecked(monthid,input){
	console.log(monthid);
	if(jQuery(input).val()=='' || jQuery(input).val()=='0'){
		jQuery('#'+monthid).prop( "checked", false );	
	}else{
		jQuery('#'+monthid).prop( "checked", true );	
	}
	
}

function selectall(){
	jQuery('#budgetmain table input[type=checkbox]').prop("checked",true);
}

function selectnone(){
	jQuery('#budgetmain table input[type=checkbox]').prop("checked",false);	
}


function checkForecast(val) {

	if(val==9) {
		jQuery('#forecastweekdayid').show();
	} else {
		jQuery('#forecastweekdayid').hide();
	}
}

function checkUpdateForecast(val) {

	if(val==9) {
		jQuery('#uforecastweekdayid').show();
	} else {
		jQuery('#uforecastweekdayid').hide();
	}
}

function updateSort() {
    var sortOrder = Array();
    jQuery('.budgetSelection').each(function(idx,item){
        var id = jQuery(item).attr('id').replace('col1_','');
        sortOrder.push(id);
    });
    new Ajax.Request('save/budget_sort.php',{asynchronous:true,method:'post',parameters:'sort='+sortOrder});
}
updateTotals();
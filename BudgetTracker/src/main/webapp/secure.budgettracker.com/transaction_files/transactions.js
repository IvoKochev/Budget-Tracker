var tID = document.getElementById("transactiontable");
var uID = document.getElementById("updatetransactions");

function cancelupdate(){
	tID.style.display='';
	uID.style.display='none';
}

function updatetrans(x){
	scrollToTop();
	closeTransactionToolbar();
	tID.style.display='none';
	uID.style.display='';
	uID.innerHTML="<div align=center class=loadingTxt>Loading, please wait...</div>";
	//if(navigator.platform.indexOf("Win")==-1){
		//location.href="updatetransactions.php?transid="+x;
	//}
	//else
	//{
		if(window.XMLHttpRequest)
			http = new XMLHttpRequest();
		else if (window.ActiveXObject)
			http = new ActiveXObject("Microsoft.XMLHTTP");
		http.open("POST","transactionsall_edit.php",true);
		http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http.onreadystatechange = handleInfo_transactionupdate;
		sendvar="TRANSID="+x;
		http.send(sendvar);
	//}
}


function edittestcheck(x){
	if(x=="check"){
		document.getElementById("editchecknumberval").style.display='';
	}
	else
	{
		document.getElementById("editchecknumberval").style.display='none';
	}
}

function transselectaccount(acctid){
	var acctname = $('transaccountId')[$('transaccountId').selectedIndex].text;

	if($('istransferID').value=="from"){

		$('transnameId').value=$('fromcompanyId').value+" to "+acctname+" Transfer";
	}
	else if($('istransferID').value=="to"){
		$('transnameId').value=acctname+" to "+$('tocompanyId').value+" Transfer";
	}
	removeDash();
	selectaccount(acctid);
}

function transselectaccountto(acctid){
    var acctname = $('transaccounttoId')[$('transaccounttoId').selectedIndex].text;

    if($('istransferID').value=="from"){

        $('transnameId').value= acctname+" to "+$('tocompanyId').value+" Transfer";
    }
    else if($('istransferID').value=="to"){
        $('transnameId').value=$('fromcompanyId').value+' to '+acctname+" Transfer";
    }
    removeDash();
    selectaccount(acctid);
}

function removeDash() {
    $('transnameId').value=$('transnameId').value.replace(' - Credit','');
    $('transnameId').value=$('transnameId').value.replace(' - Checking','');
    $('transnameId').value=$('transnameId').value.replace(' - Loan','');
    $('transnameId').value=$('transnameId').value.replace(' - Savings','');
}

function handleInfo_transacctinfo() {
	if(http.readyState == 1) {

	}
	if(http.readyState == 4) {
		var response = http.responseText;
		acctArray=response.split(",");
		checknum=acctArray[1];
		accttype=acctArray[0];
		if(accttype=="checking"){
			Element.show('transchecknumberid');
			if(document.updatetransform.checktest[2].selected==true){
				Element.show('editchecknumberval');
			}
			document.updatetransform.checknum.value=checknum;
		}
		else
		{
			document.updatetransform.checknum.value="";
			Element.hide('editchecknumberval');
			//Element.hide('transchecknumberid');
		}
	}
}




function clearTransaction(transid){
		//openajax();
		var clearid = "linkdisplaybegin"+transid;
		$(clearid).style.background="lightgreen";
		$(clearid).style.color="navy";
		$(clearid).innerHTML="C";
		$(clearid).href="javascript:void(reconcileTransaction('"+transid+"'));";
		Element.show('begincontainer'+transid);
		Element.hide('statusdisplayU'+transid);
		sendvar="TRANSID="+transid+"&status=3";
		new Ajax.Request('save/trans_clear.php', {asynchronous:true,method:'post',parameters:sendvar});
}
function reconcileTransaction(transid){
		//openajax();
		var clearid = "linkdisplaybegin"+transid;
		$(clearid).style.background="lightblue";
		$(clearid).style.color="navy";
		$(clearid).innerHTML="R";
		$(clearid).href="javascript:void(unreconcileTransaction('"+transid+"'));";
		Element.show('begincontainer'+transid);
		Element.hide('statusdisplayU'+transid);
		sendvar="TRANSID="+transid+"&status=2";
		new Ajax.Request('save/trans_clear.php', {asynchronous:true,method:'post',parameters:sendvar});
}
function unreconcileTransaction(transid){
		//openajax();
		var clearid = "linkdisplaybegin"+transid;
		$(clearid).style.background="orange";
		$(clearid).style.color="navy";
		$(clearid).innerHTML="U";
		$(clearid).href="javascript:void(clearTransaction('"+transid+"'));";
		Element.show('begincontainer'+transid);
		Element.hide('statusdisplayU'+transid);
		sendvar="TRANSID="+transid+"&status=1";
		new Ajax.Request('save/trans_clear.php', {asynchronous:true,method:'post',parameters:sendvar});
}

function voidTransaction(transid){
		//openajax();
		var clearid = "linkdisplaybegin"+transid;
		$(clearid).style.background="red";
		$(clearid).style.color="white";
		$(clearid).innerHTML="V";
		Element.show('begincontainer'+transid);
		Element.hide('statusdisplayU'+transid);
		sendvar="TRANSID="+transid+"&status=4";
		new Ajax.Request('save/trans_clear.php', {asynchronous:true,method:'post',parameters:sendvar});
}



function acctSettings(acctid,status){
		http.open("POST","trans_settings.php",true);
		http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http.onreadystatechange = handleInfo_acctSettings;
		sendvar="ACCTID="+acctid;
		if(status=="closed"){
			sendvar=sendvar+"&CLOSED=1";
		}
		http.send(sendvar);
}
function handleInfo_acctSettings() {
	if(http.readyState == 1) {

	}
	if(http.readyState == 4) {
		var response = http.responseText;
	}
}

function saveinfo_tupdate(){
		openajax();

		tID.style.display='';
		uID.style.display='none';

		document.getElementById('transactionupdate_div').innerHTML = "";
		http.open("POST","save/updatetransaction_ajax.php",true);
		http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http.onreadystatechange = handleInfo_tupdate;
		transname=document.updatetransform.transname.value.replace(/&/g,"%26");
		transdesc=document.updatetransform.description.value.replace(/&/g,"%26");
		sendvar="returnurl=none&TRANSNAME="+transname+"&DESCRIPTION="+transdesc+"&STATUS="+document.updatetransform.status.value+"&TAGS="+document.updatetransform.tags.value+"&TYPE="+document.updatetransform.type.value+"&ADDTO="+document.updatetransform.addto.value+"&TRANSACCOUNT="+document.updatetransform.transaccount.value+"&TRANSID="+document.updatetransform.transid.value+"&TRANSAMOUNT="+document.updatetransform.transamount.value+"&CHECKNUM="+document.updatetransform.checknum.value+"&CHECKTEST="+document.updatetransform.checktest.value+"&GALLONS="+document.updatetransform.gallons.value+"&BUDGETDATE="+document.updatetransform.budgetdate.value+"&TRANSDATE="+document.updatetransform.transdate.value+"&catid="+document.updatetransform.catid.value+"&selcategories_new="+document.updatetransform.selcategories_new.value+"&maincategoryid="+document.updatetransform.maincategoryid.value+"&colorid="+document.updatetransform.colorid.value+"&colorpayee="+document.updatetransform.colorpayee.checked+"&transfertofrom="+document.updatetransform.transfertofrom.value+"&transferaccount="+document.updatetransform.transferaccount.value+"&coupons="+document.updatetransform.coupons.value+"&invoiceid="+document.updatetransform.invoiceid.value+"&payeeid="+document.updatetransform.payeeid.value+"&notransfer="+document.updatetransform.notransfer.value;
		if($('transchecknumberid').style.display=='none'){
			sendvar=sendvar+"&SKIPCHECK=1";
		}
		if(document.updatetransform.transaccountto)
			sendvar = sendvar+"&TRANSACCOUNTTO="+document.updatetransform.transaccountto.value;
		http.send(sendvar);
}
function handleInfo_tupdate() {
	if(http.readyState == 1) {

	}
	if(http.readyState == 4) {
		var response = http.responseText;
		document.getElementById('transactionupdate_div').innerHTML = response;
		loadmain();
	}
}

// AJAX UPDATES
function validateupdate(){
	saveinfo_tupdate();
	return false;
}

function validatedelete(x){
	if(transfrm.deletetrans.value=="1"){
		testconfirm=confirm("Are you sure you want to delete the selected transactions?");
		if(testconfirm==true){
			return true;
		}
		else
		{
			return false;
		}
	}
	else if(transfrm.deletetrans.value=="2"){
		testconfirm=confirm("This will delete ALL transactions in your registry. Are you sure you want to continue?");
		if(testconfirm==true){
			return true;
		}
		else
		{
			return false;
		}
	}
	return true;
}

function DeleteTrans(transid){
	jQuery("#dialog-confirm-delete").data('transid',transid).dialog("open");
}

function DeleteTransaction_Success(e){
	//loadmain();
	jQuery('.transupdated').show();
}

function updatefilter(x){
	if(x=="1"){
		filterfrm.filterpayees.style.display='';
	}
	else
	{
		filterfrm.filterpayees.style.display='none';
	}
	if(x=="2"){
		filterfrm.filterstatus.style.display='';
	}
	else
	{
		filterfrm.filterstatus.style.display='none';
	}
	if(x=="3"){
		helptxt.innerHTML="<font color=darkblue>Please note: Amounts above in red are negative amounts and green are postive amounts. (ex. To see all transactions more than $50.00 you would enter less than $50.00)</font>";
		filterfrm.filteramountclause.style.display='';
		filterfrm.filteramount.style.display='';

	}
	else
	{
		helptxt.innerHTML="";
		filterfrm.filteramountclause.style.display='none';
		filterfrm.filteramount.style.display='none';
	}
	if(x=="4"){
		filterfrm.filtercategory.style.display='';
	}
	else
	{
		filterfrm.filtercategory.style.display='none';
	}
}

function validatefilter(){
	if(filterfrm.filter.value=="0"){
		alert('Please select a filter');
		return false;
	}
	else if(filterfrm.filter.value=="3"){
		if(filterfrm.filteramount.value==''){
			alert('Please enter an amount');
			return false;
		}

		if(filterfrm.filteramount.value.indexOf("$")!=-1){
			filterfrm.filteramount.value=filterfrm.filteramount.value.substring(1);
		}

	}
	else if(filterfrm.filter.value=="1"){
		if(filterfrm.filterpayees.value==0){
			alert('Please select a Payee');
			return false;
		}
	}
	else
	{
		return true;
	}
}

function updatetranscats(catid,transid){
	if(catid=="newcat"){
		var newcat = prompt("Please enter a new subcategory");
		url ='save/transactions_updatecategory.php';
		var params = "maincategoryid=General&transid="+transid+"&catid=0&selcategories_new="+newcat;
		new Ajax.Request(url,{asynchronous:true,method:'post',parameters:params,onComplete:updatecat_complete});
		$("catid_"+transid).length++;
		$("catid_"+transid)[$("catid_"+transid).length-1].text=newcat;
		$("catid_"+transid)[$("catid_"+transid).length-1].selected=true;
	}
	else if(catid=="splitcat"){
		location.href="updatetransactions.php?split=1&transid="+transid;
	}
	else
	{
		url ='save/transactions_updatecategory.php';
		var params = "transid="+transid+"&catid="+catid;
		new Ajax.Request(url,{asynchronous:true,method:'post',parameters:params});
	}
}
function updatecat_complete(e){
	var result=e.responseText;
	var transid=result.split("|")[0];
	var catid=result.split("|")[2];
	$("catid_"+transid)[$("catid_"+transid).length-1].value=catid;
}

function closeTransactionToolbar(){
	if($('transactionToolbarID')){
		$('transactionToolbarID').innerHTML="<div id=innerTransToolbar class=loadingTxt align=center>Loading, please wait...</div>";
		Element.hide('transtoolID');
	}
}

function updatecategory(transid,catid){
	closeTransactionToolbar();
	Element.hide('category_'+transid);
	if($('catgraph_'+transid))
		Element.hide('catgraph_'+transid);
	Element.show('dd_'+transid);
	$('dd_'+transid).innerHTML=$('catcontainer').innerHTML;
	jQuery('#dd_'+transid+' #catcontainerId').val(catid);

}
function updatecategory_complete(){
	$('upcatecategorybtn').focus();
}
function updatecategory_click(catidObj){
	var transid=$(catidObj).parentNode.id.substring(3);

	if($(catidObj).value=="splitaccount"){
		location.href="updatetransactions.php?split=1&transid="+transid;
	}
	else if($(catidObj).value=="addcategory"){
		Element.show('maincategoryid');
		Element.show('selcategories_new');
		Element.show('selcategoriessubnameid');
		Element.hide('catcontainerId');
		Element.show('btncategories_new');
		$('catcontainerId')[0].selected=true;
		$('selcategories_new').focus();

	}
	else
	{
		var catid=$(catidObj).value;
		jQuery('#category_'+transid).attr('href','javascript:void(updatecategory('+transid+','+catid+'));');
		var applytoval = "0";
		var applyto=jQuery(catidObj).parent().find('#applycat').attr('checked');
		var applytrans=jQuery(catidObj).parent().find('#applytrans').attr('checked');
		if(applytrans!=undefined)
			applytoval="2";
		else if(applyto==undefined)
			applytoval = "1";
		var url = "save/transactions_updatecategory.php";
		var params = "catid="+catid+"&transid="+transid+'&applyto='+applytoval;
		new Ajax.Request(url,{asynchronous:true,method:'post',parameters:params,onComplete:updatecategory_click_success});
		$('category_'+transid).innerHTML=$(catidObj)[$(catidObj).selectedIndex].text.replace(/^\s+|\s+$/g,"");
		Element.show('category_'+transid);
		if($('catgraph_'+transid))
			Element.show('catgraph_'+transid);
		$('dd_'+transid).innerHTML="";

		jQuery('#dd_'+transid+' #catcontainerId').attr('href','javascript:void(updatecategory('+transid+','+catid+'));');
		Element.hide('dd_'+transid);
	}
}
function updatecategory_click_success(e){
	var response = e.responseText;
	responseArr = response.split("|");
	if(responseArr[4]=="2"){
		//do nothing
	}
	else if(responseArr[4]=="1"){
		jQuery('.payeeid'+responseArr[2]).parent().parent().find('.catidTrigger').html(responseArr[3]);
	}else{
		jQuery('.payeeid'+responseArr[2]).parent().parent().find('.catid0').html(responseArr[3]);
		jQuery('.payeeid'+responseArr[2]).parent().parent().find('.catid0').removeClass('catid0');
	}
}
function updatecategory_close(){
	Element.hide('updatecategoryID');
}
function updatebalanceAmount(acctid,amount){
	Element.show('balanceID');
	//$('monthviewID').focus();
	var url = "transactionsbalance.php";
	var container = "balanceID";
	var getParameters = "acctid="+acctid+'&amount='+amount;
	new Ajax.Updater(container, url, {asynchronous:true,method:'post',parameters:getParameters,onComplete:updatebalance_success});
}
function updatebalance(acctid){
	updatebalanceAmount(acctid,'0');
}
function updatebalance_success(){
	balancefrm.amount.focus();
	jQuery('.datetest').datepicker({
		dateFormat:jQuery('#jdateFormat').val(),
	});
}

function balanceamount(){

	var amount = balancefrm.amount.value;
	var acctid = balancefrm.acctid.value;
	var unreconciled = balancefrm.unreconciled.value;
	var asofdate = balancefrm.asofdate.value;
	var noenddate = balancefrm.noenddate.checked;
	var url = "transactionsbalance_amount.php";
	var container = "balanceID";
	var getParameters = "acctid="+acctid+"&amount="+amount+"&unreconciled="+unreconciled+'&asofdate='+asofdate+'&noenddate='+noenddate;
	new Ajax.Updater(container, url, {asynchronous:true,method:'post',parameters:getParameters});
	return false;
}
function balanceback(acctid,amount){
	updatebalanceAmount(acctid,amount);
}
function balanceleftover(opening){
	var leftover = balancefrm.leftover.value;
	var acctid = balancefrm.acctid.value;

	var url = "transactionsbalance_save.php";
	var container = "messageID";
	var getParameters = "acctid="+acctid+"&leftover="+leftover;
	if(opening=='opening')
		getParameters+='&opening=1';
	new Ajax.Updater(container, url, {asynchronous:true,method:'post',parameters:getParameters});
	$('balanceID').innerHTML="";
	Element.hide('balanceID');
	loadmain();
}
function balancecancel(){
	$('balanceID').innerHTML="";
	Element.hide('balanceID');
}

function UpdateRound(rounded,acctid){
	openajax();
	var url = "save/updaterounded.php";
	var getParameters = "rounded="+rounded+"&acctid="+acctid;
	new Ajax.Request(url, {asynchronous:true,method:'post',parameters:getParameters});
	p=setTimeout("loadmain()",2000);
}

function selecttrans(acctid){
	CheckAll(acctid);
}

function CheckAll(acctid)
{
	count = document.transfrm.elements.length;
    for (i=0; i < count; i++)
	{
		currentID= document.transfrm.elements[i].id;
		if(currentID=="acctid"+acctid){
		    if(document.transfrm.elements[i].checked == 1)
		    	{document.transfrm.elements[i].checked = 0; }
		    else {document.transfrm.elements[i].checked = 1;}
		}
	}
}
function UncheckAll(){
	count = document.frm.elements.length;
    for (i=0; i < count; i++)
	{
    if(document.frm.elements[i].checked == 1)
    	{document.frm.elements[i].checked = 0; }
    else {document.frm.elements[i].checked = 1;}
	}
}

function importtrans(transid,accept){
	var getParameters = "transid="+transid+"&import="+accept;
	var options = {asynchronous:true,method:'post',parameters:getParameters};
	new Ajax.Request("save/updateimporttrans.php", options);
	if(accept==1){
		$('import_'+transid).innerHTML="<b>accepted</b>";
	}
	else
	{
		loadmain();
	}
}

function UpdateTransAmount(transid,amount){
	var newamount=prompt("Please enter a new transaction amount",amount);

	if(newamount&&newamount!=""&&newamount!=amount){
		new Ajax.Request('save/transamountupdate.php',{asynchronous:'true',method:'post',parameters:'transid='+escape(transid)+'&amount='+newamount,onComplete:UpdateTransAmount_Complete});
		openajax();
	}

}
function UpdateTransAmount_Complete(e){
	var acctid = e.responseText;
	loadmain();
	//new Ajax.Updater('col1_'+acctid,'transactions_account.php',{asynchronous:true,method:'post',onComplete:updateAccount_Complete});

}
function updateAccount_Complete(){
	closeajax();
}

function NewFile(transid){
	addfilefrm.style.display='';
	$('file_transactionId').value=transid;
	$('fileNotesId').focus();
}

var btTrans = {
	updateMods: function (){
		var params = escape(Sortable.serialize("col1"));
		var options = {method:'post',asynchronous:'true',parameters:'modString='+params,onSuccess:btTrans.updateMod_success};
		new Ajax.Request('save/updateaccountorder.php',options);
	},
	updateMod_success: function(e){
		//alert(e.responseText);
	},
	createSortable: function (){
		var options={tag:'div',treeTag:'div',dropOnEmpty:true,handle:'handle',containment:["col1"],onUpdate:btTrans.updateMods};
		Sortable.create("col1",options);
	}
};

function OpenStatus(transid){
	Element.show('statusdisplayU'+transid);
	Element.hide('begincontainer'+transid);
}
function CloseStatus(transid){
	Element.hide('statusdisplayU'+transid);
	Element.show('begincontainer'+transid);
}
function UpdateTransRowOver(rowObj){
	var tds = rowObj.getElementsByTagName('td');
	jQuery(rowObj).find(".editrenameLinks").show();
	for(i=0;i<tds.length;i++){
		tds[i].className+="_over";
	}
}
function UpdateTransRowOut(rowObj,GetClass){
	var tds = rowObj.getElementsByTagName('td');
	jQuery(rowObj).find(".editrenameLinks").hide();
	for(i=0;i<tds.length;i++){
		tds[i].className = tds[i].className.split("_over")[0];
	}
}
function RenamePayee(transid){
	if($('payeeinput'+transid).style.display!='none'){
		jQuery('.payeeinput'+transid).hide();
		Element.show('payeetxt'+transid);
	}
	else
	{
		jQuery('.payeeinput'+transid).show();
		Element.hide('payeetxt'+transid);
		$('payeeinput'+transid).select();

	}

}

function addTag(transid){
	var td = jQuery('#tagcol_'+transid);

	var tagname = prompt("Please enter a name for your tag");
	if(tagname){
		jQuery(td).prepend("<a href=search.php?s=ttag:"+tagname+">"+tagname+"</a>,");
		jQuery.ajax({
			type:'post',
			url:'save/addtag.php',
			data:'transid='+transid+'&tagname='+tagname
		});
	}
}

function CopyTransaction(transid,split,transfer){
	if(transfer==1){
		location.href='transferaccounts.php?copy=1&transid='+transid;
	}
	else if(split!='')
		location.href='splittransaction.php?transid='+transid;
	else
		location.href='newtransaction.php?transid='+transid;
}

function SplitTransaction(transid,amount){
	if(amount < 0)
		amount *= -1;
	jQuery("#dialog-splitform").dialog("open");
	jQuery('#split_amount').val(amount);
	jQuery('#split_transid').val(transid);
	jQuery('#splitTotalAmount').html(eval(amount).toFixed(2));
	jQuery('#splitTotalLeftover').html(eval(amount).toFixed(2));

}

function UpdateSplitLeftOver(input){
	if(isNaN(jQuery(input).val())){
		jQuery(input).val('');
		alert("Please enter numbers and decimals only");

	}

	var amount1 = eval(jQuery('#split_amount1').val());
	var amount2 = eval(jQuery('#split_amount2').val());
	var amount3 = eval(jQuery('#split_amount3').val());
	var amount4 = eval(jQuery('#split_amount4').val());
	var amount5 = eval(jQuery('#split_amount5').val());
	if(!amount1)
		amount1= 0;
	if(!amount2)
		amount2= 0;
	if(!amount3)
		amount3= 0;
	if(!amount4)
		amount4= 0;
	if(!amount5)
		amount5= 0;



	var enteredTotal = amount1+amount2+amount3+amount4+amount5;
	var total = eval(jQuery('#split_amount').val());
	if(total < 0)
		total *= -1;

	var leftover = total - enteredTotal;
	if(leftover==-0)
		leftover=0;
	jQuery('#split_leftover').html(leftover);
	jQuery('#splitTotalLeftover').html(leftover.toFixed(2));
}

function SavePayeeName(transid,payeeid){
	var payeename=jQuery('#payeeinput'+transid).val();
	if(jQuery('#payeetxt'+transid).html()!=payeename){
		var allpayees = jQuery('#payeealltrans'+transid).is(':checked');
		var all = '0';
		if(allpayees){
			all='1';
		}
		jQuery.ajax({
			type:'post',
			url:'save/updatepayee.php',
			data:'transid='+transid+'&payeename='+payeename+'&all='+all
		});

		if(all=='1'){
			jQuery('.payeeid'+payeeid).html(payeename);
			jQuery('.origpayeeid'+payeeid).val(payeename);
		}
		else
			jQuery('#payeetxt'+transid).html(payeename);
	}
	jQuery('.payeeinput'+transid).hide();
	Element.show('payeetxt'+transid);

}

function colorUpdate(colorid){
	if(colorid!=""){
		Element.show('colorPayeeId');
	}
	else
	{
		Element.hide('colorPayeeId');
	}
}

function paginateTrans(acctid,pagenum){
	if(pagenum<1){
		pagenum=1;
	}
	tmpacctid=acctid;
	Element.show('footer_'+acctid);
	if(acctid==0){
		acctid="cash";
	}

	new Ajax.Updater('col1_'+tmpacctid,'transactions_account.php',{asynchronous:true,method:'post',parameters:'acctid='+acctid+'&pagenum='+pagenum,onComplete:pagenateTrans_Complete});
}
function pagenateTrans_Complete(){
	Element.hide('footer_'+tmpacctid);
}

function approveall(acctid){
	if(acctid){
		app = confirm("This will approve all transactions under this account. Are you sure you want to continue?");
		if(app==true){
			location.href="save/approvetransactions.php?acctid="+acctid;
		}
	}
}

function deleteall(acctid){
	if(acctid){
		del = confirm("This will delete all transactions under this account. Are you sure you want to continue?");
		if(del==true){
			location.href="save/deletetransactions.php?acctid="+acctid;
		}
	}
}

function CheckSearch(){

}

function UpdateSearch(val){
	if(val=='monthly'){
		jQuery('.subprenavigation').show();
	}else{
		jQuery('.subprenavigation').hide();
	}
	if(val=="date"){
		Element.hide('keywords');
		Element.show('customdates');
		Element.show('searaccounts');
	}
	else if(val=="keyword")
	{
		Element.show('keywords');
		Element.hide('searaccounts');
		Element.hide('customdates');
		if(jQuery('#search_mid1'))
			jQuery('#search_mid1').hide();
		if(jQuery('#search_mid2'))
			jQuery('#search_mid2').hide();
		if(jQuery('#search_mid3'))
			jQuery('#search_mid3').hide();
	}
	else
	{
		Element.hide('keywords');
		Element.hide('customdates');
	}
}

function moreOptions() {
	if(jQuery('#search_mid1'))
		jQuery('#search_mid1').show();
	if(jQuery('#search_mid2'))
		jQuery('#search_mid2').show();
	if(jQuery('#search_mid3'))
		jQuery('#search_mid3').show();
	if(jQuery('#search_mid4'))
		jQuery('#search_mid4').show();

	jQuery('#moreoptions').hide();
}

function UpdatePagination(val){
	location.href="settings_save.php?returnurl=transactionsall.php&transpaginate="+val;
}

function addnewcategory_save(catidObj){
	var transid=$(catidObj).parentNode.id.substring(3);
	var catid=$('maincategoryid').value;
	var catname=$('selcategories_new').value;
	var url = "save/transactions_updatecategory.php";
	var params = "catid="+catid+"&catname="+catname+"&transid="+transid;
	new Ajax.Request(url,{asynchronous:true,method:'post',parameters:params,onComplete:updatecategory_click_success});
	$('category_'+transid).innerHTML=catname;
	Element.show('category_'+transid);
	if($('catgraph_'+transid))
		Element.show('catgraph_'+transid);
	$('dd_'+transid).innerHTML="";
	Element.hide('dd_'+transid);
}
function updateDate(transid){
	Element.show('dateinput'+transid);
	Element.show('datebtn'+transid);
	Element.hide('datetxt'+transid);

}
function updateDateTxt(transid){
	var dateval  = $('dateinput'+transid).value;
	var params='date='+dateval+'&transid='+transid;
	new Ajax.Request('save/updatetransdate.php',{asynchronous:true,method:'post',parameters:params,onComplete:updateDateTxt_Complete});
	Element.hide('dateinput'+transid);
	Element.hide('datebtn'+transid);
	Element.show('datetxt'+transid);
}
function updateDateTxt_Complete(e){
	var response=e.responseText;
	var tdate=response.split("|")[1];
	var transid=response.split("|")[0];
	if(response=="error"){
		alert("There was an error saving your date. Please try again.");
	}
	else
	{
		$('datetxt'+transid).innerHTML='<font color=blue>'+tdate+'</font>';
	}
}
function MoveAccount(acctid){
	transfrm.moveacctid.value=acctid;
	jQuery('#moveacctsubmit').click();
}

function ApplyCategory(catid){
	transfrm.applycatid.value=catid;
	jQuery('#applytocatsubmit').click();
}

function typeChanged(val){
	if(val=='transfer'){
		Element.show('transferaccountId');
		Element.show('transferexistId');
		Element.show('transfertofromId');
	}else{
		Element.hide('transferaccountId');
		Element.hide('transferexistId');
		Element.hide('transfertofromId');
	}
}
function transferSelected(){
	$('transferLinkId').hide();
	typeChanged('transfer');
	jQuery('#ttypeId').val('transfer');
}

function checkfilteramount(filter){
	if(filter!="" && filter!='despositonly' && filter != 'withdrawalonly' && filter != 'transfersonly')
		jQuery('.transactionfilterTrigger').show();
	else
		jQuery('.transactionfilterTrigger').hide();

}

jQuery(document).ready(function($){
	jQuery("#dialog-confirm-delete").dialog({
      resizable: false,
      height:140,
      autoOpen:false,
      modal: true,
      buttons: {
        "Delete Transaction": function() {
	        var transid = $("#dialog-confirm-delete").data('transid');
	        var url = "save/deletetransaction.php";
			var getParameters = "noredirect=1&transactionid="+transid;
			new Ajax.Request(url, {asynchronous:true,method:'get',parameters:getParameters,onSuccess:DeleteTransaction_Success});
			var row=jQuery('#transrow'+transid);
			jQuery(row).hide();
			jQuery( this ).dialog( "close" );
        },
        Cancel: function() {
          jQuery( this ).dialog( "close" );
        }
      }
    });

	jQuery( "#dialog-splitform" ).dialog({
	  autoOpen: false,
	  height: 400,
	  width: 550,
	  modal: true,
	  buttons: {
	    "Save Split Transaction": function() {
			if(Number(jQuery('#splitTotalLeftover').html())==0){
				var amount1 = $('#split_amount1').val();
				var amount2 = $('#split_amount2').val();
				var amount3 = $('#split_amount3').val();
				var amount4 = $('#split_amount4').val();
				var amount5 = $('#split_amount5').val();
				var cat1 = $('#split_category1').find(":selected").text();
				var cat2 = $('#split_category2').find(":selected").text();
				var cat3 = $('#split_category3').find(":selected").text();
				var cat4 = $('#split_category4').find(":selected").text();
				var cat5 = $('#split_category5').find(":selected").text();
				var memo1 = $('#split_memo1').val();
				var memo2 = $('#split_memo2').val();
				var memo3 = $('#split_memo3').val();
				var memo4 = $('#split_memo4').val();
				var memo5 = $('#split_memo5').val();

				var params = 'amount1='+$('#split_amount1').val() + '&amount2='+$('#split_amount2').val() + '&amount3=' + $('#split_amount3').val() + '&amount4=' + $('#split_amount4').val() + '&amount5='+ $('#split_amount5') + '&catid1=' + $('#split_category1').val() + '&catid2=' + $('#split_category2').val() + '&catid3=' + $('#split_category3').val() + '&catid4=' + $('#split_category4').val() + '&catid5=' + $('#split_category5').val() + '&transid=' + $('#split_transid').val()+'&memo1='+$('#split_memo1').val()+'&memo2='+$('#split_memo2').val()+'&memo3='+$('#split_memo3').val()+'&memo4='+$('#split_memo4').val()+'&memo5='+$('#split_memo5').val();
				new Ajax.Request('save/transactions_split.php',{asynchronous:true,method:'post',parameters:params});
				$( "#dialog-splitform" ).dialog("close");
				$('#splitboxcontainer_'+$('#split_transid').val()).show();
				var splitTxt = "";
				if(cat1=='-- select category --')
					cat1='';
				if(cat2=='-- select category --')
					cat2='';
				if(cat3=='-- select category --')
					cat3='';
				if(cat4=='-- select category --')
					cat4='';
				if(cat5=='-- select category --')
					cat5='';

				if(amount1 > 0)
					splitTxt += amount1 + ' ' + cat1 + '<br><i>' + memo1 + '</i><hr>';
				if(amount2 > 0)
					splitTxt += amount2 + ' ' + cat2 + '<br><i>' + memo2 + '</i><hr>';
				if(amount3 > 0)
					splitTxt += amount3 + ' ' + cat3 + '<br><i>' + memo3 + '</i><hr>';
				if(amount4 > 0)
					splitTxt += amount4 + ' ' + cat4 + '<br><i>' + memo4 + '</i><hr>';
				if(amount5 > 0)
					splitTxt += amount5 + ' ' + cat5 + '<br><i>' + memo5 + '</i><hr>';
				var transid = $('#split_transid').val();
				$('#splitbox_'+transid).html('<b>Split Transaction</b><hr>'+splitTxt);
				$('#editlnk_'+transid).attr('href','updatetransactions.php?transid='+transid+'&split=1');
				$('#splitlnk_'+transid).hide();
			}else{
				alert("Your total left over must equal 0.00");
			}
	    }
	  }
	});

});
function promptFileSubscription(){
	if(confirm("A subscription is required to upload receipts. Click 'Ok' to go there now.")){
		location.href='subscription.php';
	}
}
function NoTransfer(){
	jQuery('#transferTxtId').hide();
	jQuery('#notransferid').val("1");
}

function PostOnly(){
	jQuery('#filterstatusid').val('5');
	document.transfrm2.submit();
}

function checkAsOfDate() {
	if(jQuery('#noenddateid').is(':checked')) {
		jQuery('#asofdateid').hide();
	}
	else{
		jQuery('#asofdateid').show();
	}
}

function switchAccount(acctid) {
	if(acctid!='')
		location.href='transactionsall.php?acctid='+acctid;
}

var test;
var CurrentTransId;
var tmpacctid;
loadmain();


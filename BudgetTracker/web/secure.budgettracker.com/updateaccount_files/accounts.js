

function UpdateAddBtn(){
	if($('newaccountID').style.display=='none'){
		$('subnavnewentryId').className="subnavnewentry";
	}
	else
	{
		$('subnavnewentryId').className="subnavnewentryon";
	}
}

function CancelNewAccount(){
	Element.hide('newaccountID');
}

function UpdateAcctStatus(acctid,active){
	$('messageId').innerHTML="Saving, please wait...";
	new Ajax.Request('xml/json_accountstatus.php',{asynchronous:true,method:'post',parameters:'active='+active+'&acctid='+acctid,onComplete:function(e){
			cancelupdate();
			getaccounts();		
		}
	});
}


function clearmsg(){
	$('messageId').innerHTML="";
}

function UpdateTotalBalance(acctid,amount){
	var balance = prompt("Enter your current balance. \nYour opening balance will be adjusted.");
	if(balance){
		var url = "save/updateaccountbalance.php";
		var getParameters = "acctid="+acctid+"&current_balance="+amount+"&new_balance="+balance;
		new Ajax.Request(url, {asynchronous:true,method:'post',parameters:getParameters,onComplete:getaccounts});
	}	
}

function updatebalance(acctid,asofdate){
	Element.show('balanceID');
	//$('monthviewID').focus();
	var url = "transactionsbalance.php";
	var container = "balanceID";
	var getParameters = "acctid="+acctid+'&asofdate='+asofdate;
	new Ajax.Updater(container, url, {asynchronous:true,method:'post',parameters:getParameters,onComplete:updatebalance_success});
}
function updatebalance_success(){
	balancefrm.amount.focus();
	getaccounts();
	checktype();
	
}
function balanceamount(){
	var amount = balancefrm.amount.value;
	var acctid = balancefrm.acctid.value;
	var asofdate = balancefrm.asofdate.value;
	var unreconciled = balancefrm.unreconciled.value;
	var url = "transactionsbalance_amount.php";
	var container = "balanceID";
	var getParameters = "acctid="+acctid+"&amount="+amount+"&unreconciled="+unreconciled+'&asofdate='+asofdate;
	new Ajax.Updater(container, url, {asynchronous:true,method:'post',parameters:getParameters});
	return false;
}
function balanceleftover(){
	var leftover = balancefrm.leftover.value;
	var acctid = balancefrm.acctid.value;
	var url = "transactionsbalance_save.php";
	var container = "messageID";
	var getParameters = "acctid="+acctid+"&leftover="+leftover;
	new Ajax.Updater(container, url, {asynchronous:true,method:'post',parameters:getParameters});
	$('balanceID').innerHTML="";
	Element.hide('balanceID');
	getaccounts();
	checktype();
}
function balancecancel(){
	$('balanceID').innerHTML="";
	Element.hide('balanceID');
}
function checkAsOfDate() {
    if(jQuery('#noenddateid').is(':checked')) {
        jQuery('#asofdateid').hide();
    }
    else{
        jQuery('#asofdateid').show();
    }
}
function UpdateAcctCurrency(val){
	if(val=='new'){
		Element.show('exchangerow');
		Element.show('newcurrencyId');
		$('excurr').innerHTML=$('newcurrencyId').value;
		$('newcurrencyId').focus();
	}
	else if(val==''){
		Element.hide('newcurrencyId');
		Element.hide('exchangerow');
	}
	else{
		Element.show('exchangerow');
		$('excurr').innerHTML=$('acctcurrencyid')[$('acctcurrencyid').selectedIndex].text;
		Element.hide('newcurrencyId');
	}
}

function UpdateAcctCurrencyNew(val){
	if(val=='new'){
		Element.show('exchangerownew');
		Element.show('newcurrencyIdnew');
		$('newcurrencyIdnew').focus();
	}
	else if(val==''){
		Element.hide('newcurrencyIdnew');
		Element.hide('exchangerownew');
	}
	else{
		Element.show('exchangerownew');
		$('excurrnew').innerHTML=$('acctcurrencyidnew')[$('acctcurrencyidnew').selectedIndex].text;
		Element.hide('newcurrencyIdnew');
	}
}

function UpdateStockSubTotals(acctid){
	jQuery('.stockAcctSubTotal'+acctid).html(jQuery('.stockacct'+acctid).html());
}

function OpenStockRow(acctid){
	jQuery('.stockrow'+acctid).toggle();
}
function UpdateLimitActive(){
	if(jQuery('#creditlimit_active:checked').length>0){
		jQuery('#limitdiv').show();
	}else{
		jQuery('#limitdiv').hide();
	}
}
function Edit_UpdateLimitActive(){
	if(jQuery('#creditlimitu_active:checked').length>0){
		jQuery('#limitdivu').show();
	}else{
		jQuery('#limitdivu').hide();
	}
}
function CheckCreditType(val){
	if(val==3){
		jQuery('#creditlimit_active').prop('checked',false);
	}else{
		jQuery('#creditlimit_active').prop('checked',true);
	}
	UpdateLimitActive();
}
function CheckCreditTypeU(val){
	
	if(val==3){
		jQuery('#creditlimitu_active').prop('checked',false);
	}else{
		jQuery('#creditlimitu_active').prop('checked',true);
	}
	Edit_UpdateLimitActive();
}
function deleteall(acctid){
	if(acctid){
		del = confirm("This will delete all transactions under this account. Are you sure you want to continue?");
		if(del==true){
			location.href="save/deletetransactions.php?acctid="+acctid;
		}
	}
}
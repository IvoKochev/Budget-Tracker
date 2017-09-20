
budgettotal=0;
incometotal=0;
var budgettotal=0;
var totalsavings=0;
var expensecount=0;

function updateincome(){
	if(incomeform.netincome.value!=""){
		incometotal=eval(incomeform.netincome.value);
		incometotal=incometotal*100;
		incometotal=Math.round(incometotal);
		incometotal=incometotal/100;
	}
	else
	{
		incometotal=0;
	}
	if(incomeform.otherincome.value!=""){
		othertotal=eval(incomeform.otherincome.value);
		othertotal=othertotal*100;
		othertotal=Math.round(othertotal);
		othertotal=othertotal/100;
	}
	else
	{
		othertotal=0;
	}
	
	if(document.getElementById("totalvalue").innerText!=""){
		budgettotal=eval(document.getElementById("totalvalue").innerText);
	}
	else
	{
		budgettotal=0;
	}

	if(!budgettotal){
		budgettotal=0;
	}
	totalsavings=incometotal+othertotal-budgettotal;
	totalsavings=totalsavings*100;
	totalsavings=Math.round(totalsavings);
	totalsavings=totalsavings/100;
	document.getElementById("totalsavings").innerText=totalsavings;
	document.getElementById("totalincome").innerText=incometotal+othertotal;
	
}
function addbudget(){
	expensecount=expensecount+1;
	if(budgetform.budgetname.value!=""){
		budgetname=budgetform.budgetname.value;
		 budgetform.budgetname.value="";
	}
	else
	{
		budgetname=budgetform.expenses.value;
	}
	budgetamount=budgetform.budgetamount.value;
	budgethtml=document.getElementById("budgetlist")
	budgethtml.innerHTML=budgethtml.innerHTML+"<div style=\"display:''\" id=expense"+expensecount+"><span class=budgetname>"+budgetname+"</span><span class=budgetamount>"+"$"+budgetamount+"</span><a href=\"javascript:removeexpense("+budgetamount+",expense"+expensecount+")\">remove</a></div>";
	budgettotal=budgettotal+eval(budgetform.budgetamount.value)	;
	budgettotal=budgettotal*100;
	budgettotal=Math.round(budgettotal);
	budgettotal=budgettotal/100;
	document.getElementById("totalvalue").innerText=budgettotal;
	budgetform.budgetamount.value="";
	budgetform.expenses.focus();
	updateincome();
}
function removeexpense(a,b){
	b.style.display="none";
	budgettotal=budgettotal-a;
	document.getElementById("totalvalue").innerText=budgettotal;
	updateincome();
}
function additem(){
	
}
function validateamount(){
	validatenumber=budgetform.budgetamount.value;
	if(validatenumber.substring(0,1)=="$"){
		validatenumber=validatenumber.substring(1);
	}
	validatenumber=validatenumber*100;
	validatenumber=Math.round(validatenumber);
	validatenumber=validatenumber/100;
	if(isNaN(validatenumber)){
		alert("Please enter a valid enter.");
		budgetform.budgetamount.focus();
		budgetform.budgetamount.select();
	}
	else
	{
		budgetform.budgetamount.value=validatenumber;
		addbudget();
	}
}


// ************ MATH *************
var equation="plus";
var resetnum=0;
function addnum(x){
	if(formx.a.value=="0"){
		formx.a.value="";
	}
	if(x=='-'){
		formx.a.value=eval(formx.a.value)*-1;
	}
	else if(x=='C'){
		formx.a.value=0;
		formx.savenum.value=0;
		equation="plus";
	}
	else if(resetnum==0){
		formx.a.value=formx.a.value+x;
	}
	else
	{
		formx.a.value="";
		formx.a.value=formx.a.value+x;
	}
	resetnum=0;
}
function updateequals(x){
	if(isNaN(formx.a.value)){
		alert("Invalid Number Entered");
	}
	if(x=="percent"){
		formx.a.value=eval(formx.savenum.value)*(eval(formx.a.value)*.01);
	}
	else if(equation=="plus"){
		formx.a.value=eval(formx.savenum.value)+eval(formx.a.value);
	}
	else if(equation=="minus"){
		formx.a.value=eval(formx.savenum.value)-eval(formx.a.value);
	}
	else if(equation=="times"){
		formx.a.value=eval(formx.savenum.value)*eval(formx.a.value);
	}
	else if(equation=="div"){
		formx.a.value=eval(formx.savenum.value)/eval(formx.a.value);
	}
	else if(equation=="equals"){
		formx.a.value=eval(formx.a.value);
	}
	
	formx.a.value=formx.a.value*100;
	if(formx.a.value.indexOf("9999")!=-1||formx.a.value.indexOf("0000")!=-1){
		formx.a.value=Math.round(formx.a.value);
	}
	formx.a.value=formx.a.value/100;
	formx.savenum.value=formx.a.value;
	
	equation=x;
	resetnum=1;
}

function getMortgage(){
	var I = jQuery('#minterest').val();
	var P = jQuery('#mamount').val();
	var N = jQuery('#myears').val();
	var data = {"annualInterest":I,"numberOfYears":N,"mortgageAmount":P};
	new Ajax.Request('/calculatorshub/api/mortgage.php',{asynchronous:true,method:'post',parameters:'data='+JSON.stringify(data),onComplete:function(response){
		var json = jQuery.parseJSON(response.responseText);
		jQuery('#totalMortageId').html(json.summaries[0]);	
	}});
	
	return false;
}

function getAuto(){
	var tradein = jQuery('#adown').val();
	var I = jQuery('#ainterest').val() / 100 / 12;
	var P = jQuery('#aamount').val().replace(',','').replace('\'','') - tradein;
	var N = jQuery('#ayears').val() * 12;
	var total = monthlyPayment(P, N, I);
	jQuery('#totalAutoId').html('Your auto loan will be <span class=blueTxt>$'+ total.toFixed(2) + '</span> per month');
	return false;
}

function getStudent(){
	
	var I = jQuery('#sinterest').val() / 100 / 12;
	var P = jQuery('#samount').val().replace(',','').replace('\'','');
	var N = jQuery('#syears').val() * 12;
	var total = monthlyPayment(P, N, I);
	jQuery('#totalStudentId').html('Your student loan will be <span class=blueTxt>$'+ total.toFixed(2) + '</span> per month');
	return false;
}

function getCredit(){
	var monthly = jQuery('#monthlyPaymentId').val();
	
	var interest = jQuery('#cinterest').val() / 100 / 12;
	var balance = jQuery('#cbalance').val().replace(',','');
	var payment = jQuery('#cpayment').val().replace(',','');
	var noOfPayments = 0;
	if(monthly==1){
		noOfPayments = payment;
		payment="";
	}
	var payments = 0;
	
	if(noOfPayments==0){
		jQuery('#totalCreditId').html("<tr><th>Payment #</th><th>Principle</th><th>Interest</th><th>Balance</th></tr>");
		while(balance>0 && payments<300){
			console.log('f');
			payments++;
			var i = (balance * interest).toFixed(2);
			var p = (payment - i).toFixed(2);
			var t = (eval(p) + eval(i)).toFixed(2);
			balance = (balance - p).toFixed(2);
			jQuery('#totalCreditId').append("<tr><td>Payment "+payments+":</td><td class=greenTxt>$"+p+"</td><td class=redTxt>$"+i+"</td><td>$"+balance+"</td></tr>");
		}
		jQuery('#totalCreditTxtId').html("At <span class=redTxt>$"+payment+"</span> per month, it will take <span class=blueTxt>"+payments+"</span> payments to pay off this credit card.");
	}else{
		jQuery('#totalCreditId').html("<tr><th>Payment #</th><th>Principle</th><th>Interest</th><th>Payment Total</th><th>Balance</th></tr>");
		var t = 0;
		for(payments=1;payments<=noOfPayments;payments++){
			payment = balance / noOfPayments;
			var i = (balance * interest).toFixed(2);
			var p = (payment - i).toFixed(2);
			var t = (eval(p) + eval(i));
			balance = (balance - p).toFixed(2);
			jQuery('#totalCreditId').append("<tr><td>Payment "+payments+":</td><td class=greenTxt>$"+p+"</td><td class=redTxt>$"+i+"</td><td>$"+t.toFixed(2)+"</td><td>$"+balance+"</td></tr>");
	
		}
		jQuery('#totalCreditTxtId').html("");
	}
	
	return false;
	
}

function updateMonthly(val){
	if(val==1){
		jQuery('#monthlyDollar').hide();
	}
	else
	{
		jQuery('#monthlyDollar').show();
	}
}

function monthlyPayment(p, n, i) {
  return p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
}

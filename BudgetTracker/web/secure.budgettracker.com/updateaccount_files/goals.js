function addgoal(acctid){
		document.getElementById("addgoalid").style.display='';
		goalsfrm.acctid.value=acctid;
		goalsfrm.goalname.value="";
		goalsfrm.goalamount.value="";
		goalsfrm.goalmonthly.value="";
		accountupdate_div.style.display='none';
		updateaccount.style.display='none';
		mainsection.style.display='none';
		goalsfrm.goalname.focus();
		goalsfrm.goalname.select();
	}
	function updategoal(acctid){	
		goalsfrm.style.display='none';
		accountupdate_div.style.display='none';
		updateaccount.style.display='none';
		mainsection.style.display='none';
		document.getElementById("updategoalbody").innerHTML="Loading, please wait...";
		document.getElementById("updategoalid").style.display='';
		if(window.XMLHttpRequest){
			http = new XMLHttpRequest();
		}
		else if (window.ActiveXObject){
			http = new ActiveXObject("Microsoft.XMLHTTP");
		}
		http.open("POST","goals_update.php",true);
		http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http.onreadystatechange = handleInfo_goalupdate;
		sendvar="GOALID="+acctid;
		http.send(sendvar);
		
	}
	
	function handleInfo_goalupdate() {
		if(http.readyState == 1) {
			
		}
		if(http.readyState == 4) {
			var response = http.responseText;
			document.getElementById("updategoalbody").innerHTML=response;
			goalsfrmupdate.goalamount.focus();
			goalsfrmupdate.goalamount.select();
			CheckAccountU();	
		}
		
	}
	
	
	function cancelgoal(){
		document.getElementById("addgoalid").style.display='none';
		accountupdate_div.style.display='';
		updateaccount.style.display='none';
		mainsection.style.display='';
	}
	function cancelupdategoal(){
		document.getElementById("updategoalid").style.display='none';
		goalsfrm.style.display='';
		accountupdate_div.style.display='';
		updateaccount.style.display='none';
		mainsection.style.display='';
	}
	
	function savegoal(){
		openajax();
		if(window.XMLHttpRequest){
			http = new XMLHttpRequest();
		}
		else if (window.ActiveXObject){
			http = new ActiveXObject("Microsoft.XMLHTTP");
		}
		http.open("POST","save/newgoal.php",true);
		http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http.onreadystatechange = handleInfo_savegoal;
		
		sendvar="SAVINGSACCTID="+goalsfrm.savingsacctid.value+"&ACCTID="+goalsfrm.acctid.value+"&GOALAMOUNT="+goalsfrm.goalamount.value+"&GOALNAME="+goalsfrm.goalname.value+"&GOALMONTHLY="+goalsfrm.goalmonthly.value+"&GOALBUDGET="+goalsfrm.goalbudget.checked;
		http.send(sendvar);
		return false;
	}
	function handleInfo_savegoal() {
		if(http.readyState == 1) {
			
		}
		if(http.readyState == 4) {
			var response = http.responseText;
			$("accountupdate_div").innerHTML=response;
			document.getElementById("addgoalid").style.display='none';
			accountupdate_div.style.display='';
			updateaccount.style.display='none';
			mainsection.style.display='';
			getaccounts();
			closeajax();
			new Ajax.Updater('categorydropdownID', 'common/selcategories.php', {method:'post', postBody:'lastcat=1',asynchronous:true});
		}
	}
	
	function savegoal_update(){
		openajax();
		if(window.XMLHttpRequest){
			http = new XMLHttpRequest();
		}
		else if (window.ActiveXObject){
			http = new ActiveXObject("Microsoft.XMLHTTP");
		}
		http.open("POST","save/updategoal.php",true);
		http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http.onreadystatechange = handleInfo_savegoal_update;
		sendvar="ACCTID="+goalsfrmupdate.acctid.value+"&GOALID="+goalsfrmupdate.goalid.value+"&GOALAMOUNT="+goalsfrmupdate.goalamount.value+"&GOALNAME="+goalsfrmupdate.goalname.value+"&GOALMONTHLY="+goalsfrmupdate.goalmonthly.value+"&SUBCATID="+goalsfrmupdate.subcatid.value+"&GOALBUDGET="+goalsfrmupdate.goalbudget.checked;
		http.send(sendvar);
		return false;
	}
	function handleInfo_savegoal_update() {
		if(http.readyState == 1) {
			
		}
		if(http.readyState == 4) {
			var response = http.responseText;
			document.getElementById("updategoalid").style.display='none';
			accountupdate_div.style.display='';
			updateaccount.style.display='';
			mainsection.style.display='';
			getaccounts();
			closeajax();
			accountupdate_div.innerHTML=response;
			new Ajax.Updater('categorydropdownID', 'common/selcategories.php', {method:'post', postBody:'lastcat=1',asynchronous:true});
		}
	}
	
	function deletegoal(goalid){
		if(window.XMLHttpRequest){
			http = new XMLHttpRequest();
		}
		else if (window.ActiveXObject){
			http = new ActiveXObject("Microsoft.XMLHTTP");
		}
		http.open("POST","save/deletegoal.php",true);
		http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		http.onreadystatechange = handleInfo_savegoal_update;
		sendvar="GOALID="+goalid;
		http.send(sendvar);
		return false;
	}
	
	function checksavings(e){
		if(e=="-1"){
			document.location.href="updateaccounts.php";
		}
	}
	
	function CheckAccount(){
		if($('goalbudgetID').checked==true){
			$('accountID')[0].selected=true;
			jQuery('.monthlyalloctr').show();
			jQuery('.tieaccounttr').hide();
		}
		else
		{
			jQuery('.tieaccounttr').show();
			jQuery('.monthlyalloctr').hide();
		}	
		jQuery('.goalamounttr').show();
	}
	function CheckAccountU(){
		if($('goalbudgetuID').checked==true){
			$('accountuID')[0].selected=true;
			jQuery('.monthlyalloctrU').show();
			jQuery('.tieaccounttrU').hide();
		}
		else
		{
			jQuery('.monthlyalloctrU').hide();
			jQuery('.tieaccounttrU').show();
		}	
		jQuery('.goalamounttr').show();
	}
var MessageBoard = {
	VoteUp: function(topicid){
		var url = "save/updatevote.php";
		new Ajax.Request(url, {asynchronous:true,method:'post',parameters:{topicid:topicid,vote:'1'},onSuccess:MessageBoard.GetVotes_delay(topicid)});
		Element.hide('thumbupon_'+topicid);
		Element.show('thumbupoff_'+topicid);
		Element.hide('thumbdownoff_'+topicid);
		Element.show('thumbdownon_'+topicid);
		
	},
	VoteDown: function(topicid){
		var url = "save/updatevote.php";
		new Ajax.Request(url, {asynchronous:true,method:'post',parameters:{topicid:topicid,vote:'0'},onSuccess:MessageBoard.GetVotes_delay(topicid)});
		Element.show('thumbupon_'+topicid);
		Element.hide('thumbupoff_'+topicid);
		Element.show('thumbdownoff_'+topicid);
		Element.hide('thumbdownon_'+topicid);
	},
	VoteSuccess: function(t){

	},
	HideMsg: function(){
		$('messageID').innerHTML="&nbsp;";
	},
	Success: function(){
		$('messageID').innerHTML="Success! Your Vote has been set.";
		p=setTimeout("MessageBoard.HideMsg()",2000);
	},
	GetVotes: function(topicid){
		new Ajax.Updater('voteID_'+topicid,'messageboard_getvote.php',{asynchronous:true,method:'get',parameters:{topicid:topicid},onSuccess:function(t){$('voteID_'+topicid).innerHTML=t.responseText}});
	},
	GetVotes_delay: function(topicid){
		MessageBoard.Success();
		p=setTimeout("MessageBoard.GetVotes("+topicid+")",2000);
	},
	LoadContent:function(cname,groupid){
		$('topics_body').innerHTML="<div align=center style=font-size:14px;background:#ffffff; class=\"padding5 bold apps_boxlrb\">Loading, please wait...</div>";
		var url = "messageboardtopics_ajax.php";
		new Ajax.Updater('topics_main',url, {asynchronous:true,method:'get',parameters:{groupid:groupid,cname:cname}});
	},
	UpdateRole:function(){
		var roleid=$('roleid').value;
		var siteurl=$('rolesiteurl').value;
		var company=$('rolecompany').value;
		new Ajax.Request('save/updaterole.php',{asynchronous:true,method:'post',onComplete:MessageBoard.UpdateRole_Complete,parameters:'roleid='+roleid+'&company='+company+'&siteurl='+siteurl});
	},
	UpdateRole_Complete:function(e){
		alert("Success! Your role profile has been updated.");
	}
}
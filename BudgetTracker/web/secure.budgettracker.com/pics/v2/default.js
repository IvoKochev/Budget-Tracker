$(document).ready(function(){

	for(i=2;i<=7;i++)
		$('#pressId'+i).css('display','none');
	$('#service2').css('display','none');
	$('#service3').css('display','none');

	$('.pressright').click(function(e){
		nextpress();
		e.preventDefault();
	});
	$('.pressleft').click(function(e){
		prevpress();
		e.preventDefault();
	});
	
	$('.serviceright').click(function(e){
		nextservice();
		e.preventDefault();
	});
	$('.serviceleft').click(function(e){
		prevservice();
		e.preventDefault();
	});

	 
});



var presscount = 1;
function nextpress(){
	for(i=1;i<=7;i++)
		$('#pressId'+i).css('display','none');
	presscount++;
	if(presscount==8)
		presscount=1;
	prevpresscount=presscount-1;
	if(prevpresscount==0)
		prevpresscount=7;
	console.log(presscount);
	$('#pressId'+prevpresscount).hide("slide", { direction: "left" }, 1000);
	$('#pressId'+presscount).show("slide", { direction: "right" }, 1000);
	
}
function prevpress(){

	for(i=1;i<=7;i++)
		$('#pressId'+i).css('display','none');

	presscount--;
	if(presscount==0)
		presscount=7;
	prevpresscount=presscount+1;
	if(prevpresscount==8)
		prevpresscount=1;
	if(prevpresscount==0)
		prevpresscount=7;
	
	console.log(presscount);
	$('#pressId'+presscount).show("slide", { direction: "left" }, 1000);
	$('#pressId'+prevpresscount).hide("slide", { direction: "right" }, 1000);
	
}

var servicecount = 1;
function nextservice(){
	$('#service3').css('display','none');
	$('#service2').css('display','none');
	$('#service1').css('display','none');

	servicecount++;
	if(servicecount==4)
		servicecount=1;
	prevservicecount=servicecount-1;
	if(prevservicecount==0)
		prevservicecount=3;
		
	$('#service'+prevservicecount).hide("slide", { direction: "left" }, 1000);
	$('#service'+servicecount).show("slide", { direction: "right" }, 1000);
	
}
function prevservice(){
	$('#service3').css('display','none');
	$('#service2').css('display','none');
	$('#service1').css('display','none');

	servicecount--;
	if(servicecount==0)
		servicecount=3;
	prevservicecount=servicecount+1;
	if(prevservicecount==4)
		prevpresscount=1;
	if(prevservicecount==0)
		prevservicecount=3;
	console.log(servicecount);
	$('#service'+servicecount).show("slide", { direction: "left" }, 1000);
	$('#service'+prevservicecount).hide("slide", { direction: "right" }, 1000);

}
function loginClicked(){
	jQuery('#loginformid').slideDown();
	jQuery('#loginbtn').hide();
	if(jQuery('#emailid').val()=="")
		jQuery('#emailid').focus();
	else
		jQuery('#passwordid').focus();
}


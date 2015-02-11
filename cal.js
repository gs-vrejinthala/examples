$( "#clr" ).click(function() {
    $("#ta").val(
    function(index,value){
        return value.substr(0,value.length-1);
    })
});
$( "#c" ).click(function() {		
    $("#ta").val(
    function(index,value){
		        return "";	
	})
});
 $("#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b0,#division,#multiply,#plus,#dot,#minus,#mod").click(function(){
      var v=$(this).text();
	$("#ta").val(
    function(index,value){
		        return (value+v);	
	})
 });
$( "#equal" ).click(function() {
			
    $("#ta").val(
    function(index,value){
		         return eval(value);
	})
});
$( "#pm" ).click(function() {
			
    $("#ta").val(
    function(index,value){
			var a=value.split(/[*+\/-]/);
			var b="-"+a[a.length-1];
			value=value.substring(0,value.length-b.length+1)+b;			
			return(value);
	})
});
$( "#squareroot" ).click(function() {	
		$("#ta").val(
         function(index,value){
			var a=value.split(/[*+\/-]/);
			var b=a[a.length-1];
	        if(a.length==2) 
			{   
				if(value[0]=='-')
				{	
				    value="Invalid input";
				    return value;
				}
			}
				if($.inArray(value[value.length-b.length-2]+value[value.length-b.length-1], ['--', '+-', '*-', '/-']) >= 0)
					value=value.substring(0,value.length-b.length-1)+"Invalid input";				
				else value=value.substring(0,value.length-b.length)+Math.sqrt(b);			
			        return(value);
	})    
});
$( "#inverse" ).click(function() {
			
    $("#ta").val(
    function(index,value){
			var a=value.split(/[*+\/-]/);
			var b="1/"+a[a.length-1];
			value=value.substring(0,value.length-b.length+2)+eval(b);			
			return(value);
	})
});
$( "#ce" ).click(function() {
			
    $("#ta").val(
    function(index,value){
			var a=value.split(/[*+\/-]/);
			var b=a[a.length-1];
			value=value.substring(0,value.length-b.length);			
			return(value);
	})
});




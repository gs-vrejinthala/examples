function test()
{
var counter = 0;
function innerfunc (){ return counter+ =1;}
return innerfunc();
}
var ans = test();
ans;

function ca(a1){
alert(arguments[0]);
alert(arguments[1]);
alert(arguments[2]);
}
var d=ca(2,3,4);

var n=prompt("Enter a number?"," ");
(function (){
var fac=1;
for(var i=1;i<=n;i++)
fac=fac*i;
alert(fac);
})();
function fact(n){
if(n>0)
return n*fact(n-1);
else
return 1;
};
alert(fact(n));
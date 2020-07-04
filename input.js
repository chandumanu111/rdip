function valuecal(result){
    calculatorForm.evalresult.value = calculatorForm.evalresult.value + result;
}
function clr() 
{ 
			calculatorForm.evalresult.value=" " 
} 
function sqrt(result)
{
t=Math.sqrt(result)
calculatorForm.evalresult.value=t
}
function abs(result)
{
	calculatorForm.evalresult.value=Math.abs(result)
}
function validation()
{
	var name=doc.name.value;
	var email=doc.email.value;
	var phone=doc.phone.value;
	
	if(phone.length!=10)
	{
	alert("invalid mobile number");	
	return false;
	}
	
	else if(!(/^[A-Za-z]\w*$/).test(name))
	{
	alert("name must not start with number");	
	return false;
	}
	
	else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email))
	{
	alert("invalid email address");
	return false;
	}	
}


function palin()
{
var palindrome=document.getElementById("pal").value;
	
	var rev=reverseString(palindrome);
	
	if(rev===palindrome){
		alert("string is palindrome");
		}
	else{
		alert("not a palindrome");
		}
}

function reverseString(str) {
	
	var splitString = str.split("");
	var reverseArray = splitString.reverse();
	var joinArray = reverseArray.join("");
    return joinArray;
}


function anagram()
{
var S1=document.getElementById("string1").value;
var S2=document.getElementById("string2").value;
var s1=S1.replaceAll("//s","");
var s2=S2.replaceAll("//s","");
alert(s1+" "+s2);
var s1=s1.toLowerCase();
var s2=s2.toLowerCase();
var split1=s1.split("");
var split2=s2.split("");
var sort1=split1.sort();
var sort2=split2.sort();
var str1=sort1.join("");
var str2=sort2.join("");
if(str1!=str2)
{
	alert("strings are not anagrams");
	
}
else
{
alert(S1+","+S2+","+"are anagrams");	
}
	
}

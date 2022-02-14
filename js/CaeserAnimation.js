var wordcount=[]
function Caeser_Decode(){
    for (let index = 0; index < 2; index++) {
        var input=document.getElementsByTagName("p")[index+12]
        var inputtxt=input.innerHTML
        var countarray=inputtxt.split(" ")
        wordcount[index]=countarray.length
        var output= caesarShift(inputtxt,5)
        input.innerHTML=" "+output;
    }
    var input=document.getElementsByTagName("h1")[0]
    var inputtxt=input.innerHTML
    var countarray=inputtxt.split(" ")
    wordcount[2]=countarray.length
    var output=caesarShift(inputtxt,5)
    input.innerHTML=output;
    var input=document.getElementsByTagName("h2")[0]
    var inputtxt=input.innerHTML
    var countarray=inputtxt.split(" ")
    wordcount[3]=countarray.length
    var output=caesarShift(inputtxt,5)
    input.innerHTML=output;
    setTimeout(message("Der Text dieser Webseite wurde mit der Caeser-Verschlüsselung verschlüsselt."),150)
}
async function Caeser_Encode(){
    var input=document.getElementsByTagName("h1")[0]
    Decoder(input,100)
    var wait=wordcount[2]*100+50
    await delay(wait)
    var input=document.getElementsByTagName("p")[12]
    Decoder(input,50)
    var wait=wordcount[0]*50+900
    await delay(wait)
    var input=document.getElementsByTagName("h2")[0]
    Decoder(input,100)
    var wait=wordcount[3]*100+150
    await delay(wait)
    var input=document.getElementsByTagName("p")[13]
    Decoder(input,50)
}
function message(msg){
    if (msg != undefined) {
      document.getElementById("boxTxt").innerHTML = msg;
      document.getElementById("boxBack").classList.add("show");
      setTimeout(message,2000)
    } 
    else { 
      document.getElementById("boxBack").classList.remove("show");
      setTimeout(Caeser_Encode,500);
    }
}
function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
function caesarShift(text, shift) {
	var UPPER_A = "A".charCodeAt(0);
	var LOWER_A = "a".charCodeAt(0);
	var result = "";
	for (var i = 0; i < text.length; i++) {
		var c = text.charCodeAt(i);
		if (UPPER_A <= c && c <= "Z".charCodeAt(0))  // Uppercase
			c = (c - UPPER_A + shift) % 26 + UPPER_A;
		else if (LOWER_A <= c && c <= "z".charCodeAt(0))  // Lowercase
			c = (c - LOWER_A + shift) % 26 + LOWER_A;
		result += String.fromCharCode(c);
		}
	return result;
}
async function Decoder(input, delayms){
    var inputtxt=input.innerHTML
    var output=caesarShift(inputtxt,(26 - 5) % 26)
    var splitarrayout=output.split(" ")
    var splitarrayin=inputtxt.split(" ")
    var out=""
    for (let i = 0; i < splitarrayout.length; i++) {
        out=out+splitarrayout[i]+" "
        splitarrayin.shift()
        input.innerHTML=out+splitarrayin.join(" ")
        await delay(delayms)
    }
}
var splitarrayout=[]
function Base64_Decode(){
    for (let index = 0; index < 2; index++) {
        var input=document.getElementsByTagName("p")[index+13]
        var inputtxt=input.innerHTML
        var output=btoa(inputtxt)
        splitarrayout=output.split(" ")
        input.innerHTML=" "+output;
    }
    var input=document.getElementsByTagName("h1")[0]
    var inputtxt=input.innerHTML
    var output=btoa(inputtxt)
    input.innerHTML=output;
    var input=document.getElementsByTagName("h2")[0]
    var inputtxt=input.innerHTML
    var output=btoa(inputtxt)
    input.innerHTML=output;
    setTimeout(message,150)
}
async function Base64_Encode(){
    for (let index = 0; index < 2; index++) {
        var input=document.getElementsByTagName("p")[index+13]
        var inputtxt=input.innerHTML
        var output=atob(inputtxt)
        var splitarrayout=output.split(" ")
        var del=inputtxt.length/splitarrayout.length
        console.log(splitarrayout.length)
        console.log(inputtxt.length)
        var encodedstrnum=0
        console.log(del)
        for (let i = 0; i < splitarrayout.length; i++) {
            var out=splitarrayout[i]
            encodedstrnum=encodedstrnum+out.length+1
            var txtin=input.innerHTML
            var txtin2=txtin.slice(-txtin.length+Math.round(del)) 
            var inputencoded=input.innerHTML.slice(0,encodedstrnum)
            input.innerHTML=txtin2
            await delay(200)
        }
    }
    var input=document.getElementsByTagName("h1")[0]
    var inputtxt=input.innerHTML
    var output=atob(inputtxt)
    input.innerHTML=output;
    var input=document.getElementsByTagName("h2")[0]
    var inputtxt=input.innerHTML
    var output=atob(inputtxt)
    input.innerHTML=output;
}
function message(){
    alert("Das ist der Text dieser Webseite mit Base64 verschlüsselt. ")
    setTimeout(Base64_Encode,1500)
}
function delay(milliseconds){
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
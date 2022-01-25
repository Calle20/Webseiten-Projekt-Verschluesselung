function Base64_Decode(){
    for (let index = 0; index < 2; index++) {
        var input=document.getElementsByTagName("p")[index+13]
        var inputtxt=input.innerHTML
        var output=btoa(inputtxt)
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
    var input=document.getElementsByTagName("h1")[0]
    var inputtxt=input.innerHTML
    var output=atob(inputtxt)
    var splitarrayout=output.split(" ")
    var del=inputtxt.length/splitarrayout.length
    var out=""
    for (let i = 0; i < splitarrayout.length; i++) {
        out=out+splitarrayout[i]+" "
        var slicer=-inputtxt.length+((i+1)*Math.round(del))
        var txtin2=inputtxt.slice(slicer) 
        input.innerHTML=out+txtin2
        if(i==splitarrayout.length-1){
            var newtxtin2=input.innerHTML
            var newsplitarrayout=newtxtin2.split(" ")
            newsplitarrayout.pop()
            input.innerHTML=newsplitarrayout.join(" ")
        }
        await delay(50)
    }
    var input=document.getElementsByTagName("h2")[0]
    var inputtxt=input.innerHTML
    var output=atob(inputtxt)
    var splitarrayout=output.split(" ")
    var del=inputtxt.length/splitarrayout.length
    var out=""
    for (let i = 0; i < splitarrayout.length; i++) {
        out=out+splitarrayout[i]+" "
        var slicer=-inputtxt.length+((i+1)*Math.round(del))
        var txtin2=inputtxt.slice(slicer) 
        input.innerHTML=out+txtin2
        if(i==splitarrayout.length-1){
            var newtxtin2=input.innerHTML
            var newsplitarrayout=newtxtin2.split(" ")
            newsplitarrayout.pop()
            input.innerHTML=newsplitarrayout.join(" ")
        }
        await delay(50)
    }
    for (let index = 0; index < 2; index++) {
        var input=document.getElementsByTagName("p")[index+13]
        var inputtxt=input.innerHTML
        var output=atob(inputtxt)
        var splitarrayout=output.split(" ")
        var del=inputtxt.length/splitarrayout.length
        var out=""
        for (let i = 0; i < splitarrayout.length; i++) {
            out=out+splitarrayout[i]+" "
            var slicer=-inputtxt.length+((i+1)*Math.round(del))
            var txtin2=inputtxt.slice(slicer) 
            input.innerHTML=out+txtin2
            if(i==splitarrayout.length-1){
                var newtxtin2=input.innerHTML
                var newsplitarrayout=newtxtin2.split(" ")
                newsplitarrayout.pop()
                input.innerHTML=newsplitarrayout.join(" ")
            }
            await delay(50)
        }
    }
    
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
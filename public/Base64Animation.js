function Base64_Decode(){
    for (let index = 0; index < 2; index++) {
        var input=document.getElementsByTagName("p")[index+13]
        var inputtxt=input.innerHTML
        var output=btoa(inputtxt)
        input.innerHTML=output;
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
function Base64_Encode(){
    for (let index = 0; index < 2; index++) {
        var input=document.getElementsByTagName("p")[index+13]
        var inputtxt=input.innerHTML
        var output=atob(inputtxt)
        input.innerHTML=output;
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
    setTimeout(Base64_Encode,2000)
}
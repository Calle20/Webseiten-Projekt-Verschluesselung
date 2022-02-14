function ButtonDecoden_Click(){
    var plaintext=document.getElementById('box').value
	var shiftText = document.getElementById('zahl').value;
	if (!/^-?\d+$/.test(shiftText)) {
		alert("Der Schlüssel muss eine Zahl sein.");
		return;
	}
    var txtout=document.getElementById('output')
	var shift = parseInt(shiftText, 10);
    txtout.value=caesarShift(plaintext,shift);
}
function ButtonEncoden_Click(){
    var plaintext=document.getElementById('box').value
	var shiftText = document.getElementById('zahl').value;
	if (!/^-?\d+$/.test(shiftText)) {
		alert("Der Schlüssel muss eine Zahl sein.");
		return;
	}
    var txtout=document.getElementById('output')
	var shift = parseInt(shiftText, 10);
	shift = (26 - shift) % 26;
    txtout.value=caesarShift(plaintext,shift);
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
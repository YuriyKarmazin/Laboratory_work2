function ready() {
    confirm("Are you ready?")
}
function age(){
    let age = prompt("What is your age?")
    
    if(age < 18){
		alert("Uare allowed to continue but I'm take no responsibility")
	}else if(age >= 18){
		alert("Good Luck!")
	}
}

function sqrt(){
	let num = document.getElementById("input_id").value
	alert(Math.sqrt(num))
}



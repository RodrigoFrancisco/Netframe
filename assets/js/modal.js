//function
function showmodal(boton){
	switch(boton){
		case "BtnSV":
		var modal = document.getElementById('SVModal');
		var span = document.getElementsByClassName("close")[0];	
		break;
		case "BtnSD":
		var modal = document.getElementById('SDModal');
		var span = document.getElementsByClassName("close")[1];	
		break;
		case "BtnVyS":
		var modal = document.getElementById('VySModal');
		var span = document.getElementsByClassName("close")[2];	
		break;
		case "BtnE":
		var modal = document.getElementById('EModal');
		var span = document.getElementsByClassName("close")[3];	
		break;
		case "BtnTIyST":
		var modal = document.getElementById('TIySTModal');
		var span = document.getElementsByClassName("close")[4];	
		break;
		case "BtnCyA":
		var modal = document.getElementById('CyAModal');
		var span = document.getElementsByClassName("close")[5];	
		break;
		default:
        text = "I have never heard of that fruit...";
	}
	modal.style.display = "block";
	// Get the <span> element that closes the modal
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}

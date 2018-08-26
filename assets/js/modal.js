//function
function showmodal(boton){
	switch(boton){
		case "BtnSV":
		var modal = document.getElementById('SVModal');
		break;
		case "BtnSD":
		var modal = document.getElementById('SDModal');
		break;
		case "BtnVyS":
		var modal = document.getElementById('VySModal');
		break;
		case "BtnE":
		var modal = document.getElementById('EModal');
		break;
		case "BtnTIyST":
		var modal = document.getElementById('TIySTModal');
		break;
		case "BtnCyA":
		var modal = document.getElementById('CyAModal');
		break;
		default:
        text = "I have never heard of that fruit...";
	}
	modal.style.display = "block";
	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];	
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

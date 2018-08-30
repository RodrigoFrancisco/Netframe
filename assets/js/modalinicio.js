//function
/*function showmodal(boton){
	
	switch(boton){
		case "BtnUNAM":
		var modal = document.getElementById('UNAMModal');
		var span = document.getElementsByClassName("close")[0];	
		break;
		case "BtnIPN":
		var modal = document.getElementById('IPNModal');
		var span = document.getElementsByClassName("close")[1];	
		break;
		case "BtnCPT":
		var modal = document.getElementById('CPTModal');
		var span = document.getElementsByClassName("close")[2];	
		break;
		case "BtnSSA":
		var modal = document.getElementById('SSAModal');
		var span = document.getElementsByClassName("close")[3];	
		break;
		case "BtnTELCEL":
		var modal = document.getElementById('TELCELModal');
		var span = document.getElementsByClassName("close")[4];	
		break;
		case "BtnMOVISTAR":
		var modal = document.getElementById('MOVISTARModal');
		var span = document.getElementsByClassName("close")[5];	
		break;
		case "BtnISSTE":
		var modal = document.getElementById('ISSTEModal');
		var span = document.getElementsByClassName("close")[5];	
		break;
		case "BtnBS":
		var modal = document.getElementById('BSModal');
		var span = document.getElementsByClassName("close")[5];	
		break;
		default:
        text = "I have never hear a fruit..say poop.";
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
}*/

 document.getElementsByClassName("tablink")[0].click();

  function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].classList.remove("w3-light-grey");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add("w3-light-grey");
  }
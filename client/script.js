document.getElementById("navList").addEventListener("click", (e)=> changePage(e));

function changePage(event){
let url = event.target.id;
let element2Change = document.getElementById('content')

switch (url) {
	case 'S1': element2Change.innerHTML = document.getElementById('section1').innerHTML;
		break;
	case 'S2': element2Change.innerHTML = document.getElementById('section2').innerHTML;
		break;
	case 'S3': element2Change.innerHTML = document.getElementById('section3').innerHTML;
		break;
	case 'S4': element2Change.innerHTML = document.getElementById('section4').innerHTML;
		break;
	case 'S5': element2Change.innerHTML = document.getElementById('section5').innerHTML;
		break;
	case 'S6': element2Change.innerHTML = document.getElementById('section6').innerHTML;
		break;
	case 'S7': element2Change.innerHTML = document.getElementById('section7').innerHTML;
		break;
	default:   element2Change.innerHTML = document.getElementById('homeTemplate').innerHTML;
		break;
}
}
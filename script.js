
var image_data = [ ];
var index = 0;

// setInterval(function image_changer() 
// {
// 	if (index === image_data.length)
// 	{
// 		index = 0;
// 	}

// 	document.getElementById('image').src = image_data[index];
// 	index = index + 1;
// },2000);


// tabcontent = document.getElementsByClassName("tabcontent");
// //tabcontent[0].style.display = "block";
// document.getElementById("London").style.display = "block";

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

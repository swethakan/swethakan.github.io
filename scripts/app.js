console.log(Object.keys(structure).length);
console.log(structure[0]);

var portfolio = document.getElementById("Portfolio");
var html = "";

//some stuff happens
for(x = 0; x < Object.keys(structure).length; x++){
	html += "<div data-aos='fade-up' class = 'project'>";
	html += "<h2>"+structure[x].NAME+"</h2>";
	if(structure[x].ID == "beaches")
		html += "<p id = 'award'><img src = 'images/award.svg'></img><a href = 'https://www.pulitzer.org/finalists/rosanna-xia-swetha-kannan-and-terry-castleman-los-angeles-times'>2020 Pulitzer Prize finalist</a></p>";
	html += "<div id = 'slides'>";
		html += "<div id = 'slide1'><video autoplay loop> <source src = 'images/projects/"+structure[x].ID+"/main.mp4' type='video/mp4'>Your browser does not support the video tag</video></div>";
	// html += "<h3>"+structure[x].SLIDE1_HED+"</h3>";
	// html += "<p>"+structure[x].SLIDE1_TXT+"</p>";
	html += "</div>";
	html += "</div>";
}

portfolio.innerHTML = html;


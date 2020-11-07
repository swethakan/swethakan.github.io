
console.log(Object.keys(structure).length);
console.log(structure[0]);

var portfolio = document.getElementById("Portfolio");
var html = "";

//some stuff happens
for(x = 0; x < Object.keys(structure).length; x++){

	html += "<div data-aos='fade-up' class = 'project flex'>";

	html += '<div class="btn btn-primary prev" id="prev'+x+'"><img alt = "Arrow image" src = "images/arrow.svg"></img></div>';

	html += "<div class = 'main'>";
	html += "<div id='mySwipe"+x+"' class = 'swipe mySwipe'>";
		html += " <div class='swipe-wrap'>";
			html += "<div>";
				html += "<div class = 'slide firstSlide' href = '"+structure[x].LINK+"'>";
				html += "<h2><a class = 'title_links' title = 'this link will take you to another website to view the project' href = '"+structure[x].LINK+"'>"+structure[x].NAME+"</a></h2>";
				html += structure[x].AWARD;
				html += "<video class='video-to-sync' autoplay='' muted='' loop='' playsinline=''><source data-src='images/projects/"+structure[x].ID+"/main.mp4' type='video/mp4' src='images/projects/"+structure[x].ID+"/main.mp4'>Your browser does not support the video tag</video>";
				html += "<div class = 'mobile_directions'><p>Swipe left for more</p><img alt = 'Arrow image' src = 'images/arrow.svg'></img></div>";
			html += "</div></div>";

			html += "<div>";
				html += "<div class = 'slide goal'>";
				html += "<h3>"+structure[x].SLIDE1_HED+"</h3>";
				html += "<p>"+structure[x].SLIDE1_TXT+"</p>";
				html += structure[x].SLIDE1_RESP;
				html += "<div class = 'mobile_directions'><p>Swipe</p><img alt = 'Arrow image' src = 'images/arrow.svg'></img></div>";
			html += "</div></div>";

			html += "<div>";
				html += "<div class = 'slide'>";
				html += "<h3>"+structure[x].SLIDE2_HED+"</h3>";
				html += structure[x].SLIDE2_IMG+"<p id = 'caption'>"+structure[x].SLIDE2_IMG_caption+"</p>";
				html += "<p>"+structure[x].SLIDE2_TXT+"</p>";
				html += "<div class = 'mobile_directions'><p>Swipe</p><img alt = 'Arrow image' src = 'images/arrow.svg'></img></div>";
			html += "</div></div>";


			html += "<div>";
				html += "<div class = 'slide'>";
				html += "<h3>"+structure[x].SLIDE3_HED+"</h3>";
				html += structure[x].SLIDE3_IMG+"<p id = 'caption'>"+structure[x].SLIDE3_IMG_caption+"</p>";
				html += "<p>"+structure[x].SLIDE3_TXT+"</p>";
				html += "<div class = 'mobile_directions'><p>Swipe</p><img alt = 'Arrow image' src = 'images/arrow.svg'></img></div>";
			html += "</div></div>";



			html += "<div>";
				html += "<div class = 'slide'>";
				html += "<h3>"+structure[x].SLIDE4_HED+"</h3>";
				html += structure[x].SLIDE4_IMG+"<p id = 'caption'>"+structure[x].SLIDE4_IMG_caption+"</p>";
				html += "<p>"+structure[x].SLIDE4_TXT+"</p>";
				html += "<div class = 'mobile_directions'><p>Swipe</p><img alt = 'Arrow image' src = 'images/arrow.svg'></img></div>";
			html += "</div></div>";



			// html += "<div>";
			// 	html += "<div class = 'slide'>";
			// 	html += "<h3>"+structure[x].SLIDE3_HED+"</h3>";
			// 	html += "<p>"+structure[x].SLIDE3_TXT+"</p>";
			// html += "</div></div>";

		html += "</div>";
	html += "</div></div>";

	
	html += '<div class="btn btn-primary next" id="next'+x+'"><img alt = "Arrow image" src = "images/arrow.svg"></img></div>';
	html += "</div>";
}

portfolio.innerHTML = html;


for(let x = 0; x < Object.keys(structure).length; x++){
	
	let element = document.getElementById('mySwipe'+x);

	let mySwipe = new Swipe(element, {
	  startSlide: 0,
	  speed: 400,
	  auto: 0,
	  draggable: false,
	  continuous: true,
	  autoRestart: false,
	  disableScroll: false, // prevent touch events from scrolling the page
	  stopPropagation: false, 
	  callback: function(index, elem, dir) {},
	  transitionEnd: function(index, elem) {}
	});

	let prevBtn = document.getElementById('prev'+x);
	let nextBtn = document.getElementById('next'+x);

	prevBtn.addEventListener("click", function(){mySwipe.prev()});
	nextBtn.addEventListener("click", function(){mySwipe.next()});

}


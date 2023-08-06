// All "Projects" are comprised of their HTML code, CSS code, and href address
class Project {
	constructor(desc, info, css, addr){
		this.desc = desc;
		this.info = info;
		this.css = css;
		this.addr = addr;
	}
}

// When a project is clicked on
function info(x, y) {
	// Added so it happens "after" onClick
	document.getElementById("desc").style.borderTop = "3px solid black";
	// Fills empty p element in each page with each Project's description 
	document.getElementById("desc").innerHTML = x.desc;
	
	// Fills in empty div element in each page with each Project's HTML code 
	document.getElementById("info").innerHTML = x.info;
	
	// Fills empty style element in each page with css for each project
	document.getElementById("css").innerHTML = x.css;
	
	// Takes each Project's name in each page and puts it into empty link element with an href
	document.getElementById("link").innerHTML = y.textContent + " Zip Files";
	document.getElementById("link").href = x.addr;
	
	document.getElementById("desc").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
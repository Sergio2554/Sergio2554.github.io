// Projects info description and CSS for HTML page
const one = new Project(
	`
		<p>A Website I was working on all throughout an HTML and CSS class. There weren't<br>
		any other assignments other than "adding on" to this project week by week. Here is the final result.</p>
	`,
	`
		<img src="../Images/HTML/Project1/Img1.png">
		<p>Home Page</p>
		<img src="../Images/HTML/Project1/Img2.png">
		<p>A Comment Form</p>
	`
	,
	`
		.info img {
			height: 70%;
			width: 70%;
		}
	`
	,
	
	"../ZipFiles/HTML/Final Website.zip"
);

const two = new Project(
	``,
	`
		<p>
			This entire website was made with HTML, CSS, and Javascript.<br>
			Feel free to look at the code for it.
		</p>
		<p>
			Note: The ZipFiles, Other Files, and Image Folders were removed due to size. Zip Files for projects<br>
			are availaible individually through each Project's Zip File link on each page on this Portfolio.
		</p>
	`
	,
	""
	,
	"../ZipFiles/HTML/Portfolio.zip"
);
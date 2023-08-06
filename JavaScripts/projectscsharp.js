// Projects info description for C# page
const one = new Project(
	`
		<p>A program that gives an addition problem for the user to solve.</p>
	`,
	`
		<img src="../Images/CSharp/Project1/Img1.png">
		<p>User Input is checked against two random numbers</p>
		<img src="../Images/CSharp/Project1/Img2.png">
		<img src="../Images/CSharp/Project1/Img3.png" class="ex">
		<p>Form example</p>
	`,
	``,
	"../ZipFiles/CSharp/Addition Tour.zip"
);

const two = new Project(
	`
		<img src="../Images/CSharp/Project2/Prompt.jpg" alt="Assignment Prompt">
		<p>A program that changes the color of the form depending on user selection.</p>
	`,
	`
		<img src="../Images/CSharp/Project2/Img1.png">
		<p>The color of the form changes depending what colors are selected</p>
		<p><img src="../Images/CSharp/Project2/Img2.png">
		<img src="../Images/CSharp/Project2/Img3.png"></p>
		<p><img src="../Images/CSharp/Project2/Img4.png">
		<img src="../Images/CSharp/Project2/Img5.png"></p>
		<p>Various combinations</p>
	`,
	`
		.desc img { width: 50%; height: 50%;}
	`,
	"../ZipFiles/CSharp/Color Mixer.zip"
);

const three = new Project(
	`
		<img src="../Images/CSharp/Project3/Prompt1.jpg" alt="Assignment Prompt">
		<img src="../Images/CSharp/Project3/Prompt2.jpg" alt="Assignment Prompt">
		<p>A program that calculates distance from user input and outputs the result in a txt file.</p>
	`,
	`
		<img src="../Images/CSharp/Project3/Img1.png">
		<p>Loop writes the distance for each hour on a new line</p>
		<img src="../Images/CSharp/Project3/Img2.png">
		<p>Form for user input and file location</p>
		<p><img src="../Images/CSharp/Project3/Img3.png"></p>
		<img src="../Images/CSharp/Project3/Img4.png" class="ex">
		<p>Text file with result</p>
	`,
	`
		.desc img { width: 50%; height: 50%;}
	`,
	"../ZipFiles/CSharp/Distance Calculator.zip"
);

const four = new Project(
	`
		<img src="../Images/CSharp/Project4/Prompt.jpg" alt="Assignment Prompt">
		<p>A program that stores Objects into a list and retrieves the object's information through<br>the use of a listbox</p>
	`,
	`
		<img src="../Images/CSharp/Project4/Img1.png">
		<p>Form for adding to a list an ProductionWorker object and it's numbered place<br>in the list in the listbox</p>
		<p><img src="../Images/CSharp/Project4/Img2.png"></p>
		<img src="../Images/CSharp/Project4/Img3.png" class="ex">
		<p><img src="../Images/CSharp/Project4/Img4.png" class="ex"></p>
		<img src="../Images/CSharp/Project4/Img5.png" class="ex">
		<p>A ProductionWorker is added to a a seperate list and the name is stored int the listbox</p>
		<img src="../Images/CSharp/Project4/Img6.png">
		<img src="../Images/CSharp/Project4/Img7.png">
		<p>A ProductionWorker's info is retrieved from the list by selecting the name from the listbox,<br>
		which give the corresponding name's index in the list</p>
		<img src="../Images/CSharp/Project4/Img9.png">
		<img src="../Images/CSharp/Project4/Img8.png">
		<p>The ProductionWorker class that inherits from an Employee Class</p>
	`,
	`
		.desc img { width: 50%; height: 50%;}
	`,
	"../ZipFiles/CSharp/Employee and ProductionWorker Classes.zip"
);

const five = new Project(
	`
		<img src="../Images/CSharp/Project5/Prompt.jpg" alt="Assignment Prompt">
		<p>A program that displays an Employee's information on a form through a different form</p>
	`,
	`
		<p><img src="../Images/CSharp/Project5/Img3.png"></p>
		<img src="../Images/CSharp/Project5/Img4.png" class="ex">
		<p>A list created filled with Employee Objects and their names added to a listbox</p>
		<img src="../Images/CSharp/Project5/Img1.png">
		<img src="../Images/CSharp/Project5/Img2.png">
		<p>Listbox with Employee names and form to display their info</p>
		<p><img src="../Images/CSharp/Project5/Img5.png"></p>
		<img src="../Images/CSharp/Project5/Img6.png" class="ex">
		<p>Selectecd name in listbox gives index of the Employee object in list then display their info</p>
		
	`,
	`
		.desc img { width: 50%; height: 50%;}
	`,
	"../ZipFiles/CSharp/Employee Class.zip"
);

const six = new Project(
	`
		<img src="../Images/CSharp/Project6/Prompt1.jpg" alt="Assignment Prompt">
		<img src="../Images/CSharp/Project6/Prompt2.jpg" alt="Assignment Prompt">
		<p>A program that calculates a a price depending on user input for services.</p>
	`,
	`
		<img src="../Images/CSharp/Project6/Img1.png">
		<p>User Input form to calculate the total cost of services</p>
		<p><img src="../Images/CSharp/Project6/Img2.png"></p>
		<p><img src="../Images/CSharp/Project6/Img3.png" class="ex"></p>
		<img src="../Images/CSharp/Project6/Img4.png" class="ex">
		<p>Functions that add up and multiply the various costs of services selected in the form</p>
		<img src="../Images/CSharp/Project6/Img5.png">
		<p>Form calculating user input</p>
	`,
	`
		.desc img { width: 50%; height: 50%;}
	`,
	"../ZipFiles/CSharp/Joe's Automotive.zip"
);

const seven = new Project(
	`
		<img src="../Images/CSharp/Project7/Prompt.jpg" alt="Assignment Prompt">
		<p>A program that rearranges a user's name into various formats.</p>
	`,
	`
		<img src="../Images/CSharp/Project7/Img1.png">
		<p>Form for user input</p>
		<div><img src="../Images/CSharp/Project7/Img2.png">
		<img src="../Images/CSharp/Project7/Img3.png"></div>
		<img src="../Images/CSharp/Project7/Img4.png">
		<img src="../Images/CSharp/Project7/Img5.png">
		<img src="../Images/CSharp/Project7/Img6.png">
		<p>Code corresponding to various buttons rearanging a user's name</p>
	`,
	`
		.desc img { width: 50%; height: 50%;}
	`,
	"../ZipFiles/CSharp/Name Formatter.zip"
);

const eight = new Project(
	`
		<img src="../Images/CSharp/Project8/Prompt.jpg" alt="Assignment Prompt">
		<p>A program that displays data from a database onto a DataGrid.</p>
	`,
	`
		<img src="../Images/CSharp/Project8/Img1.png">
		<img src="../Images/CSharp/Project8/Img2.png">
		<p>A database and it's data</p>
		<img src="../Images/CSharp/Project8/Img3.png">
		<p>Data from the database displayed in a DataGrid</p>
	`,
	`
		.desc img { width: 50%; height: 50%;}
	`,
	"../ZipFiles/CSharp/Personnel Database.zip"
);

const nine = new Project(
	`
		<img src="../Images/CSharp/Project9/Prompt.jpg" alt="Assignment Prompt">
		<p>A program that reads numbers in a text file and gives the total sum.</p>
	`,
	`
		<img src="../Images/CSharp/Project9/Img1.png">
		<p>File with numbers to be added together line by line</p>
		<p><img src="../Images/CSharp/Project9/Img2.png"></p>
		<img src="../Images/CSharp/Project9/Img3.png" class="ex">
		<p>Each line in the file is added to the listbox and added to a single variable with<br>
		the sum of said variable displayed</p>
	`,
	`
		.desc img { width: 50%; height: 50%;}
	`,
	"../ZipFiles/CSharp/Total Sales.zip"
);

const ten = new Project(
	`
		<img src="../Images/CSharp/Project10/Prompt.jpg" alt="Assignment Prompt">
		<p>A program that counts the words in a sentence that is given.</p>
	`,
	`
		<p><img src="../Images/CSharp/Project10/Img1.png"></p>
		<img src="../Images/CSharp/Project10/Img2.png" class="ex">
		<p>Function that calculates a given sentence the number of words in it through loops</p>
	`,
	`
		.desc img { width: 50%; height: 50%;}
	`,
	"../ZipFiles/CSharp/Word Counter.zip"
);
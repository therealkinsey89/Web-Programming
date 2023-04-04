//gets doors for script
const door1 = document.getElementById("door1");
const door2 = document.getElementById("door2");
const door3 = document.getElementById("door3");

//adds event listeners to doors so clicks work
door1.addEventListener("click", selectDoor);
door2.addEventListener("click", selectDoor);
door3.addEventListener("click", selectDoor);

//creates null variables in full scope of script
let selectedDoor = null;
let winningDoor = null;
let doorOutput = null;
let winDoor = null;

//function for initial selection of door
function selectDoor() {
	//takes away click functionality on the doors
	door1.removeEventListener("click", selectDoor);
	door2.removeEventListener("click", selectDoor);
	door3.removeEventListener("click", selectDoor);
	
	//sets the selectedDoor variable to the selected door 
	this.classList.add("selected");
	selectedDoor = this;

	//determines selected door for text output
	switch (selectedDoor.id)
	{
		case "door1":
			doorOutput = "Door 1";
			break;
		case "door2":
			doorOutput = "Door 2";
			break;
		case "door3":
			doorOutput = "Door 3";
			break;
	}

	//text output after initial selection
	document.getElementById("result").textContent = "You have selected " +doorOutput+". Would you like to reselect your door or confirm your selection?";
	
	//adds buttons and minor styling for user to continue
	document.getElementById("reselect").style.display = "inline-block";
	document.getElementById("reveal").style.display = "inline-block";
	document.getElementById("gameButtons").style.textAlign = "center";
}

//enables event listener for user interface buttons
document.getElementById("reselect").addEventListener("click", reselect);
document.getElementById("reveal").addEventListener("click", reveal);

//function for reselect button
function reselect()
{
	//resets back to beginning
	door1.classList.remove("selected", "losing", "winning");
	door2.classList.remove("selected", "losing", "winning");
	door3.classList.remove("selected", "losing", "winning");
    door1.innerHTML = "Door 1";
    door2.innerHTML = "Door 2";
    door3.innerHTML = "Door 3";

	//enables event listeners for doors
	door1.addEventListener("click", selectDoor);
	door2.addEventListener("click", selectDoor);
	door3.addEventListener("click", selectDoor);
	
	//updates output text
	document.getElementById("result").textContent = "Please make another selection!";

	//hides game buttons
	document.getElementById("reselect").style.display = "none";
	document.getElementById("reveal").style.display = "none";
}

//function for the reveal button
function reveal() {
	//randomizes the winning door
	const doors = [door1, door2, door3];
	winningDoor = doors[Math.floor(Math.random() * doors.length)];
    winningDoor.classList.add("winning");
    winningDoor.innerHTML = "Winning Door";

	//sets the losing door(s)
	const losingDoors = doors.filter(door => door !== selectedDoor && door !== winningDoor);
	const losingDoor = losingDoors[Math.floor(Math.random() * losingDoors.length)];
	losingDoor.classList.add("losing");
    losingDoor.innerHTML = "Losing Door";

	//determines winning door for text output
	switch (winningDoor.id)
	{
		case "door1":
			winDoor = "Door 1";
			break;
		case "door2":
			winDoor = "Door 2";
			break;
		case "door3":
			winDoor = "Door 3";
			break;
	}

	//determines selected door for text output
	switch (selectedDoor.id)
	{
		case "door1":
			doorOutput = "Door 1";
			break;
		case "door2":
			doorOutput = "Door 2";
			break;
		case "door3":
			doorOutput = "Door 3";
			break;
	}

	//logic to display text if user wins or loses
	if (selectedDoor == winningDoor)
	{
		document.getElementById("result").textContent = "Congratulations! You selected "+doorOutput+", the winning door!";
	}
	else
	{
		document.getElementById("result").textContent = "Better luck next time! You selected "+doorOutput+", "+winDoor+" was the winning door."
	}

	//removes event listenrs for doors again after selecting reveal
	door1.removeEventListener("click", selectDoor);
	door2.removeEventListener("click", selectDoor);
	door3.removeEventListener("click", selectDoor);

	//hides and shows game buttons
	document.getElementById("reselect").style.display = "none";
	document.getElementById("reveal").style.display = "none";
	document.getElementById("playAgain").style.display = "inline-block";
}

//enables event listener for play again button
document.getElementById("playAgain").addEventListener("click", playAgain);

//function for the play again button -- resets the game after it is over
function playAgain() {
	door1.classList.remove("selected", "losing", "winning");
	door2.classList.remove("selected", "losing", "winning");
	door3.classList.remove("selected", "losing", "winning");
    door1.innerHTML = "Door 1";
    door2.innerHTML = "Door 2";
    door3.innerHTML = "Door 3";
	
	selectedDoor = null;
	winningDoor = null;
	
	document.getElementById("playAgain").style.display = "none";
	
	door1.addEventListener("click", selectDoor);
	door2.addEventListener("click", selectDoor);
	door3.addEventListener("click", selectDoor);
	
	document.getElementById("result").textContent = "";
}

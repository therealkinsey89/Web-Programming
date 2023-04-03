// get the doors
const door1 = document.getElementById("door1");
const door2 = document.getElementById("door2");
const door3 = document.getElementById("door3");

// add click event listener to each door
door1.addEventListener("click", selectDoor);
door2.addEventListener("click", selectDoor);
door3.addEventListener("click", selectDoor);

// initialize variables
let selectedDoor = null;
let winningDoor = null;

// function to select a door
function selectDoor() {
	// remove event listener from all doors
	door1.removeEventListener("click", selectDoor);
	door2.removeEventListener("click", selectDoor);
	door3.removeEventListener("click", selectDoor);
	
	// mark the selected door
	this.classList.add("selected");
	selectedDoor = this;
	
	
	
	
	
	// show the play again button
	document.getElementById("reselect").style.display = "block";
	document.getElementById("reveal").style.display = "block";
}

document.getElementById("reveal").addEventListener("click", reveal);

function reveal() {
	// randomly select a winning door
	const doors = [door1, door2, door3];
	winningDoor = doors[Math.floor(Math.random() * doors.length)];
    winningDoor.classList.add("winning");
    winningDoor.innerHTML = "Winning Door";


	// reveal a losing door
	const losingDoors = doors.filter(door => door !== selectedDoor && door !== winningDoor);
	const losingDoor = losingDoors[Math.floor(Math.random() * losingDoors.length)];
	losingDoor.classList.add("losing");
    losingDoor.innerHTML = "Losing Door";

	
	
	// display the result
	document.getElementById("result").textContent = `You selected ${selectedDoor.id}, the winning door is ${winningDoor.id}.`;
	door1.removeEventListener("click", selectDoor);
	door2.removeEventListener("click", selectDoor);
	door3.removeEventListener("click", selectDoor);
	document.getElementById("reselect").style.display = "none";
	document.getElementById("reveal").style.display = "none";
	document.getElementById("playAgain").style.display = "block";
}

// add click event listener to the play again button
document.getElementById("playAgain").addEventListener("click", playAgain);

// function to play again
function playAgain() {
	// reset the doors
	door1.classList.remove("selected", "losing", "winning");
	door2.classList.remove("selected", "losing", "winning");
	door3.classList.remove("selected", "losing", "winning");
    door1.innerHTML = "Door 1";
    door2.innerHTML = "Door 2";
    door3.innerHTML = "Door 3";
	
	// reset the variables
	selectedDoor = null;
	winningDoor = null;
	
	// hide the play again button
	document.getElementById("playAgain").style.display = "none";
	
	// add click event listener to each door
	door1.addEventListener("click", selectDoor);
	door2.addEventListener("click", selectDoor);
	door3.addEventListener("click", selectDoor);
	
	// clear the result
	document.getElementById("result").textContent = "";
}

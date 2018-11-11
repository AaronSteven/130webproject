//All of the constants that reference an element in the HTML go here 
const tableButton = document.getElementById("create");
const theTimer = document.getElementById("timer");
const gridButton = document.getElementById("changeGridColor");

// need to do hover mouse let it glow
// user can change color of table
// user can change size of table
function addTable(colAndRowSize) {
    console.log("In add table function");
    let myTableDiv = document.getElementById("myDynamicTable"); // need a handle to an element   
    let table = document.createElement('TABLE'); // creation of HTML code , notice you dont close the table !
	
	// Easy to get confused between CSS and DOM syntac to manipulate the attributes
    table.border='1';
	table.style.borderCollapse='collapse';
    let tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
	let sizerow=colAndRowSize;
	let sizecol=colAndRowSize;
    for (let i=0; i<sizerow; i++){
       let tr = document.createElement('TR');
       tableBody.appendChild(tr);
      
       for (let j=0; j<sizecol; j++){
           let td = document.createElement('TD');
           td.width='75'; // you can set some elements related to the style directly through the DOM
           td.height='75';
           td.setAttribute("style", "background-color: blue");
           td.appendChild(document.createTextNode(" "));
           tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table); // add the table that was created in the DOM 
}

function createTable() {
    //Get input to decide if we are going to build a 7x7 table or 13x13
    let getRequest = true; 
    let answer = "";
    while( getRequest == true) {
        answer = prompt("Choose a table of either 7x7 or 13x13 by entering 7 or 13");
        if(answer == "7" || answer == "13") {
            getRequest = false;
            
        } else {
            alert("Wrong values. Enter a 7 or 13");
        }
    }
    addTable(answer);
    //temporary 
    start();
    
}

/********************************************This section is for the timer  code***********************************************************/ 


//timer is the array that we use to do math on in order to update the clock on the game page. We access this array in the runTimer function 
//minute, second, hundreths
var timer = [0,0,0,0];
var timerRunning = false;

//When we do math on the timer array it will not add a leading zero to numbers below 10. This is not how clocks works. This corrects that. 
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}


/***************************************Code to start and reset the game will go in this section*****************************/ 

//This function will be used to start the timer,load the images in place,and anything else that needs to happen when the user decides to begin play 
function start(){
    timerInterval = setInterval(runTimer, 10);
}


/****************************************This section is for functions that affect the look of the application************************/
function gridColor() {
    let color = prompt("Change the color! 'Y' for yellow. 'G' for green. 'R' for red. 'B' for Blue"); 
    let table = document.getElementById("myDynamicTable").getElementsByTagName("td");
    switch(color) {
        case 'Y': 
            for (cell in table) 
                table[cell].style.backgroundColor = "yellow";
            break;
        case 'R': 
            for (cell in table) 
                table[cell].style.backgroundColor = "red";
            break;
        case 'B': 
            for (cell in table) 
                table[cell].style.backgroundColor = "blue";
            break;
        case 'G': 
            for (cell in table) 
                table[cell].style.backgroundColor = "green";
            break;    
        default: 
            alert("Not an option");
            break; 
    }
}

/***************************************All of our eventListeners will go here***********************************************/
tableButton.addEventListener("click",createTable, false); 
gridButton.addEventListener("click", gridColor,false); 
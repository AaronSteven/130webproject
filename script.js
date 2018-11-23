//All of the constants that reference an element in the HTML go here 
const tableButton = document.getElementById("create");
const theTimer = document.getElementById("timer");
const blockButton = document.getElementById("changeBlockColor");
const gridButton = document.getElementById("changeGridColor");

//a list of global variables to assist some functions
var blockColor = "blue";

// need to do hover mouse let it glow
// user can change color of table
// user can change size of table
function addTable(colAndRowSize) {
    let myTableDiv = document.getElementById("myDynamicTable"); // need a handle to an element   
    let table = document.createElement('TABLE'); // creation of HTML code , notice you dont close the table !

	// Easy to get confused between CSS and DOM syntac to manipulate the attributes
    table.border='1';
	table.style.borderCollapse='collapse';
    let tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
    let sizerow = 0; 
    let sizecol = 0; 
    //fill the table with enough extra table rows and table data for the picross table to have the numbering for any row and column element combination 
    if(colAndRowSize == 7) {
        sizerow=colAndRowSize;
        sizecol=colAndRowSize;
        console.log("Row size is" + sizerow); 
        for (let i=0; i<sizerow; i++){
            let tr = document.createElement('TR');
            tableBody.appendChild(tr);
        for (let j=0; j<sizecol; j++){
                let td = document.createElement('TD');
                td.width='50'; // you can set some elements related to the style directly through the DOM
                td.height='50';
                td.setAttribute("style", "background-color: blue");
                td.appendChild(document.createTextNode(" "));
                tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table); // add the table that was created in the DOM
    table.setAttribute("style", "border-width: 3px");  
    table.setAttribute("style", "border-collapse: collapse");
    tableButton.style.display = 'none';
    table.setAttribute("style", "width: 53%");
    setPicrossTableElementColumnTableWidth();
    setPicrossElementTableRowTableWidth(7);
    addTableOnClickListener();
    createTablePicEmulatorArray(7); 
    
    
    } else { //we have a table cell of 13. We need 6 extra rows and columns to accommodate the max amount of single element insertions
        sizerow=colAndRowSize;
        sizecol=colAndRowSize;
        
        for (let i=0; i<sizerow; i++){
            let tr = document.createElement('TR');
            tableBody.appendChild(tr);
        for (let j=0; j<sizecol; j++){
                let td = document.createElement('TD');
                td.width='50'; // you can set some elements related to the style directly through the DOM
                td.height='35';
                td.setAttribute("style", "background-color: blue");
                td.appendChild(document.createTextNode(" "));
                tr.appendChild(td);
       }
    }
    myTableDiv.appendChild(table); // add the table that was created in the DOM
    table.setAttribute("style", "border-width: 3px");  
    table.setAttribute("style", "border-collapse: collapse");
    table.setAttribute("style", "width: 100%");
    table.setAttribute("style", "height: 100%");
    tableButton.style.display = 'none';
    setPicrossTableElementColumnTableWidth();
    createTablePicEmulatorArray(13);
    }

}

/* This is a simple function that creates the appropriate table data width values
for a pleasing aesthetic. Not really something that gets re-used in the program flow, but I didn't want to hard code the sizes. */
function setPicrossTableElementColumnTableWidth() {
    let colTable = document.getElementById("columnPicrossNumberTable");
    let rowLength = colTable.rows.length;
    let colLength = colTable.rows[0].cells.length;
    console.log("Col length is" + colLength);
    
    for(let i=0; i < rowLength; i++) {
        for(let j=0; j <colLength; j++) {
            colTable.rows[i].cells[j].style.width = '50px';
        }
    }
}


function setPicrossElementTableRowTableWidth(tableSize) {
    rowIndicators = document.getElementsByClassName("outerRowIndicator");
    
    //check for table size before setting the margin values b/c the heights of the tables for 7 and 13 are different 
    if(tableSize == 7) {
        for(let i=0; i<7; i++) {
            if(i == 0 || i == 7 || i == 14) {
                rowIndicators[i].style.marginTop = "2px";
            } else if(i == 1 || i == 8 || i == 15) {
                rowIndicators[i].style.marginTop = "30px";
            } else {
                rowIndicators[i].style.marginTop = "40px";
            }
        }
    } else { //table size is 13 
        
    }

}

function addTableOnClickListener() {
    table = document.getElementById("myDynamicTable");
    cells = table.getElementsByTagName("TD");
    
    for(let i=0; i < cells.length; i++) {
        cells[i].addEventListener("click", function() { 
        if(cells[i].style.backgroundColor == "black") {
            cells[i].style.backgroundColor = blockColor; 
          } else {
             cells[i].style.backgroundColor = "black"; 
          }
            
        });
    }
    
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

/********************************************This section is for the timer code***********************************************************/ 


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

//change the color of the table cells
function setBlockColor() {
    let color = prompt("Change the color! 'Y' for yellow. 'G' for green. 'R' for red. 'B' for Blue"); 
    let tableData = document.getElementById("myDynamicTable").getElementsByTagName("td");
    switch(color) {
        case 'Y': 
            for (let i=0; i <tableData.length; i++) {
                let data = tableData[i];//.style.borderColor = "yellow";
                data.style.backgroundColor = "yellow";
                blockColor = "yellow";
            }
            break;
        case 'R': 
            for (let i=0; i <tableData.length; i++) {
                let data = tableData[i];//.style.borderColor = "yellow";
                data.style.backgroundColor = "red";
                blockColor = "red";
            }
            break; 
        case 'B': 
            for (let i=0; i <tableData.length; i++) {
                let data = tableData[i];//.style.borderColor = "yellow";
                data.style.backgroundColor = "blue";
                blockColor = "blue";
            }
            break;
        case 'G': 
            for (let i=0; i <tableData.length; i++) {
                let data = tableData[i];//.style.borderColor = "yellow";
                data.style.backgroundColor = "green";
                blockColor = "green";
            }
            break;    
        default: 
            alert("Not an option");
            break; 
    }
}

//change the color of table grid 
function gridColor() {
    let color = prompt("Change the grid color! 'Y' for yellow. 'G' for green. 'R' for red. 'B' for Blue");
    let tableData = document.getElementById("myDynamicTable").getElementsByTagName("td");
    switch(color) {
        case 'Y':
            for (let i=0; i <tableData.length; i++) {
                let data = tableData[i];//.style.borderColor = "yellow";
                data.style.borderColor = "yellow";
            }
            break;
        case 'G':
            for (let i=0; i <tableData.length; i++) {
                let data = tableData[i];//.style.borderColor = "yellow";
                data.style.borderColor = "green";
            }
            break;
        case 'R':
            for (let i=0; i <tableData.length; i++) {
                let data = tableData[i];//.style.borderColor = "yellow";
                data.style.borderColor = "red";
            }
            break;
        case 'B':
            for (let i=0; i <tableData.length; i++) {
                let data = tableData[i];//.style.borderColor = "yellow";
                data.style.borderColor = "blue";
            }
            break;
        default: 
            alert("Not an option");
            break; 
    }    
}


/*************************************************************Code for Creating Levels*******************************************/ 

//Goal of this function is to randomly fill the dynamic table we have created with elements to satisfy requirmement #9 
function createRandomLevel() {
    
    
}


/***************************************All of our eventListeners will go here***********************************************/
tableButton.addEventListener("click",createTable, false); 
blockButton.addEventListener("click", setBlockColor,false); 
gridButton.addEventListener("click", gridColor, false); 



/*****************************************Workspace-For Code That is in Progress and not assigned to a specific comment block*************/

var tablePicEmulator = [];
function createTablePicEmulatorArray(tableSize) {
    
    //Fill a multidimensional array with the value empty
    if(tableSize == 7) { 
        let fillArray = ['e','e','e','e','e','e','e'];
        for(let i=0; i<tableSize; i++) {
           tablePicEmulator.push(fillArray);
        }
    }
    
    if(tableSize == 13) {
       let fillArray = ['e','e','e','e','e','e','e','e','e','e','e','e','e'];
        for(let i=0; i<tableSize; i++) {
           tablePicEmulator.push(fillArray);
        } 
    }
     
   console.log("Here is our table representation:");
   console.log(tablePicEmulator);   
   
}

function fillTablePicEmulatorArray(tableSize) {
    
}
   

/*
Ideas: Make a 2D array to simulate the table. Randomly assign a spot as empty, 'e', or image, 'i'. Then run through the table rows 
and columns, and whenever a spot for the array is 'i' give it class labeled "picSquare". Then, after a player has "finished" 
and they want to check their solution, they have to click "check puzzle." It will scan the table and look for the spots
squares marked "picImage" to see if they have been clicked (indicated by being black). If they have been we add score? If they 
haven't been we deduct. If wrong squares are clicked we mark red and deduct. Will want a way to undo the check eventually, 
but i don';t care too much about that right now. 
Can this scale to the bringing in a pixelized image? I believe that b/c we can mark the array to indicate the correct image 
position, this approach will still work with the image pulling we are also required to do. 

/*

  */ 

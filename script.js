//All of the constants that reference an element in the HTML go here 
const tableButton = document.getElementById("create");
const theTimer = document.getElementById("timer");
const blockButton = document.getElementById("changeBlockColor");
const gridButton = document.getElementById("changeGridColor");
const gradeButton = document.getElementById("getScore"); 

//a list of global variables to assist some functions
var blockColor = "blue";
var tablePicEmulator = [];

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
    //Finishing touches for the table are put here
    myTableDiv.appendChild(table); // add the table that was created in the DOM
    table.setAttribute("style", "border-width: 3px");  
    table.setAttribute("style", "border-collapse: collapse");
    tableButton.style.display = 'none';
    table.setAttribute("style", "width: 53%");
    setPicrossTableElementColumnTableWidth();
    setPicrossElementTableRowTableWidth(7);
    addTableOnClickListener();
    createTablePicEmulatorArray(7);
    setPicrossNumbers(7); 
    
    
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
    rowIndicators = document.getElementsByClassName("RowIndicator");
    rowIndicators2 = document.getElementsByClassName("RowIndicator2");
    rowIndicators3 = document.getElementsByClassName("RowIndicator3");
    rowIndicators4 = document.getElementsByClassName("RowIndicator4");
    rowIndicators5 = document.getElementsByClassName("RowIndicator5");
    rowIndicators6 = document.getElementsByClassName("RowIndicator6");
    rowIndicators7 = document.getElementsByClassName("RowIndicator7");
    console.log(rowIndicators);
      
    //goal: Test that we can actually move everything and that we can use innerHTML to change the row values before filling out all 7 
    
    
    //check for table size before setting the margin values b/c the heights of the tables for 7 and 13 are different 
    if(tableSize == 7) {
        for(let picrossRow=1; picrossRow < 8; picrossRow++) {    
            switch(picrossRow) {
                case 1:
                    for(let i=0; i<7; i++) {
                        if(i == 0) {
                            rowIndicators[i].style.marginTop = "2px";
                        }  
                        else if(i == 1) {
                            rowIndicators[i].style.marginTop = "30px";
                        } 
                        else {
                            rowIndicators[i].style.marginTop = "40px";
                        }
                    }
                    break; 
                case 2: 
                    for(let i=0; i<7; i++) {
                        if(i == 0) {
                            rowIndicators2[i].style.marginTop = "2px";
                        }  
                        else if(i == 1) {
                            rowIndicators2[i].style.marginTop = "30px";
                        } 
                        else {
                            rowIndicators2[i].style.marginTop = "40px";
                        }
                    }
                    break; 
                case 3: 
                    for(let i=0; i<7; i++) {
                        if(i == 0) {
                            rowIndicators3[i].style.marginTop = "2px";
                        }  
                        else if(i == 1) {
                            rowIndicators3[i].style.marginTop = "30px";
                        } 
                        else {
                            rowIndicators3[i].style.marginTop = "40px";
                        }
                    }
                    break; 
                case 4:
                    for(let i=0; i<7; i++) {
                        if(i == 0) {
                            rowIndicators4[i].style.marginTop = "2px";
                        }  
                        else if(i == 1) {
                            rowIndicators4[i].style.marginTop = "30px";
                        } 
                        else {
                            rowIndicators4[i].style.marginTop = "40px";
                        }
                    }
                    break; 
                case 5:
                    for(let i=0; i<7; i++) {
                        if(i == 0) {
                            rowIndicators5[i].style.marginTop = "2px";
                        }  
                        else if(i == 1) {
                            rowIndicators5[i].style.marginTop = "30px";
                        } 
                        else {
                            rowIndicators5[i].style.marginTop = "40px";
                        }
                    }
                    break; 
                case 6:
                    for(let i=0; i<7; i++) {
                        if(i == 0) {
                            rowIndicators6[i].style.marginTop = "2px";
                        }  
                        else if(i == 1) {
                            rowIndicators6[i].style.marginTop = "30px";
                        } 
                        else {
                            rowIndicators6[i].style.marginTop = "40px";
                        }
                    }
                    break; 
                case 7:
                    for(let i=0; i<7; i++) {
                        if(i == 0) {
                            rowIndicators7[i].style.marginTop = "2px";
                        }  
                        else if(i == 1) {
                            rowIndicators7[i].style.marginTop = "30px";
                        } 
                        else {
                            rowIndicators7[i].style.marginTop = "40px";
                        }
                    }
                    break; 
            }
        }
    } else { //table size is 13 
        
    } 

}

function setPicrossNumbers(tableSize) {
    //tracking by row
    rowIndicator = document.getElementsByClassName("RowIndicator");  
    rowIndicator2 = document.getElementsByClassName("RowIndicator2"); 
    rowIndicator3 = document.getElementsByClassName("RowIndicator3");
    rowIndicator4 = document.getElementsByClassName("RowIndicator4");
    rowIndicator5 = document.getElementsByClassName("RowIndicator5");
    rowIndicator6 = document.getElementsByClassName("RowIndicator6");
    rowIndicator7 = document.getElementsByClassName("RowIndicator7");
    
    
    //create arrays that repreent the individual picross row numbers row by row 
    actualRow = [];
    actualRow.push(rowIndicator[0]); actualRow.push(rowIndicator2[0]); actualRow.push(rowIndicator3[0]);actualRow.push(rowIndicator4[0]); actualRow.push(rowIndicator5[0]); actualRow.push(rowIndicator6[0]);actualRow.push(rowIndicator7[0]);
     
    
    actualRow2 = []; 
    actualRow2.push(rowIndicator[1]); actualRow2.push(rowIndicator2[1]); actualRow2.push(rowIndicator3[1]); actualRow2.push(rowIndicator4[1]); actualRow2.push(rowIndicator5[1]); actualRow2.push(rowIndicator6[1]); actualRow2.push(rowIndicator7[1]);
    
    actualRow3 = []; 
    actualRow3.push(rowIndicator[2]); actualRow3.push(rowIndicator2[2]); actualRow3.push(rowIndicator3[2]); actualRow3.push(rowIndicator4[2]); actualRow3.push(rowIndicator5[2]); actualRow3.push(rowIndicator6[2]); actualRow3.push(rowIndicator7[2]);
    
    actualRow4 = []; 
    actualRow4.push(rowIndicator[3]); actualRow4.push(rowIndicator2[3]); actualRow4.push(rowIndicator3[3]); actualRow4.push(rowIndicator4[3]);actualRow4.push(rowIndicator5[3]); actualRow4.push(rowIndicator6[3]); actualRow4.push(rowIndicator7[3]);
    
    actualRow5 = []; 
    actualRow5.push(rowIndicator[4]); actualRow5.push(rowIndicator2[4]);actualRow5.push(rowIndicator3[4]); actualRow5.push(rowIndicator4[4]); actualRow5.push(rowIndicator5[4]); actualRow5.push(rowIndicator6[4]); actualRow5.push(rowIndicator7[4]);
    
    actualRow6 = []; 
    actualRow6.push(rowIndicator[5]); actualRow6.push(rowIndicator2[5]); actualRow6.push(rowIndicator3[5]);actualRow6.push(rowIndicator4[5]);actualRow6.push(rowIndicator5[5]); actualRow6.push(rowIndicator6[5]); actualRow6.push(rowIndicator7[5]);

    actualRow7 = []; 
    actualRow7.push(rowIndicator[6]); actualRow7.push(rowIndicator2[6]); actualRow7.push(rowIndicator3[6]); actualRow7.push(rowIndicator4[6]); actualRow7.push(rowIndicator5[6]); actualRow7.push(rowIndicator6[6]); actualRow7.push(rowIndicator7[6]);
    
    //Now extract the rows (which are arrays) from the tableEmulatorArray
    tableRow = tablePicEmulator[0]; 
    tableRow2 = tablePicEmulator[1];
    tableRow3 = tablePicEmulator[2];
    tableRow4 = tablePicEmulator[3];
    tableRow5 = tablePicEmulator[4];
    tableRow6 = tablePicEmulator[5];
    tableRow7 = tablePicEmulator[6];
    
    if(tableSize == 7) {
    
    
    //go through the rows one by one, setting the picross row numbers as we do
    let picrossRowIterator = 0; 
    let newInsert = true; 
    let hitTracker = 0; 
    for(let i=0; i < 7; i++) {
       if( tableRow[i] == 'p') {
           console.log("We have a hit in the row"); 
           hitTracker++;
           actualRow[picrossRowIterator].innerHTML = hitTracker.toString(10);
           actualRow[picrossRowIterator].style.visibility = 'visible'; 
           newInsert = false; 
       }  else if( tableRow[i] == 'e' && newInsert == false) { //note to self, this area is a good candidate for any bugs that may crop up 
           picrossRowIterator++; 
           newInsert  = true; 
           hitTracker = 0; 
       }
    }
    
    //targeting second picross number row 
    picrossRowIterator = 0; 
    newInsert = true; 
    hitTracker = 0; 
    for(let i=0; i < 7; i++) {
       if( tableRow2[i] == 'p') {
           console.log("We have a hit in the row"); 
           hitTracker++;
           actualRow2[picrossRowIterator].innerHTML = hitTracker.toString(10);  
           actualRow2[picrossRowIterator].style.visibility = 'visible';
           newInsert = false; 
       }  else if( tableRow2[i] == 'e' && newInsert == false) { //note to self, this area is a good candidate for any bugs that may crop up 
           picrossRowIterator++; 
           newInsert  = true; 
           hitTracker = 0; 
       }
    }

    picrossRowIterator = 0; 
    newInsert = true; 
    hitTracker = 0; 
    for(let i=0; i < 7; i++) {
       if( tableRow3[i] == 'p') {
           console.log("We have a hit in the row"); 
           hitTracker++;
           actualRow3[picrossRowIterator].innerHTML = hitTracker.toString(10);
           actualRow3[picrossRowIterator].style.visibility = 'visible';           
           newInsert = false; 
       }  else if( tableRow3[i] == 'e' && newInsert == false) { //note to self, this area is a good candidate for any bugs that may crop up 
           picrossRowIterator++; 
           newInsert  = true; 
           hitTracker = 0; 
       }
    }

    picrossRowIterator = 0; 
    newInsert = true; 
    hitTracker = 0; 
    for(let i=0; i < 7; i++) {
       if( tableRow4[i] == 'p') {
           console.log("We have a hit in the row"); 
           hitTracker++;
           actualRow4[picrossRowIterator].innerHTML = hitTracker.toString(10);
           actualRow4[picrossRowIterator].style.visibility = 'visible';
           newInsert = false; 
       }  else if( tableRow4[i] == 'e' && newInsert == false) { //note to self, this area is a good candidate for any bugs that may crop up 
           picrossRowIterator++; 
           newInsert  = true; 
           hitTracker = 0; 
       }
    }

    picrossRowIterator = 0; 
    newInsert = true; 
    hitTracker = 0; 
    for(let i=0; i < 7; i++) {
       if( tableRow5[i] == 'p') {
           console.log("We have a hit in the row"); 
           hitTracker++;
           actualRow5[picrossRowIterator].innerHTML = hitTracker.toString(10);
           actualRow5[picrossRowIterator].style.visibility = 'visible';           
           newInsert = false; 
       }  else if( tableRow5[i] == 'e' && newInsert == false) { //note to self, this area is a good candidate for any bugs that may crop up 
           picrossRowIterator++; 
           newInsert  = true; 
           hitTracker = 0; 
       }
    }

    
    picrossRowIterator = 0; 
    newInsert = true; 
    hitTracker = 0; 
        
    for(let i=0; i < 7; i++) {
       if( tableRow6[i] == 'p') {
           console.log("We have a hit in the row"); 
           hitTracker++;
           actualRow6[picrossRowIterator].innerHTML = hitTracker.toString(10);
           actualRow6[picrossRowIterator].style.visibility = 'visible';           
           newInsert = false; 
       }  else if( tableRow6[i] == 'e' && newInsert == false) { //note to self, this area is a good candidate for any bugs that may crop up 
           picrossRowIterator++; 
           newInsert  = true; 
           hitTracker = 0; 
       }
    }
        
    

    picrossRowIterator = 0; 
    newInsert = true; 
    hitTracker = 0; 
        
    for(let i=0; i < 7; i++) {
       if( tableRow7[i] == 'p') {
           console.log("We have a hit in the row"); 
           hitTracker++;
           actualRow7[picrossRowIterator].innerHTML = hitTracker.toString(10);
           actualRow7[picrossRowIterator].style.visibility = 'visible';           
           newInsert = false; 
       }  else if( tableRow7[i] == 'e' && newInsert == false) { //note to self, this area is a good candidate for any bugs that may crop up 
           picrossRowIterator++; 
           newInsert  = true; 
           hitTracker = 0; 
       }
    }
    
  
     
    //tracking by column 
    
    let colTable = document.getElementById("columnPicrossNumberTable");
    let rowLength = 7;
    let colLength = 7;
    
    //begin setting the numbers by following the same process as above
    newInsert = true; 
    hitTracker = 0;
    picrossColumnIterator = 6; //bc it is the max column length in a 7x7 table with a 0-6 indexing 
    for(let i=0; i < rowLength; i++) {
        hitTracker = 0;
        picrossColumnIterator = 6;
        newInsert = true 
        for(let j=0; j < colLength; j++) {
            if(tablePicEmulator[j][i] == 'p') { //traverse down the columns of the 2d array 
                hitTracker++; 
                colTable.rows[picrossColumnIterator].cells[i].innerHTML = hitTracker;
                colTable.rows[picrossColumnIterator].cells[i].style.visibility = 'visible';
                newInsert = false; 
                
            } else if (tablePicEmulator[j][i] == 'e' && newInsert == false) {
                newInsert = true; 
                hitTracker = 0;
                picrossColumnIterator--;
            }            
        }
    }
    
  } //end if statement 
    
    
}


function addTableOnClickListener() {
    table = document.getElementById("myDynamicTable");
    cells = table.getElementsByTagName("TD");
    
    for(let i=0; i < cells.length; i++) {
        cells[i].addEventListener("click", cells[i].fn= function() {
        
        if(cells[i].style.backgroundColor == "black") {
            cells[i].style.backgroundColor = blockColor; 
          } else {
             cells[i].style.backgroundColor = "black"; 
          }
            
        }, false);
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
    console.log(tableData);
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
gradeButton.addEventListener("click", scoreTheLevel, false); 


/*****************************************Workspace-For Code That is in Progress and not assigned to a specific comment block*************/


function createTablePicEmulatorArray(tableSize) {
    
    //Fill a multidimensional array with the value empty
    if(tableSize == 7) { 
        for(let i=0; i<tableSize; i++) {
            let row = fillTablePicEmulatorRow(tableSize);
            tablePicEmulator.push(row); 
        }
    }
    
    
    
    if(tableSize == 13) {
        for(let i=0; i<tableSize; i++) {
          let row = fillTablePicEmulatorRow(tableSize); 
          tablePicEmulator.push(row); 
        } 
    }
     
   console.log("Here is our table representation:");
   console.log(tablePicEmulator);
}

//This function fills up a row of the tableEmulatorArray with a random amount of contgious, randomly sized blocks of 'p' that fit the array 
function fillTablePicEmulatorRow(tableSize) {
            let row = [];
            if(tableSize == 7) {
                 row = ['e','e','e','e','e','e','e'];
            } else {
                 row = ['e','e','e','e','e','e','e','e','e','e','e','e','e'];
            }
            
            for(let j=0; j < tableSize; j++) {
                console.log("Value of j at start of loop is: " + j);
                //generate contigous block for inserting 'P' which indicates it is a pixel position 
                let pixelBlock = (Math.random() * ((tableSize-j) - 0 + 1)) + 0;
                pixelBlock = Math.floor(pixelBlock); 
                console.log("The amount of space in the row is: " + (tableSize-j));
                console.log("The size of the randomly generated number is: " + pixelBlock);
                for(let fillPixels=0; fillPixels < pixelBlock; fillPixels++) {
                    console.log("The value of j in the fill loop is: " + j); 
                    row[j] = 'p';
                    j++;
                }
                console.log("Value of j at the end of loop is: " + j);
            }
            return row; 
} 

//Score =  max((number of non-space elements - number of errors),0)/ number of non-space elements.
//Non-space element is any table cell that does have a pixel that contributes to the whole image 
//an error is any pixel cell that isn't clicked, and every non-pixel cell that is clicked 
function scoreTheLevel(){
    let tableSize = 0; 
    let nonSpaceElements = 0;
    let numberOfErrors = 0;
    let score = 0;
    let tableData = document.getElementById("myDynamicTable").getElementsByTagName("td");
    if (tableData.length == 49) {
        tableSize = 7; 
    } else{
        tableSize = 13; 
    }
    
    
    if (tableSize == 7) {
        
        let tableRow1 = []; 
        let tableRow2 = [];
        let tableRow3 = [];
        let tableRow4 = [];
        let tableRow5 = [];
        let tableRow6 = [];
        let tableRow7 = [];

        
        for (let i=0; i<7; i++)
                tableRow1.push(tableData[i]);
        
        for (let i=7; i<14; i++)
                tableRow2.push(tableData[i]);
        
        for (let i=14; i<21; i++)
                tableRow3.push(tableData[i]);
        
        for (let i=21; i<28; i++)
                tableRow4.push(tableData[i]);
        
        for (let i=28; i<35; i++)
                tableRow5.push(tableData[i]);
        
        for (let i=35; i<42; i++)
                tableRow6.push(tableData[i]);
        
        for (let i=42; i<49; i++)
                tableRow7.push(tableData[i]);
        
        
        //find the number of non-space elements
        for(let i=0; i < tableSize; i++) {
            for (let j=0; j < tableSize; j++) {
                if(tablePicEmulator[i][j] == 'p')
                    nonSpaceElements++; 
            
            }
        }

        //find the number of errors
         for(let i=0; i < 1; i++) {
            for (let j=0; j < tableSize; j++) {
                if((tablePicEmulator[i][j] == 'p' && tableRow1[j].style.backgroundColor != 'black')  || (tablePicEmulator[i][j] == 'e' && tableRow1[j].style.backgroundColor == 'black')) {
                    numberOfErrors++; 
                } 
                    
            }
        }
        
        for(let i=1; i < 2; i++) {
            for (let j=0; j < tableSize; j++) {
                if((tablePicEmulator[i][j] == 'p' && tableRow2[j].style.backgroundColor != 'black')  || (tablePicEmulator[i][j] == 'e' && tableRow2[j].style.backgroundColor == 'black')) {
                    numberOfErrors++; 
                } 
                    
            }
        }
        
        for(let i=2; i < 3; i++) {
            for (let j=0; j < tableSize; j++) {
                if((tablePicEmulator[i][j] == 'p' && tableRow3[j].style.backgroundColor != 'black')  || (tablePicEmulator[i][j] == 'e' && tableRow3[j].style.backgroundColor == 'black')) {
                    numberOfErrors++; 
                } 
                    
            }
        }
        
        for(let i=3; i < 4; i++) {
            for (let j=0; j < tableSize; j++) {
                if((tablePicEmulator[i][j] == 'p' && tableRow4[j].style.backgroundColor != 'black')  || (tablePicEmulator[i][j] == 'e' && tableRow4[j].style.backgroundColor == 'black')) {
                    numberOfErrors++; 
                } 
                    
            }
        }
        
        for(let i=4; i < 5; i++) {
            for (let j=0; j < tableSize; j++) {
                if((tablePicEmulator[i][j] == 'p' && tableRow5[j].style.backgroundColor != 'black')  || (tablePicEmulator[i][j] == 'e' && tableRow5[j].style.backgroundColor == 'black')) {
                    numberOfErrors++; 
                } 
                    
            }
        }
        
        for(let i=5; i < 6; i++) {
            for (let j=0; j < tableSize; j++) {
                if((tablePicEmulator[i][j] == 'p' && tableRow6[j].style.backgroundColor != 'black')  || (tablePicEmulator[i][j] == 'e' && tableRow6[j].style.backgroundColor == 'black')) {
                    numberOfErrors++; 
                } 
                    
            }
        }
        
        for(let i=6; i < 7; i++) {
            for (let j=0; j < tableSize; j++) {
                if((tablePicEmulator[i][j] == 'p' && tableRow7[j].style.backgroundColor != 'black')  || (tablePicEmulator[i][j] == 'e' && tableRow7[j].style.backgroundColor == 'black')) {
                    numberOfErrors++; 
                } 
                    
            }
        }
        
        score = Math.max((nonSpaceElements-numberOfErrors), 0);
        score = score/nonSpaceElements;
        


    
    
    }
    
    
    //make same for 13x13 table
    
    
    //place score on the board somewhere, and lock the board and force the creation of a new level 
    alert("Your score is: " + score); 
    
    //freeze the board so the score cannot be updated after the first attempt 
    freezeTheBoard(); 
    
}

//called after user requests that they get their score from the board. This function locks their attempts to play any more on the game board. 
function freezeTheBoard() {
    table = document.getElementById("myDynamicTable");
    cells = table.getElementsByTagName("TD");
    for(let i=0; i < cells.length; i++) {
        cells[i].removeEventListener("click", cells[i].fn, false); 
    }
}
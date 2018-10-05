
// need to do hover mouse let it glow
// user can change color of table
// user can change size of table
// 
function addTable() {
    let myTableDiv = document.getElementById("myDynamicTable"); // need a handle to an element   
    let table = document.createElement('TABLE'); // creation of HTML code , notice you dont close the table !
	
	// Easy to get confused between CSS and DOM syntac to manipulate the attributes
    table.border='1';
	table.style.borderCollapse='collapse';
    let tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
	let sizerow=7;
	let sizecol=7;
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
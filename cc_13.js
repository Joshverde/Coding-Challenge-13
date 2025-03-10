const employeeContainer = document.getElementById("employeeContainer")
// Task 2 Function
function employeeCardCreator(name,position){ // declares function and parameters
    const card = document.createElement('div')  // creates div
    card.setAttribute('class','employee-card') // assigns class

    // Creates the header with the employee name 
    const header =  document.createElement('h1')
    header.setAttribute('class', "employee-name")
    header.textContent = name;
    card.appendChild(header) // appends to card

    // creates paragraph with employee position
    const paragraph =  document.createElement('p')
    paragraph.setAttribute('class',"employee-position")
    paragraph.textContent = position;
    card.appendChild(paragraph) // appends to card

    // remove button
    const removeButton = document.createElement("button");
    removeButton.setAttribute("class", "remove-button"); // sets button class
    removeButton.textContent = "Remove"; // sets button text

    removeButton.addEventListener("click",(event) => { // adds an event listner
        event.stopPropagation();  // stops propogation from bubbling
        employeeContainer.removeChild(card); // removes card when clicked
    });
    card.appendChild(removeButton) // appends to card
    employeeContainer.appendChild(card) // appends to container

    // Task 5
    const editButton = document.createElement('button') // creates an edit button
    editButton.setAttribute('class', 'edit-button') // assigns class
    editButton.textContent = 'Edit' // names button 
    card.appendChild(editButton) // appeands to card

    editButton.addEventListener('dblclick',(event) =>{ // allows employee info to be edited upon double click
        event.stopPropagation(); // stops propagation
        editEmployeeCard(card)
    })


}

employeeCardCreator('John','Project Manager') // calling function
employeeCardCreator('brian','Sales') // calling function
employeeCardCreator('trent','Sales') // calling function

// Task 3
const cardList = document.querySelectorAll('.employee-card') // selects all cards in employee card class
const cardArray = Array.from(cardList) // converts node list to an array

cardArray.forEach(card => { // creates forEach statement 
    card.style.backgroundColor = "darkgreen"; // adds a dark green background
    card.style.border = "5px solid black" // adds a black solid border
    card.style.padding = "20px" // adds padding to each card
    card.style.color = "white" // changes text to white
    card.style.margin = "10px" // adds space between the cards
    card.style.borderRadius = "20px" // rounds the corners 
});

// Task 4
employeeContainer.addEventListener('click',()=>{
    console.log("Card has been") // logs when a card is clicked
})

// Task 5
function editEmployeeCard(card){
    const employeeName = card.querySelector('.employee-name'); // estavlishes name
    const employeePosition = card.querySelector('.employee-position'); // establishes position

    const nameInput = document.createElement('input') // creates an input field for name
    nameInput.value = employeeName.textContent //  identifys which text is being edited
    const positionInput = document.createElement('input')  // creates an input field for position
    positionInput.value = employeePosition.textContent // identifys which text is being edited

    const saveButton = document.createElement('button')  // creates save button
    saveButton.textContent = "Save"  // names save button
    
    saveButton.addEventListener('click',()=>{
        employeeName.textContent = nameInput.value // new name text to display
        employeePosition.textContent = positionInput.value  // new position text to display
        saveButton.remove(); // removes save button
    })
    
    employeeName.appendChild(nameInput) // appends  name input to employee name
    employeePosition.appendChild(positionInput) //appends position input to employee position

    card.appendChild(saveButton) // appends savebutton to card
}
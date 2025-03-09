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
}
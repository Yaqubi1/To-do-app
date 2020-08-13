let toDoClickCounter = 0;
let finishedButtonCounter = 0;
let changeButtonCounter = 0;
let changeButtonCounter2 = 0;
let removeButtonCounter = 0;
let removeButtonCounter2 = 0;

// if the submit button with the id addTodo is clicked on, run the function below
document.getElementById("addTodo").addEventListener("click", function addToDoList() {
    // get value of first input field
    let valueOfFirstInputField = document.getElementById("syssla").value;

    // if the input field is empty, alert and jump out of the whole function
    if (valueOfFirstInputField == "") {
      alert("En syssla måste skrivas in.");
      return;
    }

    toDoClickCounter++;

    // only the first time when we click on the submit button, the elements in the if argument should be executed
    if (toDoClickCounter == 1) {
        // create a header with some properties
        let toDoTitle = document.createElement("h1");
        toDoTitle.innerHTML = "Att göra";
        toDoTitle.setAttribute("id", "toDoTitle");
        // add the header as a child to the body element
        document.body.appendChild(toDoTitle);

        // create an unordered list with an id
        let toDoList = document.createElement("ul");
        toDoList.setAttribute("id", "toDoList");
        document.body.appendChild(toDoList);

        addListItemforToDoList();

    } else {
    addListItemforToDoList();
    }
    // clear the value written in the input field in the end
    document.getElementById("syssla").value = '';
});

function addListItemforToDoList() {

    let toDoListItem = document.createElement("li");
    toDoListItem.setAttribute("class", "toDoListItem");
    // add the list element as a child to the ul element created before
    document.getElementById("toDoList").appendChild(toDoListItem);

    let toDoListInput = document.createElement("input");
    toDoListInput.setAttribute("type", "text");
    toDoListInput.setAttribute("class", "form-control");
    // every input that is created gets a unique id
    toDoListInput.setAttribute("id", "changeButtonId" + changeButtonCounter);

    let syssla = document.getElementById("syssla");
    // put the value from the first input field in the new input field in the to do-list
    toDoListInput.setAttribute("value", syssla.value);

    // as a default it should be impossible to change the value in the input field
    toDoListInput.setAttribute("disabled", true)
    toDoListItem.appendChild(toDoListInput);

    let toDoListChangeButton = document.createElement("button");
    toDoListChangeButton.innerHTML = "Ändra";
    toDoListChangeButton.setAttribute("id", "changeButtonId" + changeButtonCounter);
    // bootstrap class
    toDoListChangeButton.setAttribute("class", "btn btn-warning");
    // if the button is clicked on, run the function
    toDoListChangeButton.setAttribute("onclick", "changeInToDo(event)");
    changeButtonCounter++;
    toDoListItem.appendChild(toDoListChangeButton);

    let toDoListFinishedButton = document.createElement("button");
    toDoListFinishedButton.innerHTML = "Färdig";
    toDoListFinishedButton.setAttribute("id", "finishedButton" + finishedButtonCounter);
    // run two functions if the button is clicked on
    toDoListFinishedButton.setAttribute("onclick", "createFinishedList(event); removeRowInToDo(event)");
    toDoListFinishedButton.setAttribute("class", "btn btn-success");
    
    finishedButtonCounter++;
    toDoListItem.appendChild(toDoListFinishedButton);

    let toDoListRemoveButton = document.createElement("button");
    toDoListRemoveButton.innerHTML = "Radera";
    toDoListRemoveButton.setAttribute("id", "removeButton" + removeButtonCounter);
    toDoListRemoveButton.setAttribute("class", "btn btn-danger");
    toDoListRemoveButton.setAttribute("onclick", "removeRowInToDo(event)");
    removeButtonCounter++;
    toDoListItem.appendChild(toDoListRemoveButton);
}

// if the toDoListChangeButton is clicked on, run the function
function changeInToDo(event) {

    // get the unique id of the button that is clicked on
    let uniqueIdOfClickedChangeButton = event.target.getAttribute("id");

    // if the input field is disabled, enable it
    if (document.getElementById(uniqueIdOfClickedChangeButton).parentElement.children[0].disabled == true) {
        document.getElementById(uniqueIdOfClickedChangeButton).parentElement.children[0].disabled = false;
    } else {
        // if the input field is enabled and the change button is clicked on, disable the input field if it isn't empty
        let valueOfChangedInputField = document.getElementById(uniqueIdOfClickedChangeButton).parentElement.children[0].value;
        if (valueOfChangedInputField == "") {
        alert("En syssla måste skrivas in.");
        return;
        } else {
            document.getElementById(uniqueIdOfClickedChangeButton).parentElement.children[0].disabled = true;
        }
    }   
}

// run this function if the finished button is clicked on in the to do-list
function createFinishedList(event) {
    let uniqueIdOfClickedFinishedButton = event.target.getAttribute("id");

    // if there is no 5th child to the body, run the code below
    if (typeof document.body.children[5] === "undefined") {
        let finishedTitle = document.createElement("h1");
        finishedTitle.innerHTML = "Färdiga";
        finishedTitle.setAttribute("id", "finishedTitle");
        document.body.appendChild(finishedTitle);

        let finishedList = document.createElement("ul");
        finishedList.setAttribute("id", "finishedList");
        document.body.appendChild(finishedList);
    }

    let finishedListItem = document.createElement("li");
    finishedListItem.setAttribute("class", "finishedListItem");
    document.getElementById("finishedList").appendChild(finishedListItem);

    let finishedListInput = document.createElement("input");
    // bootstrap class
    finishedListInput.setAttribute("class", "form-control");
    finishedListInput.setAttribute("type", "text");

    // get the value of the input field next to the finished button
    let syssla2 = document.getElementById(uniqueIdOfClickedFinishedButton).parentElement.children[0].value;
    finishedListInput.setAttribute("value", syssla2);

    finishedListInput.setAttribute("disabled", true)
    finishedListItem.appendChild(finishedListInput);

    let finishedListChangeButton = document.createElement("button");
    finishedListChangeButton.innerHTML = "Ändra";
    finishedListChangeButton.setAttribute("id", "changeButtonId2" + changeButtonCounter2);
    finishedListChangeButton.setAttribute("class", "btn btn-warning");
    finishedListChangeButton.setAttribute("onclick", "changeInFinished(event)");
    changeButtonCounter2++;
    finishedListItem.appendChild(finishedListChangeButton);

    let finishedListRemoveButton = document.createElement("button");
    finishedListRemoveButton.innerHTML = "Radera";
    finishedListRemoveButton.setAttribute("id", "removeButton2" + removeButtonCounter2);
    finishedListRemoveButton.setAttribute("class", "btn btn-danger");
    finishedListRemoveButton.setAttribute("onclick", "removeRowInFinished(event)");
    removeButtonCounter++;
    finishedListItem.appendChild(finishedListRemoveButton);
}

function removeRowInToDo(event) {
    removeButtonCounter--;
    toDoClickCounter--;
    let uniqueIdOfRemoveOrFinishedButton = event.target.getAttribute("id");

    // remove the header and whole row if there is only one row
    if (typeof document.getElementById(uniqueIdOfRemoveOrFinishedButton).parentElement.parentElement.children[0] === "undefined" || typeof document.getElementById(uniqueIdOfRemoveOrFinishedButton).parentElement.parentElement.children[1] === "undefined") {
        
        document.getElementById(uniqueIdOfRemoveOrFinishedButton).parentElement.parentElement.previousSibling.remove();
        document.getElementById(uniqueIdOfRemoveOrFinishedButton).parentElement.parentElement.remove();
    } else {
        // only remove one row
        document.getElementById(uniqueIdOfRemoveOrFinishedButton).parentElement.remove();
    }
}

// if the change button is clicked on in the finished list, run the function
function changeInFinished(event) {
    let uniqueIdOfClickedChangeButton = event.target.getAttribute("id");
    if (document.getElementById(uniqueIdOfClickedChangeButton).previousSibling.disabled == true) {
        document.getElementById(uniqueIdOfClickedChangeButton).previousSibling.disabled = false;
    } else {
        let valueOfChangedInputField = document.getElementById(uniqueIdOfClickedChangeButton).previousSibling.value;
        if (valueOfChangedInputField == "") {
        alert("En syssla måste skrivas in.");
        return;
        } else {
        document.getElementById(uniqueIdOfClickedChangeButton).previousSibling.disabled = true;
        }
    }
}

function removeRowInFinished(event) {
    removeButtonCounter2--;
    let uniqueIdOfClickedRemoveButton = event.target.getAttribute("id");

    if (typeof document.getElementById(uniqueIdOfClickedRemoveButton).parentElement.parentElement.children[0] === "undefined" || typeof document.getElementById(uniqueIdOfClickedRemoveButton).parentElement.parentElement.children[1] === "undefined") {
        
        document.getElementById(uniqueIdOfClickedRemoveButton).parentElement.parentElement.previousSibling.remove();
        document.getElementById(uniqueIdOfClickedRemoveButton).parentElement.parentElement.remove();
    } else {
        document.getElementById(uniqueIdOfClickedRemoveButton).parentElement.remove();
    }
}
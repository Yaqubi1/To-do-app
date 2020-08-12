let toDoClickCounter = 0;
let finishedClickCounter = 0;
let finishedButtonCounter = 0;
let changeButtonCounter = 0;
let changeButtonCounter2 = 0;

document.getElementById("addTodo").addEventListener("click", function addToDoList() {
    let x = document.getElementById("syssla").value;
    if (x == "") {
      alert("En syssla måste skrivas in.");
      return;
    }
    toDoClickCounter++;
    if (toDoClickCounter == 1) {
        let toDoTitle = document.createElement("h1");
        toDoTitle.innerHTML = "Att göra";
        toDoTitle.setAttribute("id", "toDoTitle");
        document.body.appendChild(toDoTitle);

        let toDoList = document.createElement("ul");
        toDoList.setAttribute("id", "toDoList");
        document.body.appendChild(toDoList);

        addListItemforToDoList();

    } else {
    addListItemforToDoList();
    // resetForm();
    }
});

function addListItemforToDoList() {

    let toDoListItem = document.createElement("li");
    toDoListItem.setAttribute("class", "toDoListItem");
    document.getElementById("toDoList").appendChild(toDoListItem);

    let toDoListInput = document.createElement("input");
    toDoListInput.setAttribute("type", "text");
    toDoListInput.setAttribute("id", "changeButtonId" + changeButtonCounter);

    let syssla = document.getElementById("syssla");
    toDoListInput.setAttribute("value", syssla.value);

    toDoListInput.setAttribute("disabled", true)
    toDoListItem.appendChild(toDoListInput);

    let toDoListChangeButton = document.createElement("button");
    toDoListChangeButton.innerHTML = "Ändra";
    toDoListChangeButton.setAttribute("id", "changeButtonId" + changeButtonCounter);
    toDoListChangeButton.setAttribute("onclick", "changeInToDo(event)");
    changeButtonCounter++;
    toDoListItem.appendChild(toDoListChangeButton);

    let toDoListFinishedButton = document.createElement("button");
    toDoListFinishedButton.innerHTML = "Färdig";
    toDoListFinishedButton.setAttribute("id", "finishedButton" + finishedButtonCounter);
    toDoListFinishedButton.setAttribute("onclick", "createFinishedList(event); removeRowInToDo(event)");
    finishedButtonCounter++;
    toDoListItem.appendChild(toDoListFinishedButton);

}

function changeInToDo(event) {
    let y = event.target.getAttribute("id");
    if (document.getElementById(y).parentElement.children[0].disabled == true) {
        document.getElementById(y).parentElement.children[0].disabled = false;
    } else {
        document.getElementById(y).parentElement.children[0].disabled = true;
    }
    
}

function createFinishedList(event) {
    toDoClickCounter--;
    finishedClickCounter++;
    let yx = event.target.getAttribute("id");
    if (typeof document.body.children[5] === "undefined") {
        let finishedTitle = document.createElement("h1");
        finishedTitle.innerHTML = "Färdiga";
        finishedTitle.setAttribute("id", "finishedTitle");
        document.body.appendChild(finishedTitle);

        let finishedList = document.createElement("ul");
        finishedList.setAttribute("id", "finishedList");
        document.body.appendChild(finishedList);

        let finishedListItem = document.createElement("li");
        finishedListItem.setAttribute("class", "finishedListItem");
        document.getElementById("finishedList").appendChild(finishedListItem);

        let finishedListInput = document.createElement("input");
        finishedListInput.setAttribute("type", "text");

        let syssla2 = document.getElementById(yx).parentElement.children[0].value;
        finishedListInput.setAttribute("value", syssla2);

        finishedListInput.setAttribute("disabled", true)
        finishedListItem.appendChild(finishedListInput);

        let finishedListChangeButton = document.createElement("button");
        finishedListChangeButton.innerHTML = "Ändra";
        finishedListChangeButton.setAttribute("id", "changeButtonId2" + changeButtonCounter2);
        finishedListChangeButton.setAttribute("onclick", "changeInFinished(event)");
        changeButtonCounter2++;
        finishedListItem.appendChild(finishedListChangeButton);

    } else {
        let finishedListItem = document.createElement("li");
        finishedListItem.setAttribute("class", "finishedListItem");
        document.getElementById("finishedList").appendChild(finishedListItem);

        let finishedListInput = document.createElement("input");
        finishedListInput.setAttribute("type", "text");

        let syssla2 = document.getElementById(yx).parentElement.children[0].value;
        finishedListInput.setAttribute("value", syssla2);

        finishedListInput.setAttribute("disabled", true)
        finishedListItem.appendChild(finishedListInput);

        let finishedListChangeButton = document.createElement("button");
        finishedListChangeButton.innerHTML = "Ändra";
        finishedListChangeButton.setAttribute("id", "changeButtonId2" + changeButtonCounter2);
        finishedListChangeButton.setAttribute("onclick", "changeInFinished(event)");
        changeButtonCounter2++;
        finishedListItem.appendChild(finishedListChangeButton);
    }
    
}

function removeRowInToDo(event) {

    let x = event.target.getAttribute("id");

    if (typeof document.getElementById(x).parentElement.parentElement.children[0] === "undefined" || typeof document.getElementById(x).parentElement.parentElement.children[1] === "undefined") {
        
        document.getElementById(x).parentElement.parentElement.previousSibling.remove();
        document.getElementById(x).parentElement.parentElement.remove();
    } else {
        document.getElementById(x).parentElement.remove();
    }
}

function changeInFinished(event) {
    let z = event.target.getAttribute("id");
    if (document.getElementById(z).previousSibling.disabled == true) {
        document.getElementById(z).previousSibling.disabled = false;
    } else {
        document.getElementById(z).previousSibling.disabled = true;
    }
    
}


// function resetForm() {
//     document.getElementById("myForm").reset();
// }
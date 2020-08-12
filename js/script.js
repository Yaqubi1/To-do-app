let toDoClickCounter = 0;
let FinishedClickCounter = 0;
let finishedButtonCounter = 0;
let ChangeButtonCounter = 0;
let ChangeButtonCounter2 = 0;
let finishedButton = [];

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
    toDoListInput.setAttribute("id", "changeButtonid" + ChangeButtonCounter);

    let syssla = document.getElementById("syssla");
    toDoListInput.setAttribute("value", syssla.value);

    toDoListInput.setAttribute("disabled", true)
    toDoListItem.appendChild(toDoListInput);

    let toDoListChangeButton = document.createElement("button");
    toDoListChangeButton.innerHTML = "Ändra";
    toDoListChangeButton.setAttribute("id", "changeButtonid" + ChangeButtonCounter);
    toDoListChangeButton.setAttribute("onclick", "changeInToDo(event)");
    ChangeButtonCounter++;
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
    console.log(document.getElementById(y).previousSibling.value);
//     if (document.getElementById(y).previousSibling.disabled == "true") {
//         document.getElementById(y).previousSibling.disabled=false;
//     } else {
//         document.getElementById(y).previousSibling.disabled=true;
//     }
 }

function createFinishedList(event) {
    toDoClickCounter--;
    FinishedClickCounter++;
    let y = event.target.getAttribute("id");
    console.log(y);
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

        let syssla2 = document.getElementById(y).parentElement.children[0].value;
        finishedListInput.setAttribute("value", syssla2);

        finishedListInput.setAttribute("disabled", true)
        finishedListItem.appendChild(finishedListInput);

        let finishedListChangeButton = document.createElement("button");
        finishedListChangeButton.innerHTML = "Ändra";
        finishedListChangeButton.setAttribute("id", "changeButtonid2" + ChangeButtonCounter2);
        finishedListChangeButton.setAttribute("onclick", "changeInFinished(event)");
        ChangeButtonCounter2++;
        finishedListItem.appendChild(finishedListChangeButton);

    } else {
        let finishedListItem = document.createElement("li");
        finishedListItem.setAttribute("class", "finishedListItem");
        document.getElementById("finishedList").appendChild(finishedListItem);

        let finishedListInput = document.createElement("input");
        finishedListInput.setAttribute("type", "text");

        let syssla2 = document.getElementById(y).parentElement.children[0].value;
        finishedListInput.setAttribute("value", syssla2);

        finishedListInput.setAttribute("disabled", true)
        finishedListItem.appendChild(finishedListInput);

        let finishedListChangeButton = document.createElement("button");
        finishedListChangeButton.innerHTML = "Ändra";
        finishedListChangeButton.setAttribute("id", "changeButtonid2" + ChangeButtonCounter2);
        finishedListChangeButton.setAttribute("onclick", "changeInFinished(event)");
        ChangeButtonCounter2++;
        finishedListItem.appendChild(finishedListChangeButton);
    }
    
}

function removeRowInToDo(event) {

    let x = event.target.getAttribute("id");

    if (typeof document.getElementById(x).parentElement.parentElement.children[0] === "undefined" || typeof document.getElementById(x).parentElement.parentElement.children[1] === "undefined") {
        
        console.log(document.getElementById(x).parentElement.children[0].value);
        document.getElementById(x).parentElement.parentElement.previousSibling.remove();
        document.getElementById(x).parentElement.parentElement.remove();
    } else {
        console.log(document.getElementById(x).parentElement.children[0].value);
        document.getElementById(x).parentElement.remove();
    }
}

function changeInFinished(event) {
    let z = event.target.getAttribute("id");
    if (document.getElementById(z).previousSibling.disabled=== "true") {
        document.getElementById(z).previousSibling.disabled=false;
    } else {
        document.getElementById(z).previousSibling.disabled=true;
    }
}


// function resetForm() {
//     document.getElementById("myForm").reset();
// }
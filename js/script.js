let toDoClickCounter = 0;
let FinishedClickCounter = 0;
let finishedButtonCounter = 0;
let ChangeButtonCounter = 0;
let finishedButton = [];
let changeButton = [];

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

    let syssla = document.getElementById("syssla");
    toDoListInput.setAttribute("placeholder", syssla.value);

    toDoListInput.setAttribute("disabled", true)
    toDoListItem.appendChild(toDoListInput);

    let toDoListChangeButton = document.createElement("button");
    toDoListChangeButton.innerHTML = "Ändra";
    toDoListChangeButton.setAttribute("id", "changeButtonid" + ChangeButtonCounter);
    ChangeButtonCounter++;
    toDoListItem.appendChild(toDoListChangeButton);

    let toDoListFinishedButton = document.createElement("button");
    toDoListFinishedButton.innerHTML = "Färdig";
    toDoListFinishedButton.setAttribute("id", "finishedButton" + finishedButtonCounter);
    toDoListFinishedButton.setAttribute("onclick", "myFunction(event)");
    finishedButtonCounter++;
    toDoListItem.appendChild(toDoListFinishedButton);

}

function myFunction(event) {
    let x = event.target.getAttribute("id");

    if (typeof document.getElementById(x).parentElement.parentElement.children[0] === "undefined" || typeof document.getElementById(x).parentElement.parentElement.children[1] === "undefined") {
        document.getElementById(x).parentElement.parentElement.previousSibling.remove();
        document.getElementById(x).parentElement.parentElement.remove();
    } else {
        document.getElementById(x).parentElement.remove();
        // document.getElementById(x).parentElement.parentElement.remove();
    }
    

    let finishedTitle = document.createElement("h1");
            finishedTitle.innerHTML = "Färdiga";
            finishedTitle.setAttribute("id", "finishedTitle");
            document.body.appendChild(finishedTitle);
}

// for (let i = 0; i <= finishedButtonCounter; i++) {
//     document.getElementById(""+x).addEventListener("click", function addToFinishedList() {
//         if (finishedButtonCounter == 1) {
            

//             let finishedList = document.createElement("ul");
//             finishedList.setAttribute("id", "finishedList");
//             document.body.appendChild(finishedList);

//             document.getElementById(finishedButtonCounter + i).previousElementSibling.remove();

//         } else {
//             document.getElementById(finishedButtonCounter + i).previousElementSibling.remove();
//             resetForm();
//         }
//     });
// }



// function resetForm() {
//     document.getElementById("myForm").reset();
// }
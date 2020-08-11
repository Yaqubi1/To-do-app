let toDoClickCounter = 0;

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
    toDoListItem.appendChild(toDoListChangeButton);

    let toDoListFinishedButton = document.createElement("button");
    toDoListChangeButton.innerHTML = "Färdig";
    toDoListInput.setAttribute("id", "changeButton");
    toDoListItem.appendChild(toDoListFinishedButton);

}

function resetForm() {
    document.getElementById("myForm").reset();
}
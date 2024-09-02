document.addEventListener("DOMContentLoaded", function () {

  let todoButton = document.getElementById("todoButton");
  
  let todoList = [
    {
      text: "think",
      uniqueNo:1
    },
    {
      text: "eat",
      uniqueNo:2
    },
    {
      text: "Learn",
      uniqueNo:3
    }
  ];
  

  function ontodobutton(){
    let todosCount = todoList.length;
    todosCount= todosCount +1;
    let userInput = document.getElementById("todouserinput");
    let userInputValue = userInput.value;
    
    if(userInputValue===""){
      alert("enter valid input");
      return;
    }
  
    let newTodo ={
     text : userInputValue,
     uniqueNo: todosCount
    };
    createAndDelete(newTodo);
    userInputValue.value=" ";
  }


  todoButton.onclick= function() {
    ontodobutton();
  }

 



function onchange(checkboxid,labelElement){
  let checkboxText = document.getElementById(checkboxid);
  let labelText = document.getElementById(labelElement);

  if(checkboxText.checked == true){
    labelText.classList.add("checked");
  }else {
    labelText.classList.remove("checked");
  }

}


function onDelete(todoId){
  let todotag = document.getElementById(todoId);
  todoContainer.removeChild(todotag);
}


function createAndDelete(task){

  let checkboxid = "checkBox"+task.uniqueNo;
  let labelId ="label"+task.uniqueNo;
  let todoId = "todo"+task.uniqueNo;

let todoText = document.createElement("li");
todoText.id=todoId;
todoText.classList.add("todo-container","d-flex","flex-row");
todoContainer.appendChild(todoText);

let todoInput = document.createElement("input");
todoInput.type="checkbox";
todoInput.id= checkboxid;
todoInput.onclick= function(){
  onchange(checkboxid,labelId);
}
todoInput.classList.add("checkBox");
todoText.appendChild(todoInput);

let labelBox = document.createElement("div");
labelBox.classList.add("labelBox","d-flex","flex-row");
todoText.appendChild(labelBox);

let labelTag = document.createElement("label");
labelTag.id= labelId;
labelTag.setAttribute("for",checkboxid);
labelTag.classList.add("labelTag");
labelTag.textContent=task.text;
labelBox.appendChild(labelTag);

let deleteIconBox = document.createElement("div");
deleteIconBox.classList.add("delete-icon-box");
labelBox.appendChild(deleteIconBox);

let deleteIcon = document.createElement("i");
deleteIcon.onclick= function(){
  onDelete(todoId);
}
deleteIcon.classList.add("far","fa-trash-alt","deleteIcon");
deleteIconBox.appendChild(deleteIcon);



}



for (let item of todoList){
createAndDelete(item);

}

});

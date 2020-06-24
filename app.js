const todoInputEL = document.querySelector(".todo__input");
const todoListEL = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");

function addListItem() {
  todoInputEL.addEventListener("keypress", function(event) {
    if(event.keyCode === 13) {
      let newListItem = createListItem(todoInputEL.value);
      todoListEL.appendChild(newListItem)
      todoInputEL.value = "";
     
    }
  })
}

function toggleDone() {
  todoListEL.addEventListener("click", function(event){
    if (event.target.classList.contains("todo__item")) {
      event.target.classList.toggle("done");
    }
  })
}


function createListItem(text) {
  const newListElement  = document.createElement("li");
  newListElement.textContent = text;
  newListElement.setAttribute("class", "todo__item");

  return newListElement;
}



addListItem();
toggleDone();

// function toggleDone () {
//   for (let elem of todoItemEls){
//     elem.addEventListener("click", function(){
//       elem.classList.toggle("done");
//     })
//   }
// }
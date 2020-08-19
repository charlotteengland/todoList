const TodoList = (_ => {

  const init = _ => {
    addListItem();
    toggleDone();
    deleteItem();
    createListItem();
    deleteItem();
  }


  //cache the dom
  const todoInputEL = document.querySelector(".todo__input");
  const todoListEL = document.querySelector(".todo__list");
  const todoItemEls = document.querySelectorAll(".todo__item");
  const deleteButton = document.querySelector(".delete");

  function addListItem() {
    todoInputEL.addEventListener("keypress", function(event) {
      if(event.keyCode === 13) {
        let newListItem = createListItem(todoInputEL.value);
        // todoListEL.appendChild(newListItem)
        todoListEL.insertBefore(newListItem, todoListEL.childNodes[0])
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
    newListElement.setAttribute("class", "todo__item");

    const labelEL = document.createElement("label")
    newListElement.appendChild(labelEL);
    labelEL.textContent = text;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    newListElement.appendChild(deleteButton)
    deleteButton.textContent = "Delete"

    // newListElement.appendChild(deleteButton);
    return newListElement;
  }

  function deleteItem() {
    todoListEL.addEventListener("click", function(event){
      
      if (event.target.classList.contains("delete")){
        console.log(event)  
        const ul = event.target.parentNode.parentNode;
        const li = event.target.parentNode;
        //ul.removeChild(li); -- removed button
        ul.removeChild(li);



      }
    
      

    })
  }

  return {
    init
  }

  // function toggleDone () {
  //   for (let elem of todoItemEls){
  //     elem.addEventListener("click", function(){
  //       elem.classList.toggle("done");
  //     })
  //   }
  // }
}) ();

export default TodoList;


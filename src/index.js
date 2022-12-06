document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form')
  form.addEventListener ('submit', submitData)
});

function submitData (event){
  event.preventDefault();
  //console.log ('submitted')
  event.target.description.value; //return the element that triggrered the event 
  //console.log (event.target.description.value)

  const taskList = document.getElementById('tasks');
  const task = document.createElement ('li')
  task.textContent =  event.target.description.value;
  taskList.append(task);

  const deleteButton = document.createElement('button')
  deleteButton.textContent = 'x'
  deleteButton.addEventListener('click', () => {
    //console.log ('xxx')
  task.remove()
  }); 
  task.append(deleteButton);


  event.target.reset();

  
}
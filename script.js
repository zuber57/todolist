let todoList = [];
display();
function add(){
  let ints = document.querySelector("#int");
  let date = document.querySelector("#date");
  let dat= date.value;
  let todoitem = ints.value;
  todoList.push({item:todoitem , duedate:dat});
  ints.value = " ";
  date.value=" "
  display();
}

function display(){
  let p = document.querySelector("#tasks");
  let newhtml = " ";
  // p.innerText = '';
  todoList.map((va , i)=>
   // let {item , duedate} = todoList[val],
  newhtml += `<div id="mid">
  <span>${va.item}</span>
  <span>${va.duedate}</span>
  <button id="del" onclick="todoList.splice(${i},1); display()">Delete</button>
                  </div>`)
                  p.innerHTML = newhtml
}


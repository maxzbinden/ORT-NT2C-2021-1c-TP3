const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let itemCount = 0;
let uncheckedCount = 0;
let tareas = [];

class Tarea {
  constructor(titulo){
    this.titulo = titulo
    this.terminada = false;
  }

}

function cambioDeEstado(evento){
  this.terminada = evento.target.checked
  renderizar();
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function addTodo() {
  const titulo = prompt("Ingrese tarea");
  const tarea = new Tarea(titulo);
  tareas.push(tarea);
  renderizar();
}

function renderizar(){

  limpiarDatos()

  tareas.map((t) =>{
    /* creo los elementos */
    let li = document.createElement('li');
    let span = document.createElement('span');
    let input = document.createElement('input')
    input.type = "checkbox";
    input.checked = t.terminada;
    input.className = classNames.TODO_CHECKBOX;
    input.onchange = cambioDeEstado.bind(t)
    let texto = document.createTextNode(t.titulo);
    /* appendeo */
    span.appendChild(texto);
    li.appendChild(span);
    li.appendChild(input);
    list.appendChild(li);
  })
  contador();
  //modificar los contadores en el html
  uncheckedCountSpan.innerText ="" + uncheckedCount;
  itemCountSpan.innerText = "" + itemCount;
}

function contador(){
  itemCount = tareas.length;
  tareas.map((t) => {
    if (!t.terminada){
      uncheckedCount++;
    }
  })
}
function limpiarDatos(){
  list.innerHTML = "";
  uncheckedCount = 0;
}

import Stepan from '/src/lib/stepan.js';

import { TodoListHead } from './components/todoList/index.js';

const todos = [
  {isDone: true, title: '(Done) Todo 1'},
  {isDone: false, title: 'Todo 2'}
];

class App extends Stepan.Component {
  render(todos) {
    const rootElement = this.parent;
    const divContainer = Stepan.createElement('div', rootElement);

    // TodoListHead-----------------
    new TodoListHead(divContainer).render();

    return rootElement
  }
}

new App(document.getElementById('todoapp')).render(todos)

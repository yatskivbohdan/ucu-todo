import Stepan from '/src/lib/stepan.js';

const todos = [
  {isDone: true, title: '(Done) Todo 1'},
  {isDone: false, title: 'Todo 2'}
];

class App extends Stepan.Component {
  render(todos) {
    return ''
  }
}

new App(document.getElementById('todoapp')).render(todos)

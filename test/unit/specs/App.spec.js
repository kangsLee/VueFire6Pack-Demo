import Vue from 'vue'
import App from 'src/App'

describe('Test App.vue', () => {
  const vm = new Vue(App).$mount();

  it('newTodoText has no value', done => {
    vm.addTodo().then(data => {
      expect(data)
        .to.be.a('undefined');
      done();
    });
  }).timeout(10000);

  it('newTodoTextAdd has a value', done => {
    vm.newTodoText = 'add';

    vm.addTodo().then(data => {
      expect(data)
        .to.be.a('object');
      done();
    });
  }).timeout(10000);

  it('update todo text', () => {
    let todosLength = Object.keys(vm.todos).length;

    expect(vm.updateTodoText(Object.keys(vm.todos)[todosLength - 1], 'updated'))
      .to.a('object');
  });

  it('remove todo text', () => {
    expect(vm.removeTodo(Object.keys(vm.todos)[0]))
      .to.a('object');
  })
});

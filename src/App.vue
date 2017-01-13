<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello/>
    <input
      v-model.trim="newTodoText"
      @keyup.enter="addTodo"
      placeholder="Add new todo">
    <ul>
      <li v-for="(todo, key) in todos">
        <input
          :value="todo.text"
          @input="updateTodoText(key, $event.target.value)">
        <button @click="removeTodo(key)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import Firebase from 'firebase';
import Hello from './components/Hello';

// You can copy and paste config code rom the Firebase Console!
const config = {
  databaseURL: 'https://vuefirees6example.firebaseio.com',
  //storageBucket: xxx
  //messagingSenderId: xxx
};

const firebaseApp = Firebase.initializeApp(config);
const db = firebaseApp.database();

const todosRef = db.ref('todos');

export default {
  name: 'app',
  data() {
    return {
      newTodoText: '',
      todos: [],
    };
  },
  components: {
    Hello,
  },
  created() {
    todosRef.limitToLast(25).on('value', (snapshot) => {
      this.todos = snapshot.val();
    });
  },
  methods: {
    addTodo() {
      if (this.newTodoText) {
        return todosRef.push({
          text: this.newTodoText,
        }, () => {
          this.newTodoText = '';
        });
      }
      return Promise.resolve(undefined);
    },
    updateTodoText(key, newText) {
      return todosRef.child(key).child('text').set(newText);
    },
    removeTodo(key) {
      return todosRef.child(key).remove();
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

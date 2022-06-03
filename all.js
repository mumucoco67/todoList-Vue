let app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: [
      {
        id: "",
        title: "hello world",
        completed: false,
      },
    ],
    cacheTodo: {},
    cacheTitle: "",
    visibilty: "all",
  },
  methods: {
    addTodo: function () {
      let value = this.newTodo.trim();
      let timestamp = Math.floor(Date.now());
      if (!value) {
        return;
      }
      console.log(value, timestamp);
      this.todos.push({
        id: timestamp,
        title: value,
        completed: false,
      });
      this.newTodo = "";
    },
    removeTodo: function (todo) {
      let vm = this;
      let newIndex = vm.todos.findIndex(function (item, key) {
        return todo.id === item.id;
      });

      this.todos.splice(newIndex, 1);
    },
    editTodo: function (item) {
      this.cacheTodo = item;
      this.cacheTitle = item.title;
    },
    cancelEdit: function () {
      this.cacheTodo = {};
    },
    doneEdit: function (item) {
      item.title = this.cacheTodo;
      this.cacheTitle = "";
      this.cacheTodo = {};
    },
  },
  computed: {
    filterTodo: function () {
      if (this.visibilty == "all") {
        return this.todos;
      } else if (this.visibilty == "active") {
        let newdata = [];
        this.todos.forEach(function (item) {
          if (!item.completed) {
            newdata.push(item);
          }
        });
        return newdata;
      } else if (this.visibilty == "completed") {
        let newdata = [];
        this.todos.forEach(function (item) {
          if (item.completed) {
            newdata.push(item);
          }
        });
        return newdata;
      }
    },
  },
});

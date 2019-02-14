Vue.component('todo-item', {
  template: '<li>This is a todo </li>'
});

Vue.component('todo-item2', {
  props: ['todo2'],
  template: '<li>{{ todo2.text }}</li>'
})


var app = new Vue({
  el: '#app',
  data: {
    todos: [{
        text: 'Learn JavaScript'
      },
      {
        text: 'Learn Vue'
      },
      {
        text: 'Build something awesome'
      }
    ],
    seen: true,
    message: 'hello world!',

    groceryList: [{
        id: 0,
        text: 'Vegetables'
      },
      {
        id: 1,
        text: 'Cheese'
      },
      {
        id: 2,
        text: 'Whatever else humans are supposed to eat'
      }
    ]

  }
})


var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})


new Vue({
  el: '#demo',
  data: {
    show: true
  }
});


var demo1 = new Vue({
  el: '#demo1',
  data: {
    message: 'Hello Vue.js!'
  },
  //计算方法：无缓存，每次都计算
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  },
  //计算属性：有缓存，只在相关依赖发生改变时它们才会重新求值
  computed: {
    // 计算属性的 getter
    reversedMessageStr: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
});


var demo2 = new Vue({
  el: '#demo2',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
      console.log(val, fullName);
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})


var demo3 = new Vue({
  el: '#demo3',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  methods: {
    onClick() {
      this.fullName = 'MDF dfdf'
    }
  },
  computed: {
    fullNameChange: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})


var demo4 = new Vue({
  el: '#demo4',
  data: {
    loginType: 'userName',
    numbers: [1, 2, 3, 4, 5]
  },
  methods: {
    toggleLoginType: function () {
      if (this.loginType == 'userName') {
        this.loginType = 'Email';
      } else {
        this.loginType = 'userName';
      }

    },
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },

  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
});




Vue.component('todo-item', {
  template: '\
    <li>\
      {{ title }}\
      <button v-on:click="$emit(\'remove\')">Remove</button>\
    </li>\
  ',
  props: ['title']
})

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Do the dishes',
      },
      {
        id: 2,
        title: 'Take out the trash',
      },
      {
        id: 3,
        title: 'Mow the lawn'
      }
    ],
    nextTodoId: 4
  },
  methods: {
    addNewTodo: function () {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      })
      this.newTodoText = ''
    }
  }
})
Here we use the mongoose database to store our data of todo-list. In our TodoList we basically storing 3 kinds of data: 1st user data, 2nd main TodoList data, 3rd subTodo-list data.

In User List we storing : userName, Email & Password by useing the mongoose.

In todeList we storing : content, complete, createBy(it will take the reference) & subTodo(it will take the reference).

In SubTodoList we storing : content, complete & createdBy (it will take the reference).
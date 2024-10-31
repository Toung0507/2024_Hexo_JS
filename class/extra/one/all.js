const multiplicand = 9;
for (let multiplier = 1; multiplier <= multiplicand; multiplier++) {
  let product = '';
  for (let j = 1; j <= multiplicand; j++) {
    product += `${multiplier} * ${j} = ${multiplier * j} \\t`;
  }
  console.log(product);
}

// multiplier 表示乘數，multiplicand 表示被乘數，product 代表乘積

function manageTodoList(todoList) {
    // 更新待辦事項清單
    todoList.forEach((todo, index) => {
      if (!todo.completed) {
        todo.completed = true;
      }
    });
    // 通知用戶
    console.log('已完成的待辦事項清單：', todoList);
  }

function printInfo(person) {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
}

function printStudentInfo(student) {
    printInfo(student)
    console.log(`Major: ${student.major}`);
}

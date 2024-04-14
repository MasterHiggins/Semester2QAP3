//Question 1
function User(n, a) {
    this.name = n;
    this.age = a;
}

let users = [];

function makeObj() {
    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let user = new User(name, age);
    users.push(user);
}

function displayObj() {
    if (users.length > 0) {
        let lastUser = users[users.length - 1];
        document.getElementById('userName').textContent = 'Name: ' + lastUser.name;
        document.getElementById('userAge').textContent = 'Age: ' + lastUser.age;
    }
}
  
//Question 2
function showJSON() {
    var xmlhttp = new XMLHttpRequest();
    var url = "data/user.json";

    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        var jsonData = JSON.parse(this.responseText);
        displayData(jsonData);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function displayData(data) {
    var text = "Name: " + data.name + "<br>Company: " + data.company;
    document.getElementById("q2").innerHTML = text;
}
  
//Question 3
function fetchTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {
        const todosContainer = document.getElementById('q3');
        todos.forEach(todo => {
            const todoItem = document.createElement('p');
            todoItem.textContent = `Todo ${todo.id}: ${todo.title}`;
            todosContainer.appendChild(todoItem);
        });
        })
        .catch(error => console.error('Error:', error));
}

document.getElementById('btnq3').addEventListener('click', fetchTodos);
  
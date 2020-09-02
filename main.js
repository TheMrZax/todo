const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');
const li = document.getElementsByClassName('li.item');

const checkTask = (e) => {
    const liItem = e.target.parentNode;
    liItem.classList.add('done');
    liItem.innerHTML += '<i class="fas fa-check-circle"></i>'
}

const addTask = (e) => {
    e.preventDefault();
    if (!input.value) return alert("Wpisz treść zadania!");
    const liItem = document.createElement('li');
    liItem.classList.add('item');
    liItem.innerHTML = input.value + '<i class="far fa-check-circle"></i>';
    ul.appendChild(liItem);
    input.value = "";
    liItem.querySelector('i').addEventListener('click', checkTask);
}

button.addEventListener('click', addTask);
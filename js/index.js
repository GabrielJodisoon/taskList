

let listElement = document.querySelector('.list');
let textElement = document.querySelector('input');
let buttonElement = document.querySelector('button');

let list = [];

function renderList(){
    listElement.innerHTML = '';

    list.forEach((item, index) => {
        var liElement = document.createElement('li');
        var liText = document.createTextNode(item);

        var deleteLinkElement = document.createElement('a');
        var deleteIconElement = document.createElement('i');

        var editLinkElement = document.createElement('a');
        var editIconElement = document.createElement('i');

        deleteLinkElement.setAttribute('class', "fa-solid fa-trash");
        deleteLinkElement.setAttribute('href', '#');
        deleteLinkElement.setAttribute('onclick', 'deleteItem(' + index + ')');


        editLinkElement.setAttribute('class', "fa-solid fa-pen");
        editLinkElement.setAttribute('href', '#');
        editLinkElement.setAttribute('onclick', 'editItem(' + index + ')');
        editLinkElement.setAttribute('style', 'color: #d9d9d9')

        liElement.setAttribute('id', 'editando(' + index + ')');

        editLinkElement.appendChild(editIconElement);
        deleteLinkElement.appendChild(deleteIconElement);

        liElement.appendChild(liText);
        liElement.appendChild(editLinkElement);

        liElement.appendChild(deleteLinkElement);

        listElement.appendChild(liElement);


    })
}

renderList();

buttonElement.addEventListener('click', addItem)

function addItem() {
    var itemTexto = textElement.value;

    if (itemTexto == '') {
        alert('adicione uma tarefa')
    } else {
        list.push(itemTexto);

        textElement.value = '';
    }
    renderList();

}

function editItem(index){
    

    var pegandoTarefa = document.getElementById('editando('+ index +')');
    var tarefaEditada = prompt('tarefa nova: ');

    tarefaEditada = tarefaEditada.replace();
    pegandoTarefa.firstChild.nodeValue = tarefaEditada;

}


function deleteItem(pos) {
    list.splice(pos, 1);


    renderList();
}

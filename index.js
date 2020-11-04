
const listItem = document.querySelector('#toDo');
const addItem = document.querySelector('.add');
const items = document.querySelector('.wrapper');


function addList() {
    const ItemValue = listItem.value;
    if (ItemValue) {
        localStorage.setItem(ItemValue, ItemValue);
        const newItem = document.createElement('li')
        const removeItem = document.createElement('button');
        const sp = document.createElement('span')
        const space = document.createElement('br')
        const edit = document.createElement('button');


        removeItem.classList.add('butStyle')
        //     removeItem.innerHTML = '<i class="fas fa-trash"></i>';
        removeItem.classList.add('ion-trash-a')
        sp.classList.add('txtStyle')
        edit.classList.add('ion-edit')
        newItem.classList.add('itemStyle')
        sp.textContent = ItemValue
        newItem.appendChild(removeItem)
        newItem.appendChild(edit)

        newItem.appendChild(sp)
        newItem.appendChild(space)
        items.appendChild(newItem)

        removeItem.addEventListener('click', e => {
            items.removeChild(e.target.parentElement)
        })

        edit.addEventListener('click', e => {
            const txt = document.querySelector('#toDo');
            let editedText = txt.value;
            e.target.parentElement.children[2].textContent = editedText

        })


    }

}
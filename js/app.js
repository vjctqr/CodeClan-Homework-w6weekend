document.addEventListener('DOMContentLoaded', () => {
    const newItemform = document.querySelector('#new-item-form');
    newItemform.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    const readingListItem = createReadingListItem(event.target);
    const readingList = document.querySelector('#reading-list');
    readingList.appendChild(readingListItem);

    event.target.reset();
}

const createReadingListItem = function (form) {
    const readingListItem = document.createElement('li');
    readingListItem.classList.add('reading-list-item');

    const type = document.createElement('h2');
    type.textContent = form.type.value;
    readingListItem.appendChild(type);

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    readingListItem.appendChild(name);

    const origin = document.createElement('h2');
    origin.textContent = form.origin.value;
    readingListItem.appendChild(origin);

    const season = document.createElement('h2');
    season.textContent = form.season.value;
    readingListItem.appendChild(season);

    const skin = document.createElement('h2')
    skin.textContent = form.skin.value;
    readingListItem.appendChild(skin); 

    return readingListItem;
}

const handleDeleteAllClick = function (event) {
    const readingList = document.querySelector('#reading-list');
    readingList.innerHTML = '';
}


/* global data */
var $newEntry = document.querySelector('.new-entry');
var $entriesPage = document.querySelector('.entries-page');
var $title = document.querySelector('.title');
var $photo = document.querySelector('.photo');
var $photoUrl = document.querySelector('.photo-url');
var $notes = document.querySelector('.notes');
var $form = document.querySelector('form');
var $listOfEntries = document.querySelector('.list-of-entries');
var $noEntries = document.querySelector('.no-entries');
var $navEntries = document.querySelector('.nav-entries');
var $newButton = document.querySelector('.new-button');
var $entryTitle = document.querySelector('.entry-title');
var $deleteNav = document.querySelector('.delete-nav');
var $modalContainer = document.querySelector('.modal-container');
var $cancelButton = document.querySelector('.cancel-button');
var $saveContainer = document.querySelector('.save-container');

function uploadPhoto(event) {
  $photo.setAttribute('src', $photoUrl.value);
}

function saveEntry(event) {
  event.preventDefault();
  deleteEntry();
  var entry = {
    title: $title.value,
    photoUrl: $photoUrl.value,
    notes: $notes.value,
    nextEntryId: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift(entry);
  $photo.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
  renderEntry(data.entries[0]);
  $listOfEntries.prepend($listOfEntries.lastChild);
  $noEntries.setAttribute('class', 'row no-entries justify-center hidden');
  goToEntries(event);
}

function renderEntry(entry) {
  var liRow = document.createElement('li');
  liRow.setAttribute('class', 'row');
  liRow.setAttribute('data-entry-id', entry.nextEntryId);
  $listOfEntries.appendChild(liRow);
  var imgPhotoColumnHalf = document.createElement('img');
  imgPhotoColumnHalf.setAttribute('src', entry.photoUrl);
  imgPhotoColumnHalf.setAttribute('alt', 'Photo of ' + entry.title);
  imgPhotoColumnHalf.setAttribute('class', 'photo column-half');
  liRow.appendChild(imgPhotoColumnHalf);
  var divColumnHalf = document.createElement('div');
  divColumnHalf.setAttribute('class', 'column-half');
  liRow.appendChild(divColumnHalf);
  var divTitleEdit = document.createElement('div');
  divTitleEdit.setAttribute('class', 'row align-baseline justify-between');
  divColumnHalf.appendChild(divTitleEdit);
  var h2Title = document.createElement('h2');
  h2Title.textContent = entry.title;
  var iconEdit = document.createElement('i');
  iconEdit.setAttribute('class', 'fas fa-pen');
  divTitleEdit.appendChild(h2Title);
  divTitleEdit.appendChild(iconEdit);
  var pEntries = document.createElement('p');
  pEntries.textContent = entry.notes;
  divColumnHalf.appendChild(pEntries);
}

function createEntries(event) {
  for (var i = 0; i < data.entries.length; i++) {
    renderEntry(data.entries[i]);
  }
}

function goToEntries(event) {
  $newEntry.setAttribute('class', 'container new-entry hidden');
  $entriesPage.setAttribute('class', 'container entries-page');
}

function goToNewEntry(event) {
  $entryTitle.textContent = 'New Entry';
  $newEntry.setAttribute('class', 'container new-entry');
  $entriesPage.setAttribute('class', 'container entries-page hidden');
  $photo.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
  data.editing = null;
}

function goToEdit(event) {
  if (event.target.getAttribute('class') === 'fas fa-pen') {
    goToNewEntry();
    $entryTitle.textContent = 'Edit Entry';
    $deleteNav.setAttribute('class', 'delete-nav');
    $saveContainer.setAttribute('class', 'row save-container justify-between align-baseline');
    var idOfEdit = JSON.parse(event.target.closest('li').getAttribute('data-entry-id'));
    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].nextEntryId === idOfEdit) {
        data.editing = data.entries[i];
      }
    }
    $photo.setAttribute('src', data.editing.photoUrl);
    $photo.setAttribute('alt', 'Photo of ' + data.editing.title);
    $title.value = data.editing.title;
    $photoUrl.value = data.editing.photoUrl;
    $notes.value = data.editing.notes;
  }
}

function deleteEntry(event) {
  if (data.editing !== null) {
    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].nextEntryId === data.editing.nextEntryId) {
        data.entries.splice(i, 1);
        var $hideEntry = $listOfEntries.querySelectorAll('li');
        for (var j = 0; j < $hideEntry.length; j++) {
          if (JSON.parse($hideEntry[j].getAttribute('data-entry-id')) === data.editing.nextEntryId) {
            $hideEntry[j].setAttribute('class', 'hidden');
          }
        }
      }
    }
  }
}

function openDeleteModal(event) {
  $modalContainer.style.display = 'block';
}

function closeDeleteModal(event) {
  $modalContainer.style.display = 'none';
}

$photoUrl.addEventListener('input', uploadPhoto);
$form.addEventListener('submit', saveEntry);

if (data.entries < 1) {
  $noEntries.setAttribute('class', 'row no-entries justify-center');
} else {
  window.addEventListener('DOMContentLoaded', createEntries(event));
}

$navEntries.addEventListener('click', goToEntries);
$newButton.addEventListener('click', goToNewEntry);
$listOfEntries.addEventListener('click', goToEdit);
$deleteNav.addEventListener('click', openDeleteModal);
$cancelButton.addEventListener('click', closeDeleteModal);
/* exported data */

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

function uploadPhoto(event) {
  $photo.setAttribute('src', $photoUrl.value);
}

function saveEntry(event) {
  event.preventDefault();
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
  $listOfEntries.appendChild(liRow);
  var imgPhotoColumnHalf = document.createElement('img');
  imgPhotoColumnHalf.setAttribute('src', entry.photoUrl);
  imgPhotoColumnHalf.setAttribute('alt', 'Photo of ' + entry.title);
  imgPhotoColumnHalf.setAttribute('class', 'photo column-half');
  liRow.appendChild(imgPhotoColumnHalf);
  var divColumnHalf = document.createElement('div');
  divColumnHalf.setAttribute('class', 'column-half');
  liRow.appendChild(divColumnHalf);
  var h2Title = document.createElement('h2');
  h2Title.textContent = entry.title;
  var pEntries = document.createElement('p');
  pEntries.textContent = entry.notes;
  divColumnHalf.appendChild(h2Title);
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
  $newEntry.setAttribute('class', 'container new-entry');
  $entriesPage.setAttribute('class', 'container entries-page hidden');
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
/* exported data */

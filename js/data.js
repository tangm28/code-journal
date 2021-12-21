/* exported data */
var $title = document.querySelector('.title');
var $photo = document.querySelector('.photo');
var $photoUrl = document.querySelector('.photo-url');
var $notes = document.querySelector('.notes');
var $form = document.querySelector('form');
var previousEntries = null;

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

function loadData(event) {
  previousEntries = localStorage.getItem('entries-local-storage');
  if (previousEntries !== null) {
    data.entries = JSON.parse(previousEntries).entries;
  }
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
  $title.value = '';
  $photoUrl.value = '';
  $notes.value = '';
}

function saveDataB4Unload(event) {
  if (data.entries.length > 0) {
    localStorage.setItem('entries-local-storage', JSON.stringify(data));
  }
}

window.addEventListener('load', loadData);
$form.addEventListener('submit', saveEntry);
window.addEventListener('beforeunload', saveDataB4Unload);

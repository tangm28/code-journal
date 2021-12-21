/* global data */
var $title = document.querySelector('.title');
var $photo = document.querySelector('.photo');
var $photoUrl = document.querySelector('.photo-url');
var $notes = document.querySelector('.notes');
var $form = document.querySelector('form');

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
}

$photoUrl.addEventListener('input', uploadPhoto);
$form.addEventListener('submit', saveEntry);

/* exported data */

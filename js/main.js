/* global data */
// var $title = document.querySelector('.title');
var $photo = document.querySelector('.photo');
var $photoUrl = document.querySelector('.photo-url');
// var $notes = document.querySelector('.notes');
// var $form = document.querySelector('form');
function uploadPhoto(event) {
  $photo.setAttribute('src', $photoUrl.value);
}

// function saveEntry(event) {
//   event.preventDefault();
//   var previousEntries = localStorage.getItem('entries-local-storage');
//   var entry = {
//     title: $title.value,
//     photoUrl: $photoUrl.value,
//     notes: $notes.value,
//     nextEntryId: data.nextEntryId
//   };
//   if (previousEntries !== null) {
//     data.entries.concat(JSON.parse(previousEntries).entries);
//   }
//   data.nextEntryId++;
//   data.entries.unshift(entry);
//   localStorage.setItem('entries-local-storage', JSON.stringify(data));
//   $photo.setAttribute('src', 'images/placeholder-image-square.jpg');
//   $title.value = '';
//   $photoUrl.value = '';
//   $notes.value = '';
// }
$photoUrl.addEventListener('input', uploadPhoto);
// $form.addEventListener('submit', saveEntry);
// window.addEventListener('beforeunload', function (event) {
//   var previousEntries = localStorage.getItem('entries-local-storage');
//   localStorage.setItem('entries-local-storage', previousEntries);
// });
/* exported data */

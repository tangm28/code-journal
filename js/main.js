/* global data */
var $title = document.querySelector('.title');
var $photo = document.querySelector('.photo');
var $photoUrl = document.querySelector('.photo-url');
var $notes = document.querySelector('.notes');
var $form = document.querySelector('form');
var $listOfEntries = document.querySelector('.list-of-entries');
function uploadPhoto(event) {
  $photo.setAttribute('src', $photoUrl.value);
}

function saveEntry(event) {
  event.preventDefault();
  var previousEntries = localStorage.getItem('entries-local-storage');
  var entry = {
    title: $title.value,
    photoUrl: $photoUrl.value,
    notes: $notes.value,
    nextEntryId: data.nextEntryId
  };
  if (previousEntries !== null) {
    data.entries.concat(JSON.parse(previousEntries).entries);
  }
  data.nextEntryId++;
  data.entries.unshift(entry);
  localStorage.setItem('entries-local-storage', JSON.stringify(data));
  $photo.setAttribute('src', 'images/placeholder-image-square.jpg');
  $title.value = '';
  $photoUrl.value = '';
  $notes.value = '';
}

/* <li class="row">
  <img src="images/placeholder-image-square.jpg" alt="No image" class="photo column-half">
  <div class ="column-half">
  <h2>Title</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.Perspiciatis repudiandae voluptate recusandae eum ipsa id.Perferendis minima commodi nihil nulla, modi quod veritatis.Modi, dolorem!</p>
  </div>
</li> */

function renderEntries(event) {
  var liRow = document.createElement('li');
  liRow.setAttribute('class', 'row');
  $listOfEntries.appendChild(liRow);
  var imgPhotoColumnHalf = document.createElement('img');
  imgPhotoColumnHalf.setAttribute('src', 'images/placeholder-image-square.jpg');
  imgPhotoColumnHalf.setAttribute('alt', 'No image');
  imgPhotoColumnHalf.setAttribute('class', 'photo column-half');
  liRow.appendChild(imgPhotoColumnHalf);
  var divColumnHalf = document.createElement('div');
  divColumnHalf.setAttribute('class', 'column-half');
  liRow.appendChild(divColumnHalf);
  var h2Title = document.createElement('h2');
  h2Title.textContent = 'Title';
  var pEntries = document.createElement('p');
  pEntries.textContent = 'Lorem50';
  divColumnHalf.appendChild(h2Title);
  divColumnHalf.appendChild(pEntries);
}

renderEntries(event);

$photoUrl.addEventListener('input', uploadPhoto);
$form.addEventListener('submit', saveEntry);
window.addEventListener('beforeunload', function (event) {
  var previousEntries = localStorage.getItem('entries-local-storage');
  localStorage.setItem('entries-local-storage', previousEntries);
});
/* exported data */

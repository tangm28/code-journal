/* exported data */
var previousEntries;

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

function saveDataB4Unload(event) {
  localStorage.setItem('entries-local-storage', JSON.stringify(data));
}
previousEntries = localStorage.getItem('entries-local-storage');
if (previousEntries !== null) {
  data.entries = JSON.parse(previousEntries).entries;
  data.nextEntryId = JSON.parse(previousEntries).nextEntryId++;
}
window.addEventListener('beforeunload', saveDataB4Unload);

/* exported data */
var previousEntries = null;

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

function saveDataB4Unload(event) {
  if (data.entries.length > 0) {
    localStorage.setItem('entries-local-storage', JSON.stringify(data));
  }
}

previousEntries = localStorage.getItem('entries-local-storage');
if (previousEntries !== null) {
  data = JSON.parse(previousEntries);
}
window.addEventListener('beforeunload', saveDataB4Unload);

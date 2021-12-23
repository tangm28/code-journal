/* exported data */
var previousEntries;

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
    data.nextEntryId = JSON.parse(previousEntries).nextEntryId++;
  }
}



function saveDataB4Unload(event) {
  if (data.entries.length > 0) {
    localStorage.setItem('entries-local-storage', JSON.stringify(data));
  }
}


window.addEventListener('load', loadData);
previousEntries = localStorage.getItem('entries-local-storage');
if (previousEntries !== null) {
  data = JSON.parse(previousEntries);
}
window.addEventListener('beforeunload', saveDataB4Unload);
